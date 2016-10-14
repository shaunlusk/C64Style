var C64Style = C64Style || {};

C64Style.PixImage = function(engineContext, parentLayer, props) {
  props = props || {};
  C64Style.GfxElement.call(this, engineContext, parentLayer, props);
  this._width = 0;
  this._height = 0;
  this._pixPathArray = props.pixPathArray || [];
  this._setDimensions();
};

C64Style.PixImage.prototype = new C64Style.GfxElement();
C64Style.PixImage.prototype.constructor = C64Style.PixImage;

C64Style.PixImage.prototype.getWidth = function() {return this._width;};
C64Style.PixImage.prototype.getHeight = function() {return this._height;};

C64Style.PixImage.prototype._setDimensions = function() {
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

C64Style.PixImage.prototype.render = function(time,diff) {
  if (this.isHidden() || !this.isDirty()) return;
  // if (debug) {
  //   console.log("rendering: " + this.getId() +": " + this.getX() + ":" + this.getWidth() + ", " + this.getY() + ":" + this.getHeight());
  //   console.log("rendering: " + this.getId() + ": collision? " + this.hasCollision() + "; hadCollision? "+ this._hadCollisionPreviousFrame);
  // }
  for (var i = 0; i < this._pixPathArray.length; i++) {
    this._renderPixPath(this._pixPathArray[i]);
  }

  C64Style.GfxElement.prototype.render.call(this, time, diff);
};

C64Style.PixImage.prototype._renderPixPath = function(pixPath) {
  var context = this.getCanvasContext();
  context.fillStyle = pixPath.color;
  var tx = (pixPath.x * this.getScaleX()) + this.getX() * this.getScaleX();
  var ty = (pixPath.y * this.getScaleY()) + this.getY() * this.getScaleY();
  switch (pixPath.type) {
    case C64Style.PixPathTypes.PIXEL :
      context.fillRect(tx, ty, this.getScaleX(), this.getScaleY());
      break;
    case C64Style.PixPathTypes.RECTANGLE :
      context.fillRect(tx, ty, pixPath.width * this.getScaleX(), pixPath.height * this.getScaleY());
      break;
    default:
      throw new Error("Unknown Pix Path Type");
  }
};
