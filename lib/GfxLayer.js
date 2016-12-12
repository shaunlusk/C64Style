var C64Style = C64Style || {};

C64Style.GfxLayer = function(screenContext, canvas, props) {
  props = props || {};
  C64Style.Layer.call(this, screenContext, canvas, props);
  this._elements = [];
  this._dirtyElements = new UniquePriorityQueue();
  this._dirtyElements.setInvertPriority(false);
  this._removedElements = {};
  this._zIndexCounter = 0;
};

C64Style.GfxLayer.prototype = new C64Style.Layer();
C64Style.GfxLayer.prototype.constructor = C64Style.GfxLayer;

C64Style.GfxLayer.prototype.addElement = function(element) {
  this._elements.push(element);

  // give a natural ordering to elements added with no specific zIndex
  // prevent render order swapping and element "switching" places
  if (element.getZIndex() === -1) {
    element.setZIndex(this._zIndexCounter++);
  }
};

C64Style.GfxLayer.prototype.removeElementById = function(id) {
  var idx = C64Style.linSearch(this._elements, id, function(element,value){return element.getId() === value;});
  if (idx > -1) {
    this._removedElements[this._elements[idx].getId()] = this._elements[idx];
    var elem = this._elements[idx];
    // ensure it gets cleared
    elem.setDirty(true);
    elem.setHidden(true);
    this._dirtyElements.push(elem.getZIndexComparable());
    return elem;
  }
  return null;
};

C64Style.GfxLayer.prototype.removeElement = function(element) {
  return this.removeElementById(element.getId());
};

C64Style.GfxLayer.prototype.update = function(time,diff) {
  var dirtyElement;
  var i;
  for (i = 0; i < this._elements.length; i++) {
      dirtyElement = this._elements[i].update(time,diff);
      if (dirtyElement) {
        this._dirtyElements.push(this._elements[i].getZIndexComparable());
      }
      this._checkBorderCollision(this._elements[i], time);
  }

  this._handleCollisions();
};

C64Style.GfxLayer.prototype._checkBorderCollision = function(element,time) {
  if (element.getCollisionBoxX() <= 0) {
    this.getScreenContext().notify(new C64Style.Event(C64Style.EventType.ELEMENT_HIT_LEFT_EDGE, element, time));
  }
  if (element.getCollisionBoxX() + element.getCollisionBoxWidth() > this.getCanvas().width) {
    this.getScreenContext().notify(new C64Style.Event(C64Style.EventType.ELEMENT_HIT_RIGHT_EDGE, element, time));
  }
  if (element.getCollisionBoxY() <= 0) {
    this.getScreenContext().notify(new C64Style.Event(C64Style.EventType.ELEMENT_HIT_TOP_EDGE, element, time));
  }
  if (element.getCollisionBoxY() + element.getCollisionBoxHeight() > this.getCanvas().height) {
    this.getScreenContext().notify(new C64Style.Event(C64Style.EventType.ELEMENT_HIT_BOTTOM_EDGE, element, time));
  }
};

C64Style.GfxLayer.prototype._handleCollisions = function() {
  var element1, element2, j;
  for (i = 0; i < this._elements.length - 1; i++) {
    element1 = this._elements[i];
    for (j = i+1; j < this._elements.length; j++) {
      element2 = this._elements[j];

      this._collisionCheckElementsIfNeeded(element1, element2);
    }

    // var removedKeys = Object.keys(this._removedElements);
    // for (j = 0; j < removedKeys.length; j++) {
    //   key = removedKeys[j];
    //   element2 = this._removedElements[key];
    //
    //   this._collisionCheckElementsIfNeeded(element1, element2);
    // }
  }
};

C64Style.GfxLayer.prototype._collisionCheckElementsIfNeeded = function(element1, element2) {
  if (element1.collidesWith(element2)) {
    // TODO event
    this._updateElementOnCollision(element1);
    this._updateElementOnCollision(element2);
  }
};

C64Style.GfxLayer.prototype._updateElementOnCollision = function(element) {
  element.setHasCollision(true);
  element.setDirty(true);
  this._dirtyElements.push(element.getZIndexComparable());
};

C64Style.GfxLayer.prototype.render = function(time,diff) {
  var i;

  for (i = 0; i < this._dirtyElements.size(); i++) {
    this._dirtyElements.getByIndex(i).getElement().clear(time,diff);
  }

  while (this._dirtyElements.peek()) {
    var element = this._dirtyElements.pop().getElement();
    element.render(time,diff);
  }

  this._cleanUp();
};

C64Style.GfxLayer.prototype._cleanUp = function() {
  Object.keys(this._removedElements).forEach(function(elementId) {
    var removedElement = this._removedElements[elementId];
    var idx = C64Style.linSearch(this._elements, elementId, function(element,value){return element.getId() === value;});
    this._elements.splice(idx,1);
  }.bind(this));
  this._removedElements = {};
  this._dirtyElements.clear();
};

C64Style.GfxLayer.prototype.handleMouseEvent = function(event) {
  for (var i = 0; i < this._elements.length; i++) {
    this._elements[i].handleMouseEvent(event);
  }
};
