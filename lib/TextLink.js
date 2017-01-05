var C64Style = C64Style || {};

C64Style.TextLink = function(screenContext, parentLayer, props) {
  props = props || {};
  C64Style.TextElement.call(this, screenContext, parentLayer, props);
  this._mouseOverColor = props.mouseOverColor || this._color;
  this._mouseOverBackgroundColor = props.mouseOverBackgroundColor || this._backgroundColor;
  this._onClick = props.onClick;
  this._href = props.href;
  this._newWindow = props.newWindow;
  this._baseColor = this._color;
  this._baseBackgroundColor = this._backgroundColor;
  this.on("MOUSE_UP_ON_ELEMENT", this._click.bind(this));
  this.on("MOUSE_ENTER_ELEMENT", this._enter.bind(this));
  this.on("MOUSE_EXIT_ELEMENT", this._exit.bind(this));
};

C64Style.TextLink.prototype = new C64Style.TextElement(null, null, {characterRenderer:{}});
C64Style.TextLink.prototype.constructor = C64Style.TextLink;

C64Style.TextLink.prototype._enter = function() {
  this._setActive(true);
};
C64Style.TextLink.prototype._exit = function() {
  this._setActive(false);
};

C64Style.TextLink.prototype._setActive = function(bool) {
  this._mouseIsOver = bool;
  if (bool) {
    this.setColor(this._mouseOverColor);
    this.setBackgroundColor(this._mouseOverBackgroundColor);
  } else {
    this.setColor(this._baseColor);
    this.setBackgroundColor(this._baseBackgroundColor);
  }
  this.setDirty(true);
};

C64Style.TextLink.prototype._click = function(event) {
  if (C64Style.isFunction(this._onClick)) {
    var result = this._onClick(event);
    if (result !== undefined && !result) return;
  }
  if (this._href) {
    if (this._newWindow) {
      window.open(this._href, "_blank");
    } else {
      document.location = this._href;
    }
  }
};
