var C64Style = C64Style || {};

C64Style.UiLayer = function(engineContext, canvas, config) {
  config = config || {};
  this._canvas = canvas;
  this._canvasContext = canvas.getContext("2d");
  this._engineContext = engineContext;
  this._elements = [];
  this._dirtyElements = new PriorityQueue();
  this._dirtyElements.setInvertPriority(false);
  this._removedElements = {};
};

C64Style.UiLayer.prototype.addElement = function(element) {
  this._elements.push(element);
  element.setParentLayer(this);
};

C64Style.UiLayer.prototype.removeElementById = function(id) {
  var idx = C64Style.linSearchByPropertyKey(this._elements, "id", id);
  if (idx > -1) {
    this._removedElements[this._elements[idx].id] = this._elements[idx];
    var elem = this._elements[idx];
    // ensure it gets cleared
    elem.setDirty(true);
    elem.setRemoved(true);
    this._dirtyElements.push(elem.getZIndexComparable());
    return elem;
  }
  return null;
};

C64Style.UiLayer.prototype.removeElement = function(element) {
  this.removeElementById(element.id);
};

C64Style.UiLayer.prototype.update = function(time,diff) {
  var dirtyElement;
  var i;
  for (i = 0; i < this._elements.length; i++) {
      dirtyElement = this._elements[i].update(time,diff);
      if (dirtyElement) {
        this._dirtyElements.push(this._elements[i].getZIndexComparable());
      }
  }

  // check collisions
  this._checkForCollisions(time);
  this._checkForCollisions_removedElements(time);
};

C64Style.UiLayer.prototype._checkForCollisions_removedElements = function(time) {
  var a,b,key,event;
  var removedKeys = Object.keys(this._removedElements);
  for (i = 0; i < removedKeys.length; i++) {
    key = removedKeys[i];
    for (var j = 0; j < this._elements.length; j++) {
      a = this._removedElements[key];
      b = this._elements[j];
      if (a.dirty && b.dirty) continue;
      // a is in removed list; treat as if recently hidden, regardless if it actually was. so, don't skip if it is not recently hidden
      // if (b.hidden && !b._hiddenRecently) continue;

      var collided = a.collidesWith(b);
      var collidedLast = a.collidesWith_LastPosition(b);
      if ( collided || collidedLast ) {
        if (!a.dirty) {
          a.setDirty(true);
          this._dirtyElements.push(a.getZIndexComparable());
        }
        if (!b.dirty) {
          b.setDirty(true);
          this._dirtyElements.push(b.getZIndexComparable());
        }
      }
    }
  }
};

C64Style.UiLayer.prototype._checkForCollisions = function(time) {
  var a,b,event;
  for (i = 0; i < this._elements.length; i++) {
    for (var j = 1; j < this._elements.length; j++) {
      if (i===j) continue;
      a = this._elements[i];
      b = this._elements[j];
      // || this._removedElements[a.id] || this._removedElements[b.id]
      // || a.hidden || b.hidden
      if ((a.dirty && b.dirty)  ) continue;
      // if (a.hidden && !a._hiddenRecently) continue;
      // if (b.hidden && !b._hiddenRecently) continue;

      var collided = a.collidesWith(b);
      var collidedLast = a.collidesWith_LastPosition(b);
      if ( collided || collidedLast ) {
        if (!a.dirty) {
          a.setDirty(true);
          this._dirtyElements.push(a.getZIndexComparable());
        }
        if (!b.dirty) {
          b.setDirty(true);
          this._dirtyElements.push(b.getZIndexComparable());
        }
      }
    }
  }
};

C64Style.UiLayer.prototype.render = function() {
  var i;
  var removedKeys = Object.keys(this._removedElements);
  var removedElement = null;
  for (i = 0; i < removedKeys.length; i++) {
    removedElement = this._removedElements[removedKeys[i]];
    removedElement.clear(this._canvasContext);
    removedElement.setParentLayer(null);
  }
  for (i = 0; i < this._dirtyElements.size(); i++) {
    this._dirtyElements.getByIndex(i).getElement().clear(this._canvasContext);
  }

  while (this._dirtyElements.peek()) {
    var element = this._dirtyElements.pop().getElement();
    if (!element.isRemoved())
      element.render(this._canvasContext);
  }

  this._cleanUp();
};

C64Style.UiLayer.prototype._cleanUp = function() {
  this._events.clear();
  Object.keys(this._removedElements).forEach(function(elementId) {
    var removedElement = this._removedElements[elementId];
    removedElement.setParentLayer(null);
    removedElement.setRemoved(false);
    var idx = C64Style.linSearchByPropertyKey(this._elements, "id", parseInt(elementId));
    this._elements.splice(idx,1);
  }.bind(this));
  this._removedElements = {};
  this._dirtyElements.clear();
};

C64Style.UiLayer.prototype.handleMouseEvent = function(e,x,y) {
  var element = null, topElement = null;
  for (var i = 0; i < this._elements.length; i++) {
    if ( C64Style.isFunction(this._elements[i].handleMouseEvent) ) {
      element = this._elements[i].handleMouseEvent(e,x,y);
      // find element with highest z-index
      if (element !== null && (topElement === null || element.getZIndex() > topElement.getZIndex())) {
        topElement = element;
      }
    }
  }
  return topElement;
};

// C64Style.UiLayer.prototype.setParentScreen = function(screen) {this._parentScreen = screen;};
