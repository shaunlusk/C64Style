var C64Style = C64Style || {};

/** Element that draws pixels to a canvas from a PixArray<br />
* <b>Extends</b>: {@link C64Style.GfxElement}
* @constructor
* @param {C64Style.Screen} screenContext The target screen.
* @param {C64Style.GfxLayer} parentLayer The parent layer that will draw this element.
* @param {Object} props Properties for this GfxElement.  Supports:<br>
* From {@link C64Style.GfxElement}
*   <ul>
*     <li>scaleX - integer - Horizontal scale of this element.  Independent of screen scale.</li>
*     <li>scaleY - integer - Vertical scale of this element.  Independent of screen scale.</li>
*     <li>hidden - boolean - Whether to hide this element.</li>
*     <li>x - number - The X coordinate for this element.</li>
*     <li>y - number - The Y coordinate for this element.</li>
*     <li>zIndex - number - The z-index; elements with higher zIndex values will be drawn later than those with lower values (drawn on top of those with lower values).</li>
*   </ul>
* For PixElement:
*  <ul>
*   <li>pixPathArray - Array - An array of PixPaths that will be drawn.  Format: <br />
*     {type:"TYPE", x:x, y:y, [width:width, height:height,] color:ColorObject}</br>
*     where:
*     <ul>
*       <li>type can be either "PIXEL" or "RECTANGLE" (see {@link C64Style.PixPathTypes})</li>
*       <li>x, y are coordinates relative to the element's origin</li>
*       <li>width, height are only used by RECTANGLE types to determine the size of the rectangle drawn</li>
*       <li>color can be any of: a valid CSS color (hex format "#1234AB", or "rbg(100, 200, 255)"),
*           a C64Style.ColorPointer,
*           or an integer value corresponding to an index on this element's color palette.</li>
*     </ul>
*     As an example, the PixPath: [{type:"PIXEL", x:2, y:5, color:"#00FF00"}]<br />
*     will paint the pixel at 2,5 (relative to element location) a greenish color.<br/>
*     Another Example:<br />
*         [{type:"RECTANGLE", x:1, y:1, width:2, height:2, color:3},<br />
*         {type:"PIXEL", x:2, y:3, color:6}]<br />
*     This will draw a rectangle from 1,1 to 2,2 using the the 3rd color from the element's palette, and  a pixel at 2,3 using the 6th color from the element's palette.</li>
*          <li>defaultPalette - Array - An array of colors.  When a Pix Array entry references a color index, the corresponding color in this array will be used for the entry.</li>
*          <li>pixRenderer - {@link C64Style.PixRenderer} - Optional.  The PixRenderer that will draw on the canvas.
*            If not provided, this element will create one.
*            If using multiple PixElements's or PixSprite's it is good practice to create a single PixRenderer and pass the reference to each element via this property.</li>
*  </ul>
*/
C64Style.PixElement = function(screenContext, parentLayer, props) {
  props = props || {};
  C64Style.GfxElement.call(this, screenContext, parentLayer, props);
  this._width = 0;
  this._height = 0;
  this._pixPathArray = props.pixPathArray || [];
  this._palette = props.defaultPalette || [];
  this._pixRenderer = props.pixRenderer || new C64Style.PixRenderer(screenContext.getScaleX(), screenContext.getScaleY());

  this._setDimensions();
};

C64Style.PixElement.prototype = new C64Style.GfxElement();
C64Style.PixElement.prototype.constructor = C64Style.PixElement;

/** Return the width for this element
* @override
* @returns {number}
*/
C64Style.PixElement.prototype.getWidth = function() {return this._width;};

/** Return the height for this element
* @override
* @returns {number}
*/
C64Style.PixElement.prototype.getHeight = function() {return this._height;};

/** Return the palette color for a given palette index.
* @param {integer} idx
* @returns {string} Color string
*/
C64Style.PixElement.prototype.getPaletteColor = function(idx) {return this._palette[idx];};

/** Set the palette color for a given palette index.
* @param {integer} idx
* @param {string} Color string
*/
C64Style.PixElement.prototype.setPaletteColor = function(idx, color) {
  this._palette[idx] = color;
  this.setDirty(true);
};

/** Return palette array.
* @returns {array} Array of color strings
*/
C64Style.PixElement.prototype.getPalette = function() {return this._palette;};

/** Sets the palette array.
* @param {array} palette Array of colors.
*/
C64Style.PixElement.prototype.setPalette = function(palette) {
  this._palette = palette;
  this.setDirty(true);
};

/** @private */
C64Style.PixElement.prototype._setDimensions = function() {
  var width = 0, height = 0;
  for (var i = 0; i < this._pixPathArray.length; i++) {
    var pixPath = this._pixPathArray[i];
    var tx = pixPath.x;
    var ty = pixPath.y;
    switch(pixPath.type) {
      case C64Style.PixPathTypes.PIXEL:
      width = tx + 1;
      height = ty + 1;
      break;
      case C64Style.PixPathTypes.RECTANGLE:
      width = tx + pixPath.width;
      height = ty + pixPath.height;
      break;
    }
    if (width > this._width) this._width = width;
    if (height > this._height) this._height = height;
  }
};

/** Render all PixPaths for this element.
* @param {number} time The current time (milliseconds)
* @param {number} diff The difference between the last time and the current time  (milliseconds)
*/
C64Style.PixElement.prototype.render = function(time,diff) {
  if (!this.isHidden() && this.isDirty()) {
    for (var i = 0; i < this._pixPathArray.length; i++) {
      this._renderPixPath(this._pixPathArray[i]);
    }
  }
  C64Style.GfxElement.prototype.render.call(this, time, diff);
};

/** @private */
C64Style.PixElement.prototype._renderPixPath = function(pixPath) {
  this._pixRenderer.renderPixPath(this.getCanvasContext(), this.getX(), this.getY(), pixPath, this._palette, this.getElementScaleX(), this.getElementScaleY());
};
