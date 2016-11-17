var C64Style = C64Style || {};

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

C64Style.ImageSprite.prototype.getImage = function() {return this._image;};
C64Style.ImageSprite.prototype.getWidth = function() {return this._width;};
C64Style.ImageSprite.prototype.getHeight = function() {return this._height;};

/** @override
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

/** @override */
C64Style.ImageSpriteFrame.prototype.getDuration = function() {return this._duration;};

C64Style.ImageSpriteFrame.prototype.getSourceX = function() {return this._sx;};
C64Style.ImageSpriteFrame.prototype.getSourceY = function() {return this._sy;};
C64Style.ImageSpriteFrame.prototype.getSourceWidth = function() {return this._sWidth;};
C64Style.ImageSpriteFrame.prototype.getSourceHeight = function() {return this._sHeight;};
