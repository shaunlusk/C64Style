var C64Style = C64Style || {};

/**
* For use with PixMap entries in {@link C64Style.PixElements} and {@link C64Style.PixSprites}
* @constructor
* @param {Color} defaultColor The starting color for the ColorPointer
*/
C64Style.ColorPointer = function(defaultColor) {
  this.currentColor = defaultColor || C64Style.Color.BLACK;
};

/**
* Return the current color.
*/
C64Style.ColorPointer.prototype.getColor = function() {
  return this.currentColor;
};

/**
* Set the current color.
* @param {Color} color The color to set on the pointer.
*/
C64Style.ColorPointer.prototype.setColor = function(color) {
  this.currentColor = color;
};
