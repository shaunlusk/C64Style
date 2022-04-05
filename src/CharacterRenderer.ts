import { CELLWIDTH, CELLHEIGHT } from './Constants';
import { CharacterMap } from './CharacterMap';
import { CanvasContextWrapper } from '@shaunlusk/slgfx';
import { IColor } from './Color';
import { IPixPath } from './IPixPath';

export interface ICharacterRenderer {
  clearRect(context: CanvasContextWrapper, x: number, y: number, length: number, pixelWidth: number, pixelHeight: number): void;
  renderSymbol(context: CanvasContextWrapper, char: string, x: number, y: number, color: IColor, backgroundColor: IColor, pixelWidth: number, pixelHeight: number): void;
  renderString(context: CanvasContextWrapper, text: string, x: number, y: number, color: IColor, backgroundColor: IColor, pixelWidth: number, pixelHeight: number): void;
}

/**
* Draws Characters on a layer.
* @constructor
*/
export class CharacterRenderer implements ICharacterRenderer {
  _cx: number;
  _cy: number;
  _color: any;
  _backgroundColor: any;

  constructor() {
    this._cx = 0;
    this._cy = 0;
    this._color = null;
    this._backgroundColor = null;
  }

  /**
  * Clears a length of the screen in preparation for writing characters.
  *
  * @param {CanvasContext} context The canvas context to work on.
  * @param {integer} x The x location to start clearing.
  * @param {integer} y The y location to start clearing.
  * @param {integer} length The length of characters to clear.
  * @param {integer} pixelWidth The width of pixels to draw.
  * @param {integer} pixelHeight The height of pixels to draw.
  */
  public clearRect(context: CanvasContextWrapper, x: number, y: number, length: number, pixelWidth: number, pixelHeight: number)  {
    pixelWidth = pixelWidth || 1;
    pixelHeight = pixelHeight || 1;
    this.setCursorLocation(x, y);
    context.clearRect(
      this._cx,
      this._cy,
      length * pixelWidth * CELLWIDTH,
      pixelHeight * CELLHEIGHT);
  }

  /**
  * Draws a symbol on the canvas.
  * @param {CanvasContext} context The canvas context to work on.
  * @param {string} char The name of the character to draw.  Refer to {@link CharacterMap}
  * @param {integer} x The x location to draw the symbol to.
  * @param {integer} y The y location to draw the symbol to.
  * @param {Color} color The color to draw the symbol.
  * @param {Color} backgroundColor Optional. The background color for the symbol.
  * @param {integer} pixelWidth The width of pixels to draw.
  * @param {integer} pixelHeight The height of pixels to draw.
  */
  public renderSymbol(context: CanvasContextWrapper, char: string, x: number, y: number, color: IColor, backgroundColor: IColor, pixelWidth: number, pixelHeight:number) {
    pixelWidth = pixelWidth || 1;
    pixelHeight = pixelHeight || 1;
    this.setCursorLocation(x, y);
    this.setColor(color);
    this.setBackgroundColor(backgroundColor);

    this._renderCharacter(context, char, pixelWidth, pixelHeight);
  }

  /**
  * Draws a string on the canvas.
  * @param {CanvasContext} context The canvas context to work on.
  * @param {string} text The text to draw to the canvas.
  * @param {integer} x The x location to draw the symbol to.
  * @param {integer} y The y location to draw the symbol to.
  * @param {Color} color The color to draw the string.
  * @param {Color} backgroundColor Optional. The background color for the string.
  * @param {integer} pixelWidth The width of pixels to draw.
  * @param {integer} pixelHeight The height of pixels to draw.
  */
  public renderString(context: CanvasContextWrapper, text: string, x: number, y: number, color: IColor, backgroundColor: IColor, pixelWidth: number, pixelHeight: number) {
    pixelWidth = pixelWidth || 1;
    pixelHeight = pixelHeight || 1;
    this.setCursorLocation(x, y);
    this.setColor(color);
    this.setBackgroundColor(backgroundColor);

    for (var i = 0; i < text.length; i++) {
      var char = text.charAt(i);
      this._renderCharacter(context, char, pixelWidth, pixelHeight);
      this.advanceCursor(pixelWidth);
    }
  }

  /**
  * @private
  */
  private _renderCharacter(context: CanvasContextWrapper, char: string, pixelWidth: number, pixelHeight: number) {
    if (this._backgroundColor) {
      context.setFillStyle(this._backgroundColor);
      context.fillRect(this._cx, this._cy, CELLWIDTH * pixelWidth, CELLHEIGHT * pixelHeight);
    }

    if (char === " ") return;
    var pixPathArray = CharacterMap[char];

    if (!pixPathArray) {
      console.log("No pix path found for character:" + char);
      return;
    }
    for (var i = 0; i < pixPathArray.length; i++) {
      this._renderPixPath(context, pixPathArray[i], pixelWidth, pixelHeight);
    }
  }

  /**
  * @private
  */
  private _renderPixPath(context: CanvasContextWrapper, pixPath: IPixPath, pixelWidth: number, pixelHeight: number) {
    context.setFillStyle(pixPath.color ? pixPath.color.value : pixPath.color || this._color);
    var tx = (pixPath.x * pixelWidth) + this._cx;
    var ty = (pixPath.y * pixelHeight) + this._cy;
    // switch (pixPath.type) {
    //   case PixPathTypes.PIXEL :
    //     context.fillRect(tx, ty, pixelWidth, pixelHeight);
    //     break;
    //   case PixPathTypes.RECTANGLE :
    //     context.fillRect(
    //       tx,
    //       ty,
    //       pixPath.width * pixelWidth,
    //       pixPath.height * pixelWidth
    //     );
    //     break;
    //   default:
    //     throw new Error("Unknown Pix Path Type");
    // }
    context.fillRect(tx, ty, pixPath.width * pixelWidth, pixPath.height * pixelHeight);
  }

  /**
  * @private
  */
  private setCursorLocation(x: number, y: number) {
    this._cx = x;
    this._cy = y;
  }

  /**
  * @private
  */
  private advanceCursor(pixelWidth: number) {
    this._cx = this._cx + CELLWIDTH * pixelWidth;
  }

  /**
  * @private
  */
  private setColor(color: IColor) {
    this._color = color;
  }

  /**
  * @private
  */
  private setBackgroundColor(backgroundColor: IColor) {
    this._backgroundColor = backgroundColor;
  }

}
