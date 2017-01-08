var C64Style = C64Style || {};

/** Animated element that displays images frames in succession.<br />
* <b>Extends</b> {@link C64Style.Sprite}, extends {@link C64Style.GfxElement}<br />
* Uses {@link C64Style.ImageSpriteFrame} for its frames.
* @constructor
* @param {C64Style.Screen} screenContext The parent screen
* @param {C64Style.GfxLayer} parentLayer The parent layer.
* @param {Object} props The properties for this ImageSprite.
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
*   for ImageSprite:
*   <ul>
*     <li>image - Image - the image to pull animation frames from.</li>
*     <li>width - number - the width of the Sprite</li>
*     <li>height - number - the height of the Sprite</li>
*     <li>imageRenderer - {@link C64Style.ImageRenderer} - Optional.  The ImageRenderer that will draw on the canvas.
*       If not provided, this element will create one.
*       If using multiple ImageElement's or ImageSprite's it is good practice to create a single ImageRenderer and pass the reference to each element via this property.</li>
*   </ul>
* @see C64Style.GfxElement
* @see C64Style.Sprite
* @see C64Style.AnimationFrame
* @see C64Style.ImageSpriteFrame
*/
C64Style.ImageSprite = function(screenContext, parentLayer, props) {
  props = props || {};
  C64Style.Sprite.call(this, screenContext, parentLayer, props);

  this._image = props.image;
  this._width = props.width;
  this._height = props.height;

  this._imageRenderer = props.imageRenderer || new C64Style.ImageRenderer(screenContext.getScaleX(), screenContext.getScaleY());
};

C64Style.ImageSprite.prototype = new C64Style.Sprite();
C64Style.ImageSprite.prototype.constructor = C64Style.ImageSprite;

/** Return the source image.
* @returns {Image}
*/
C64Style.ImageSprite.prototype.getImage = function() {return this._image;};

/** Returns the Sprite width.
* @returns {number}
*/
C64Style.ImageSprite.prototype.getWidth = function() {return this._width;};

/** Returns the Sprite height.
* @returns {number}
*/
C64Style.ImageSprite.prototype.getHeight = function() {return this._height;};

/** Render the specified frame.
* @override
* @param {number} time The current time (milliseconds).
* @param {number} diff The difference between the previous render cycle and the current cycle (milliseconds).
* @param {C64Style.AnimationFrame} frame The C64Style.ImageSpriteFrame to be rendered.
*/
C64Style.ImageSprite.prototype.renderFrame = function(time, diff, frame) {

  this._imageRenderer.renderImage(
    this.getCanvasContext(),
    this.getImage(),
    frame.getSourceX(),
    frame.getSourceY(),
    frame.getSourceWidth(),
    frame.getSourceHeight(),
    this.getX(),
    this.getY(),
    this.getWidth(),
    this.getHeight(),
    this.getElementScaleX(),
    this.getElementScaleY()
  );
};

/** ImageSprite implementation of AnimationFrame.
* @extends {C46Style.AnimationFrame}
* @constructor
* @params {Object} props Properties supported:
* <ul>
*   <li>duration - number - How long (milliseconds) to display this frame.
*   <li>sourceX - number - The starting x of the sub-section of the image for this frame.
*   <li>sourceY - number - The starting x of the sub-section of the image for this frame.
*   <li>sourceWidth - number - The width of the sub-section of the image for this frame.
*   <li>sourceHeight - number - The height of the sub-section of the image for this frame.
* </ul>
*/
C64Style.ImageSpriteFrame = function(props) {
  props = props || {};
  C64Style.AnimationFrame.call(this);
  this._duration = props.duration;
  this._sx = props.sourceX;
  this._sy = props.sourceY;
  this._sWidth = props.sourceWidth;
  this._sHeight = props.sourceHeight;
};
C64Style.ImageSpriteFrame.prototype = new C64Style.AnimationFrame();
C64Style.ImageSpriteFrame.prototype.callback = C64Style.ImageSpriteFrame;

/** Return the duration of this frame.
* @override
* @returns {number}
*/
C64Style.ImageSpriteFrame.prototype.getDuration = function() {return this._duration;};

/** Return the starting x point on the source Image for this frame
* @returns {number}
*/
C64Style.ImageSpriteFrame.prototype.getSourceX = function() {return this._sx;};

/** Return the starting y point on the source Image for this frame
* @returns {number}
*/
C64Style.ImageSpriteFrame.prototype.getSourceY = function() {return this._sy;};

/** Return the width of the subsection of the source Image for this frame
* @returns {number}
*/
C64Style.ImageSpriteFrame.prototype.getSourceWidth = function() {return this._sWidth;};

/** Return the height of the subsection of the source Image for this frame
* @returns {number}
*/
C64Style.ImageSpriteFrame.prototype.getSourceHeight = function() {return this._sHeight;};
