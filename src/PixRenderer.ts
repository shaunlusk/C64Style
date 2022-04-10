import { CanvasContextWrapper, ICanvasContextWrapper, Utils } from "@shaunlusk/slgfx";
import { IPixPath } from "./IPixPath";
import { Palette } from "./Palette";

export interface IPixRenderer {
  renderPixPathArray(context: CanvasContextWrapper, x: number, y: number, width: number, height: number, pixPathArray: IPixPath[], palette: Palette, pixelWidth: number, pixelHeight: number, flipHorizontally: boolean, flipVertically: boolean, rotation: number): void;
}

/** Draws Pix Arrays to a canvas.
* @constructor
*/
export class PixRenderer implements IPixRenderer {

  /** Render an array of pix paths to a canvas.
  * @param {CanvasContext} context The canvas context.
  * @param {number} x The x location to draw
  * @param {number} y The y location to draw
  * @param {number} width The width of the pixElement
  * @param {number} height The height of the pixElement
  * @param {array} pixPathArray The array of pix paths to draw
  * @param {array} palette The palette to use.
  * @param {integer} pixelWidth The width of the pixel to draw.  Typically Element scale * screen scale.
  * @param {integer} pixelHeight The height of the pixel to draw. Typically Element scale * screen scale.
  * @param {boolean} isHorizontallyFlipped Whether the element is flipped horizontally.
  * @param {boolean} isVerticallyFlipped Whether the element is flipped vertically.
  * @param {number} rotation The element's rotation in radians.
  */
  public renderPixPathArray(
    context: ICanvasContextWrapper, 
    x: number, y: number, 
    width: number, height: number, 
    pixPathArray: IPixPath[], 
    palette: Palette, 
    pixelWidth: number, pixelHeight: number, 
    flipHorizontally: boolean, flipVertically: boolean, 
    rotation: number
  ) {
    const fillFn = context.fillRect.bind(context);

    if (flipHorizontally || flipVertically || rotation) {
      this._renderAllPixPathsTranslated(context, x, y,  width, height, pixPathArray, palette, pixelWidth, pixelHeight, flipHorizontally, flipVertically, rotation);
    } else {
      this._renderAllPixPaths(context, x, y, pixPathArray, palette, pixelWidth, pixelHeight, fillFn);
    }
  }

  /** @private */
  private _renderAllPixPathsTranslated(
    context: ICanvasContextWrapper, 
    x: number, y: number, 
    width: number, height: number, 
    pixPathArray: IPixPath[], 
    palette: Palette, 
    pixelWidth: number, pixelHeight: number, 
    flipHorizontally: boolean, flipVertically: boolean, 
    rotation: number
  ) {
    const scaledWidth = width * pixelWidth;
    const scaledHeight = height * pixelHeight;

    // where to reposition the canvas context
    const translationX = x + scaledWidth/2;
    const translationY = x + scaledHeight/2;

    // target coordinates to draw the element to on the rotated canvas
    const rotatedTx = 0 - scaledWidth/2;
    const rotatedTy = 0 - scaledHeight/2;

    const fillFn = context.fillRectWithTranslation.bind(context);

    Utils.renderWithTranslation(context, translationX, translationY, flipHorizontally, flipVertically, rotation, function() {
      this._renderAllPixPaths(context, rotatedTx, rotatedTy, pixPathArray, palette, pixelWidth, pixelHeight, fillFn);
    }.bind(this));
  }

  /** @private */
  private _renderAllPixPaths(
    context: ICanvasContextWrapper, 
    x: number, 
    y: number, 
    pixPathArray: IPixPath[], 
    palette: Palette, 
    pixelWidth: number, pixelHeight: number, 
    fillFn: (x: number, y: number, width: number, height: number) => void
  ) {
    for (let i = 0; i < pixPathArray.length; i++) {
      this._renderPixPath(context, x, y, pixPathArray[i], palette, pixelWidth, pixelHeight, fillFn);
    }
  }

  /** @private */
  private _renderPixPath(
    context: ICanvasContextWrapper, 
    x: number, 
    y: number, 
    pixPath: IPixPath, 
    palette: Palette, 
    pixelWidth: number, pixelHeight: number, 
    fillFn: (x: number, y: number, width: number, height: number) => void
  ) {
    // set context fill color
    this.setFillColor(context, pixPath, palette);

    // calculate tx, ty, tw, th
    const tx = (pixPath.x * pixelWidth) + x;
    const ty = (pixPath.y * pixelHeight) + y;
    const tw = (pixPath.width || 1) * pixelWidth;
    const th = (pixPath.height || 1) * pixelHeight;

    // draw it
    fillFn(tx, ty, tw, th);
  }

  /** @private */
  private setFillColor(context: ICanvasContextWrapper, pixPath: IPixPath, palette: Palette) {
      if  (pixPath.colorIndex !== undefined && pixPath.colorIndex !== null) {
        if (palette.size() === 0 || pixPath.colorIndex >= palette.size()) throw new Error("Color not specified in palette. (" + pixPath.color + ")");
        context.setFillStyle(palette.colorFromIndex(pixPath.colorIndex).value);
      } else {
        context.setFillStyle(pixPath.color.value);
      }
  }

}
