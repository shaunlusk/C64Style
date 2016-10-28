var C64Style = C64Style || {};

C64Style.ImageElement = function(screenContext, parentLayer, props) {
  props = props || {};
  C64Style.GfxElement.call(this, screenContext, parentLayer, props);
  this._image = props.image;
  this._sx = props.sourceX;
  this._sy = props.sourceY;
  this._sWidth = props.sourceWidth;
  this._sHeight = props.sourceHeight;

  this._width = props.width;
  this._height = props.height;

  this._imageRenderer = props.imageRenderer || new C64Style.ImageRenderer(screenContext.getScaleX(), screenContext.getScaleY());
};

C64Style.ImageElement.prototype = new C64Style.GfxElement();
C64Style.ImageElement.prototype.constructor = C64Style.ImageElement;

C64Style.ImageElement.prototype.getImage = function() {return this._image;};
C64Style.ImageElement.prototype.getWidth = function() {return this._width;};
C64Style.ImageElement.prototype.getHeight = function() {return this._height;};
C64Style.ImageElement.prototype.getSourceX = function() {return this._sx;};
C64Style.ImageElement.prototype.getSourceY = function() {return this._sy;};
C64Style.ImageElement.prototype.getSourceWidth = function() {return this._sWidth;};
C64Style.ImageElement.prototype.getSourceHeight = function() {return this._sHeight;};

C64Style.ImageElement.prototype.render = function(time,diff) {
  if (this.isHidden() || !this.isDirty()) return;

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
    this.getElementScaleY()
  );

  C64Style.GfxElement.prototype.render.call(this, time, diff);
};
