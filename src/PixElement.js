import GfxElement from './GfxElementExtensions';
import {Color} from './Color';
import {PixPathTypes} from './PixPathTypes';
import PixRenderer from './PixRenderer';

/** Element that draws pixels to a canvas from a PixArray<br />
* <b>Extends</b> [GfxElement]{@link https://shaunlusk.github.io/slgfx/docs/GfxElement.html}
* @constructor
* @param {Object} props Properties
* @param {Screen} props.screenContext The target screen.
* @param {CanvasContextWrapper} props.canvasContextWrapper The canvasContextWrapper. This layer will draw to the canvas' context, via wrapper's exposed methods.
* @param {int} [props.scaleX=1] Horizontal scale of this element.  Independent of screen scale.
* @param {int} [props.scaleY=1] Vertical scale of this element.  Independent of screen scale.
* @param {boolean} [props.hidden=false] Whether to hide this element.
* @param {number} [props.x=0] The X coordinate for this element.
* @param {number} [props.y=0] The Y coordinate for this element.
* @param {number} [props.rotation=0] The amount of rotation to apply to the element, in radians.  Applied on top of base rotation.
* @param {number} [props.baseRotation=0] The amount of base rotation to apply to the element, in radians. Usually used to apply an initial, unchanging rotation to the element.  Useful for correcting orientation of images.
* @param {boolean} [props.horizontalFlip=false] Whether to flip the element horizontally.
* @param {boolean} [props.verticalFlip=false] Whether to flip the element vertically.
* @param {number} [props.zIndex=-1] The z-index; elements with higher zIndex values will be drawn later than those with lower values (drawn on top of those with lower values).
* @param {Array.<Color>} [props.defaultPalette=Color.getDefaultPalette()] An array of colors.  When a Pix Array entry references a color index, the corresponding color in this array will be used for the entry.
* @param {PixRenderer} [props.pixRenderer=new PixRenderer] The PixRenderer that will draw on the canvas.
*   If not provided, this element will create one.
*   PixRenderer is lightweight, but if using a large number of PixElements's or PixSprite's, it may be desirable to create a single PixRenderer and pass the reference to each element via this property.
* @param {Array} [props.pixPathArray=[]] An array of PixPaths that will be drawn.
*   Format: <br /> {type:"TYPE", x:x, y:y, [width:width, height:height,] color:ColorObject}</br>
*     where:
*     <ul>
*       <li>type can be either "PIXEL" or "RECTANGLE" (see {@link PixPathTypes})</li>
*       <li>x, y are coordinates relative to the element's origin</li>
*       <li>width, height are only used by RECTANGLE types to determine the size of the rectangle drawn</li>
*       <li>color can be any of: a valid CSS color (hex format "#1234AB", or "rbg(100, 200, 255)"),
*           a ColorPointer,
*           or an integer value corresponding to an index on this element's color palette.</li>
*     </ul>
*     As an example, the PixPath: [{type:"PIXEL", x:2, y:5, color:"#00FF00"}]<br />
*     will paint the pixel at 2,5 (relative to element location) a greenish color.<br/>
*     Another Example:<br />
*         [{type:"RECTANGLE", x:1, y:1, width:2, height:2, color:3},<br />
*         {type:"PIXEL", x:2, y:3, color:6}]<br />
*     This will draw a rectangle from 1,1 to 2,2 using the the 3rd color from the element's palette, and  a pixel at 2,3 using the 6th color from the element's palette.
*/
function PixElement(props) {
  props = props || {};
  GfxElement.call(this, props);
  this._width = 0;
  this._height = 0;
  this._pixPathArray = props.pixPathArray || [];
  this._palette = props.defaultPalette || Color.getDefaultPalette();
  this._pixRenderer = props.pixRenderer || new PixRenderer();

  this._setDimensions();
};

PixElement.prototype = new GfxElement();
PixElement.prototype.constructor = PixElement;

/** Return the width for this element
* @override
* @returns {number}
*/
PixElement.prototype.getWidth = function() {return this._width;};

/** Return the height for this element
* @override
* @returns {number}
*/
PixElement.prototype.getHeight = function() {return this._height;};

/** Return the palette color for a given palette index.
* @param {integer} idx
* @returns {string} Color string
*/
PixElement.prototype.getPaletteColor = function(idx) {return this._palette[idx];};

/** Set the palette color for a given palette index.
* @param {integer} idx
* @param {string} Color string
*/
PixElement.prototype.setPaletteColor = function(idx, color) {
  this._palette[idx] = color;
  this.setDirty(true);
};

/** Return palette array.
* @returns {array} Array of color strings
*/
PixElement.prototype.getPalette = function() {return this._palette;};

/** Sets the palette array.
* @param {array} palette Array of colors.
*/
PixElement.prototype.setPalette = function(palette) {
  this._palette = palette;
  this.setDirty(true);
};

/** @private */
PixElement.prototype._setDimensions = function() {
  var width = 0, height = 0;
  for (var i = 0; i < this._pixPathArray.length; i++) {
    var pixPath = this._pixPathArray[i];
    var tx = pixPath.x;
    var ty = pixPath.y;
    switch(pixPath.type) {
      case PixPathTypes.PIXEL:
      width = tx + 1;
      height = ty + 1;
      break;
      case PixPathTypes.RECTANGLE:
      width = tx + pixPath.width;
      height = ty + pixPath.height;
      break;
    }
    if (width > this._width) this._width = width;
    if (height > this._height) this._height = height;
  }
};


/* Render all PixPaths for this element. Automatically called as needed during screen render cycle.
* @param {number} time The current time (milliseconds)
* @param {number} diff The difference between the last time and the current time  (milliseconds)
*/
/** @private */
PixElement.prototype.render = function(canvasContext, time,diff) {
  this._pixRenderer.renderPixPathArray(
    canvasContext,
    this.getScaledX(),
    this.getScaledY(),
    this.getScaledWidth(),
    this.getScaledHeight(),
    this._pixPathArray,
    this._palette,
    this.getTotalScaleX(),
    this.getTotalScaleY(),
    this.isHorizontallyFlipped(),
    this.isVerticallyFlipped(),
    this.getRotation()
  );
};

export default PixElement;
