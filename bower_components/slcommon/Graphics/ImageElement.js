var SL = SL || {};

/** Graphics element that uses part or all of an Image.<br />
* <b>Extends</b> {@link SL.GfxElement}<br />
* It is good practice to have a single or few Images that have many tiles on them
* to make efficient use of memory and screen drawing. Using ImageElement, you
* can treat tiles from the source image as discrete screen elements that can be
* moved and interacted with.
* For animations, see {@link SL.ImageSprite}
* @constructor
* @param {SL.Screen} screenContext The parent screenContext
* @param {SL.GfxLayer} parentLayer The parent layer that will draw this element.
* @param {Object} props The properties for this object.
* from SL.GfxElement:
*   <ul>
*     <li>scaleX - integer - Horizontal scale of this element.  Independent of screen scale.</li>
*     <li>scaleY - integer - Vertical scale of this element.  Independent of screen scale.</li>
*     <li>hidden - boolean - Whether to hide this element.</li>
*     <li>x - number - The X coordinate for this element.</li>
*     <li>y - number - The Y coordinate for this element.</li>
*     <li>zIndex - number - The z-index; elements with higher zIndex values will be drawn later than those with lower values (drawn on top of those with lower values).</li>
*   </ul>
* for SL.ImageElement:
* <ul>
* <li>image - Image - The image to use for this element. Can be created via html (&lt;img&gt;) or javascript (new Image()).</li>
* <li>sourceX - number - The x starting point of the desired subsection of the image
* <li>sourceY - number - The y starting point of the desired subsection of the image
* <li>sourceWidth - number - The width of the desired subsection of the image
* <li>sourceHeight - number - The height of the desired subsection of the image
* <li>width - number - The desired width of the ImageElement; if this differs from the source dimensions, the image will be stretched or shrunk accordingly</li>
* <li>height - number - The desired height of the ImageElement; if this differs from the source dimensions, the image will be stretched or shrunk accordingly</li>
* <li>imageRenderer - {@link SL.ImageRenderer} - Optional.  The ImageRenderer that will draw on the canvas.
*   If not provided, this element will create one.
*   If using multiple ImageElement's or ImageSprite's it is good practice to create a single ImageRenderer and pass the reference to each element via this property.</li>
* </ul>
* @see SL.GfxElement
* @see SL.ImageSprite
*/
SL.ImageElement = function(screenContext, parentLayer, props) {
  props = props || {};
  SL.GfxElement.call(this, screenContext, parentLayer, props);
  this._image = props.image;
  this._sx = props.sourceX;
  this._sy = props.sourceY;
  this._sWidth = props.sourceWidth;
  this._sHeight = props.sourceHeight;

  this._width = props.width;
  this._height = props.height;

  this._imageRenderer = props.imageRenderer || new SL.ImageRenderer(screenContext.getScaleX(), screenContext.getScaleY());
};

SL.ImageElement.prototype = new SL.GfxElement();
SL.ImageElement.prototype.constructor = SL.ImageElement;

/** Return the source Image for this element
* @returns {Image}
*/
SL.ImageElement.prototype.getImage = function() {return this._image;};

/** Return the width for this element
* @override
* @returns {number}
*/
SL.ImageElement.prototype.getWidth = function() {return this._width;};

/** Return the height for this element
* @override
* @returns {number}
*/
SL.ImageElement.prototype.getHeight = function() {return this._height;};

/** Return the starting x point on the source Image for this element
* @returns {number}
*/
SL.ImageElement.prototype.getSourceX = function() {return this._sx;};

/** Return the starting y point on the source Image for this element
* @returns {number}
*/
SL.ImageElement.prototype.getSourceY = function() {return this._sy;};

/** Return the width of the subsection of the source Image for this element
* @returns {number}
*/
SL.ImageElement.prototype.getSourceWidth = function() {return this._sWidth;};

/** Return the height of the subsection of the source Image for this element
* @returns {number}
*/
SL.ImageElement.prototype.getSourceHeight = function() {return this._sHeight;};

/** Render the image to the screen.
* Time and diff parameters are not directly used, they are made available for extension purposes.
* @param {number} time The current time (milliseconds)
* @param {number} diff The difference between the last time and the current time  (milliseconds)
*/
SL.ImageElement.prototype.render = function(time,diff) {
  if (!this.isHidden() && this.isDirty()) {
    this._imageRenderer.renderImage(
      this.getCanvasContext(),
      this.getImage(),
      this.getSourceX(),
      this.getSourceY(),
      this.getSourceWidth(),
      this.getSourceHeight(),
      this.getX(),
      this.getY(),
      this.getWidth(),
      this.getHeight(),
      this.getElementScaleX(),
      this.getElementScaleY(),
      this.getRotation()
    );
  }
};
