import {Color} from './Color';
import PixRenderer from './PixRenderer';
import {PixPathTypes} from './PixPathTypes';
import Sprite from 'slgfx/src/Sprite';

/** For showing Pix Animations.  Much like PixElement, but uses multiple frames for animations.<br />
* <b>Extends</b> {@link Sprite} <br />
* Uses {@link PixSpriteFrame} for its frames.
* @constructor
* @param {C64Screen} screenContext The parent screen
* @param {GfxLayer} parentLayer The parent layer.
* @param {Object} props The properties for this ImageSprite.<br />
*   from GfxElement:
*   <ul>
*     <li>scaleX - integer - Horizontal scale of this element.  Independent of screen scale.</li>
*     <li>scaleY - integer - Vertical scale of this element.  Independent of screen scale.</li>
*     <li>hidden - boolean - Whether to hide this element.</li>
*     <li>x - number - The X coordinate for this element.</li>
*     <li>y - number - The Y coordinate for this element.</li>
*     <li>zIndex - number - The z-index; elements with higher zIndex values will be drawn later than those with lower values (drawn on top of those with lower values).</li>
*   </ul>
*   from Sprite:
*   <ul>
*     <li>frames - Array - Optional. An array of PixSpriteFrame's. Default: empty array
*     <li>ttl - number - Optional. Time-to-live.  The time (milliseconds) to continue the Sprites animation.  Default: -1 (unlimited time)
*     <li>loop - boolean - Optional.  Whether to loop the animation or not. Default: true.
*     <li>loopsToLive - integer - Optional. If loop is true, the number of loops to execute.  Default: -1 (unlimited loops)
*     <li>freezeFrameIdx - integer - Optional.
*        When animation completes, switch to the frame indicated by the freeze frame index
*        (referring to the index of the frame in the frames array). Default: -1 (don't change frames when animation stops, stay with the final frame)
*   </ul>
*   for PixSprite:
*   <ul>
*     <li>defaultPalette - Array - An array of colors.  When a Pix Array entry references a color index, the corresponding color in this array will be used for the entry.</li>
*     <li>pixRenderer - {@link PixRenderer} - Optional.  The PixRenderer that will draw on the canvas.
*       If not provided, this element will create one.
*       If using multiple PixElements's or PixSprite's it is good practice to create a single PixRenderer and pass the reference to each element via this property.</li>
*   </ul>
* @see GfxElement
* @see AnimationFrame
* @see PixSprite
* @see ImageSprite
*/
function PixSprite(props) {
  props = props || {};
  Sprite.call(this, props);
  this._palette = props.defaultPalette || Color.getDefaultPalette();

  this._width = 0;
  this._height = 0;

  this._pixRenderer = props.pixRenderer;

  this._setDimensions();
};

PixSprite.prototype = new Sprite();
PixSprite.prototype.constructor = PixSprite;

/** Return the width of the PixSprite
* @returns {integer}
*/
PixSprite.prototype.getWidth = function() {return this._width;};

/** Return the height of the PixSprite
* @returns {integer}
*/
PixSprite.prototype.getHeight = function() {return this._height;};

/** Return the palette color for the specified index
* @returns {integer}
*/
PixSprite.prototype.getPaletteColor = function(idx) {return this._palette[idx];};

/** Set the palette color at the specified index
* @param {integer} idx The index on the color palette
* @param {string} color The value of the color to set.  Any valid CSS Color value may be used, in addition to values from Color
*/
PixSprite.prototype.setPaletteColor = function(idx, color) {
  this._palette[idx] = color;
  this.setDirty(true);
};

/** Return the palette
* @returns {Array} Array of color values.
*/
PixSprite.prototype.getPalette = function() {return this._palette;};

/** Set the palette
* @param {Array} palette The palette to set.
*/
PixSprite.prototype.setPalette = function(palette) {
  this._palette = palette;
  this.setDirty(true);
};

/** @private */
PixSprite.prototype._setDimensions = function() {
  var width = 0, height = 0;
  for (var fidx = 0; fidx < this._frames.length; fidx++) {
    var pixPathArray = this._frames[fidx].getPixArray();
    for (var i = 0; i < pixPathArray.length; i++) {
      var pixPath = pixPathArray[i];
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
  }
};

/** Render the specified PixSpriteFrame.  <br />
* @abstract
* @param {number} time The current time (milliseconds).
* @param {number} diff The difference between the previous render cycle and the current cycle (milliseconds).
* @param {PixSpriteFrame} frame The frame to be rendered.
*/
PixSprite.prototype.renderFrame = function(time, diff, frame) {
  var pixPathArray = frame.getPixArray();

  this._pixRenderer.renderPixPathArray(
    this.getCanvasContextWrapper(),
    this.getScaledX(),
    this.getScaledY(),
    this.getScaledWidth(),
    this.getScaledHeight(),
    pixPathArray,
    this._palette,
    this.getTotalScaleX(),
    this.getTotalScaleY(),
    this.isHorizontallyFlipped(),
    this.isVerticallyFlipped(),
    this.getRotation()
  );
};

export default PixSprite;
