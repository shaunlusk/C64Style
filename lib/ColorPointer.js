var C64Style = C64Style || {};

C64Style.ColorPointer = function(defaultColor) {
  this.currentColor = defaultColor || C64Style.Color.BLACK;
};

C64Style.ColorPointer.prototype.getColor = function() {
  return this.currentColor;
};

C64Style.ColorPointer.prototype.setColor = function(color) {
  this.currentColor = color;
};
