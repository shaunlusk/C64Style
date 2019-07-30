import {Color} from './Color';

/**
* For use with PixMap entries in {@link PixElement} and {@link PixSprite}
* @constructor
* @param {Color} defaultColor The starting color for the ColorPointer
*/
function ColorPointer(defaultColor) {
  this.currentColor = defaultColor || Color.BLACK;
};

/**
* Return the current color.
*/
ColorPointer.prototype.getColor = function() {
  return this.currentColor;
};

/**
* Set the current color.
* @param {Color} color The color to set on the pointer.
*/
ColorPointer.prototype.setColor = function(color) {
  this.currentColor = color;
};

export default ColorPointer;
