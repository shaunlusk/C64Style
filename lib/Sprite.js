var C64Style = C64Style || {};

C64Style.Sprite = function(props) {
  props = props || {};
  C64Style.GfxElement.call(this, screenContext, parentLayer, props);
};

C64Style.Sprite.prototype = new C64Style.GfxElement();
C64Style.Sprite.prototype.constructor = C64Style.Sprite;

C64Style.AnimationFrame = function(props) {
  props = props || {};
  this._offsetX = props.offsetX || 0;
  this._offsetY = props.offsetY || 0;
  this._duration = props.duration;
};
