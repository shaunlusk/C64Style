import { Color, IColor } from "./Color";
import { Palette } from "./Palette";

export class PaletteColor implements IColor {
  private _index: number;
  private _paletteProvider: () => Palette;

  constructor(index: number, paletteProvider: () => Palette) {
    this._index = index;
    this._paletteProvider = paletteProvider;
  }

  public get value() { return this._paletteProvider().colorFromIndex(this._index).value; }
}