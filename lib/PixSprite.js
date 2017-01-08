var C64Style = C64Style || {};

/** For showing Pix Animations.  Much like PixElement, but uses multiple frames for animations.<br />
* <b>Extends</b> {@link C64Style.Sprite} <br />
* Uses {@link C64Style.PixSpriteFrame} for its frames.
* @constructor
* @param {C64Style.Screen} screenContext The parent screen
* @param {C64Style.GfxLayer} parentLayer The parent layer.
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
*     <li>frames - Array - Optional. An array of C64Style.AnimationFrame's. Default: empty array
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
*     <li>pixRenderer - {@link C64Style.PixRenderer} - Optional.  The PixRenderer that will draw on the canvas.
*       If not provided, this element will create one.
*       If using multiple PixElements's or PixSprite's it is good practice to create a single PixRenderer and pass the reference to each element via this property.</li>
*   </ul>
* @see C64Style.GfxElement
* @see C64Style.AnimationFrame
* @see C64Style.PixSprite
* @see C64Style.ImageSprite
*/
C64Style.PixSprite = function(screenContext, parentLayer, props) {
  props = props || {};
  C64Style.Sprite.call(this, screenContext, parentLayer, props);
  this._palette = props.defaultPalette || [];

  this._width = 0;
  this._height = 0;

  this._pixRenderer = props.pixRenderer || new C64Style.PixRenderer(screenContext.getScaleX(), screenContext.getScaleY());

  this._setDimensions();
};

C64Style.PixSprite.prototype = new C64Style.Sprite();
C64Style.PixSprite.prototype.constructor = C64Style.PixSprite;

/** Return the width of the PixSprite
* @returns {integer}
*/
C64Style.PixSprite.prototype.getWidth = function() {return this._width;};

/** Return the height of the PixSprite
* @returns {integer}
*/
C64Style.PixSprite.prototype.getHeight = function() {return this._height;};

/** Return the palette color for the specified index
* @returns {integer}
*/
C64Style.PixSprite.prototype.getPaletteColor = function(idx) {return this._palette[idx];};

/** Set the palette color at the specified index
* @param {integer} idx The index on the color palette
* @param {string} color The value of the color to set.  Any valid CSS Color value may be used, in addition to values from C64Style.Color
*/
C64Style.PixSprite.prototype.setPaletteColor = function(idx, color) {
  this._palette[idx] = color;
  this.setDirty(true);
};

/** Return the palette
* @returns {Array} Array of color values.
*/
C64Style.PixSprite.prototype.getPalette = function() {return this._palette;};

/** Set the palette
* @param {Array} palette The palette to set.
*/
C64Style.PixSprite.prototype.setPalette = function(palette) {
  this._palette = palette;
  this.setDirty(true);
};

/** @private */
C64Style.PixSprite.prototype._setDimensions = function() {
  var width = 0, height = 0;
  for (var fidx = 0; fidx < this._frames.length; fidx++) {
    var pixPathArray = this._frames[fidx].getPixArray();
    for (var i = 0; i < pixPathArray.length; i++) {
      var pixPath = pixPathArray[i];
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
  }
};

/** Render the specified PixSpriteFrame.  <br />
* @abstract
* @param {number} time The current time (milliseconds).
* @param {number} diff The difference between the previous render cycle and the current cycle (milliseconds).
* @param {C64Style.PixSpriteFrame} frame The frame to be rendered.
*/
C64Style.PixSprite.prototype.renderFrame = function(time, diff, frame) {
  var pixPathArray = frame.getPixArray();
  for (var i = 0; i < pixPathArray.length; i++) {
    this._renderPixPath(pixPathArray[i]);
  }
};

/** @private */
C64Style.PixSprite.prototype._renderPixPath = function(pixPath) {
  this._pixRenderer.renderPixPath(this.getCanvasContext(), this.getX(), this.getY(), pixPath, this._palette, this.getElementScaleX(), this.getElementScaleY());
};

/**
* PixSprite Implementation of AnimationFrame.
* @extends {C46Style.AnimationFrame}
* @constructor
* @param {Object} props Properties supported:
* <ul>
*   <li>duration - number - How long (milliseconds) to display this frame.
*   <li>pixArray - Array - The Array of Pix entries for this frame. Format: <br />
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
*   </li>
* </ul>
* @see {C64Style.PixElement}
*/
C64Style.PixSpriteFrame = function(props) {
  props = props || {};
  C64Style.AnimationFrame.call(this);
  this._pixArray = props.pixArray;
  this._duration = props.duration;
};
C64Style.PixSpriteFrame.prototype = new C64Style.AnimationFrame();
C64Style.PixSpriteFrame.prototype.callback = C64Style.PixSpriteFrame;

/** Return the duration to display this frame.
* @returns {number}
*/
C64Style.PixSpriteFrame.prototype.getDuration = function() {return this._duration;};

/** Return the PixArray for this frame.
* @returns {number}
*/
C64Style.PixSpriteFrame.prototype.getPixArray = function() {return this._pixArray;};
