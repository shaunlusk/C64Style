import { Color, IColor } from "./Color";

export class Palette {
  private _colors: IColor[];

  constructor(colors: IColor[]) {
    this._colors = colors;
  }

  public colorFromIndex(index: number): IColor {
    return this._colors[index];
  }

  public setColorAtIndex(index: number, color: IColor) {
    this._colors[index] = color;
  }

  public size(): number {
    return this._colors.length;
  }
  
  /**
  * Get a default palette, for use with {@link C64Style.PixElement} and {@link C64Style.PixSprite}
  * @function
  */
  public static getDefaultPalette(): Palette {
    return new Palette([
      Color.BLACK,
      Color.WHITE,
      Color.RED,
      Color.CYAN,
      Color.PURPLE,
      Color.GREEN,
      Color.BLUE,
      Color.YELLOW,
      Color.ORANGE,
      Color.BROWN,
      Color.PINK,
      Color.DARKGREY,
      Color.GREY,
      Color.LIGHTGREEN,
      Color.LIGHTBLUE,
      Color.LIGHTGREY
    ]);
  }
}