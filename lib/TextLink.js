var C64Style = C64Style || {};

C64Style.TextLink = function(screenContext, parentLayer, props) {
  props = props || {};
  C64Style.TextElement.call(this, screenContext, parentLayer, props);
  this._mouseOverColor = props.mouseOverColor || this._color;
  this._mouseOverBackgroundColor = props.mouseOverBackgroundColor || this._backgroundColor;
  this._onClick = props.onClick;
  this._href = props.href;
  this._mouseIsOver = false;
  this._baseColor = this._color;
  this._baseBackgroundColor = this._backgroundColor;
  this.on("MOUSE_UP_ON_ELEMENT", this._click.bind(this));
};

C64Style.TextLink.prototype = new C64Style.TextElement(null, null, {characterRenderer:{}});
C64Style.TextLink.prototype.constructor = C64Style.TextLink;

C64Style.TextLink.prototype.handleMouseEvent = function(event) {
  if (this.collidesWithCoordinates(event.data.x, event.data.y)) {
    if (!this._mouseIsOver) {
      this._setActive(true);
      this.notify(new C64Style.Event(
        C64Style.EventType.MOUSE_OVER_ELEMENT,
        {
          x : event.data.x,
          y : event.data.y,
          row : event.data.row,
          col : event.data.col,
          element : this
        },
        event.data.time
      ));
    }

    var type = null;
    switch(event.type) {
      case C64Style.EventType.MOUSE_MOVE:
        type = C64Style.EventType.MOUSE_MOVE_OVER_ELEMENT;
        break;
      case C64Style.EventType.MOUSE_DOWN:
        type = C64Style.EventType.MOUSE_DOWN_ON_ELEMENT;
        break;
      case C64Style.EventType.MOUSE_UP:
        type = C64Style.EventType.MOUSE_UP_ON_ELEMENT;
        break;
    }
    var thisevent = new C64Style.Event(
      type,
      {
        x : event.data.x,
        y : event.data.y,
        row : event.data.row,
        col : event.data.col,
        element : this
      },
      event.data.time
    );
    this.notify(thisevent);
  } else {
    if (this._mouseIsOver) {
      this._setActive(false);
    }
  }
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
    var result = this._onClick();
    if (result !== undefined && !result) return;
  }
  if (this._href) document.location = this._href;
};
