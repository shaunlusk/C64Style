var C64Style = C64Style || {};

/** Graphics layer.<br />
* Extends {@link C64Style.Layer}<br />
* Generally, the use of C64Style.Screen.createLayer("GfxLayer") is preferred over creating layer by hand.
* @constructor
* @param {C64Style.Screen} screenContext The parent screen for this layer.
* @param {CanvasContext} canvas The CanvasContext that this layer will draw to.
* @param {Object} props The properties to create this layer with. <br />
* From C64Style.Layer:
* <ul>
*   <li>width - number - The width of the layer.  Should match Screen.</li>
*   <li>height - number - The height of the layer.  Should match Screen.</li>
* </ul>
* GfxLayer doesn't require/support any properties beyond those used by C64Style.Layer.
*/
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

/** Add a C64Style.GfxElement to this layer.
* @param {C64Style.GfxElement} element
*/
C64Style.GfxLayer.prototype.addElement = function(element) {
  this._elements.push(element);

  // give a natural ordering to elements added with no specific zIndex
  // prevent render order swapping and element "switching" places
  if (element.getZIndex() === -1) {
    element.setZIndex(this._zIndexCounter++);
  }
};

/** Remove an element from the layer.
* @param {integer} id The id of the element to remove
*/
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

/** Remove an element from the layer.
* @param {C64Style.GfxElement} element The element to remove
*/
C64Style.GfxLayer.prototype.removeElement = function(element) {
  return this.removeElementById(element.getId());
};

/** Update the layer.
* Calls update on each element.
* Checks for elements colliding with the layer boundary and emits events accordingly (event emitted from the elements themselves): 
* <ul>
* <li>C64Style.EventType.ELEMENT_HIT_LEFT_EDGE</li>
* <li>C64Style.EventType.ELEMENT_HIT_RIGHT_EDGE</li>
* <li>C64Style.EventType.ELEMENT_HIT_TOP_EDGE</li>
* <li>C64Style.EventType.ELEMENT_HIT_BOTTOM_EDGE</li>
* </ul>
* The data for these events consists of:
* <ul>
* <li>element : The element that hit the border</li>
* <li>layer : This layer</li>
* </ul>
* @param {number} time The current time (milliseconds)
* @param {number} diff The difference between the last time and the current time  (milliseconds)
*/
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

/** @private */
C64Style.GfxLayer.prototype._checkBorderCollision = function(element,time) {
  if (element.getCollisionBoxX() <= 0) {
    element.notify(new C64Style.Event(C64Style.EventType.ELEMENT_HIT_LEFT_EDGE, {layer:this, element:element}, time));
  }
  if (element.getCollisionBoxX() + element.getCollisionBoxWidth() > this.getCanvas().width) {
    element.notify(new C64Style.Event(C64Style.EventType.ELEMENT_HIT_RIGHT_EDGE, {layer:this, element:element}, time));
  }
  if (element.getCollisionBoxY() <= 0) {
    element.notify(new C64Style.Event(C64Style.EventType.ELEMENT_HIT_TOP_EDGE, {layer:this, element:element}, time));
  }
  if (element.getCollisionBoxY() + element.getCollisionBoxHeight() > this.getCanvas().height) {
    element.notify(new C64Style.Event(C64Style.EventType.ELEMENT_HIT_BOTTOM_EDGE, {layer:this, element:element}, time));
  }
};

/** @private */
C64Style.GfxLayer.prototype._handleCollisions = function() {
  var element1, element2, j;
  for (i = 0; i < this._elements.length - 1; i++) {
    element1 = this._elements[i];
    for (j = i+1; j < this._elements.length; j++) {
      element2 = this._elements[j];

      this._collisionCheckElementsIfNeeded(element1, element2);
    }
  }
};

/** @private */
C64Style.GfxLayer.prototype._collisionCheckElementsIfNeeded = function(element1, element2) {
  if (element1.collidesWith(element2)) {
    this._updateElementOnCollision(element1);
    this._updateElementOnCollision(element2);
  }
};

/** @private */
C64Style.GfxLayer.prototype._updateElementOnCollision = function(element) {
  element.setHasCollision(true);
  element.setDirty(true);
  this._dirtyElements.push(element.getZIndexComparable());
};

/** Render the dirty elements on this layer.
* Calls clear for all dirty elements first, then calls render on each.
* Time and diff parameters are not directly used, they are made available for extension purposes, and passed on to clear and render for the same.
* @param {number} time The current time (milliseconds)
* @param {number} diff The difference between the last time and the current time  (milliseconds)
*/
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

/** @private */
C64Style.GfxLayer.prototype._cleanUp = function() {
  Object.keys(this._removedElements).forEach(function(elementId) {
    elementId = parseInt(elementId);
    var idx = C64Style.linSearch(this._elements, elementId, function(element,value){return element.getId() === value;});
    this._elements.splice(idx,1);
  }.bind(this));
  this._removedElements = {};
  this._dirtyElements.clear();
};

/** Propagate a mouse event to each of this layers elements.
* @param {C64Style.Event} event
*/
C64Style.GfxLayer.prototype.handleMouseEvent = function(event) {
  for (var i = 0; i < this._elements.length; i++) {
    this._elements[i].handleMouseEvent(event);
  }
};
