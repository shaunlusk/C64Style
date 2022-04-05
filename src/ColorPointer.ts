import { Color, IColor } from './Color';

/**
* For use with PixMap entries in {@link PixElement} and {@link PixSprite}
* @constructor
* @param {Color} defaultColor The starting color for the ColorPointer
*/
export class ColorPointer implements IColor {
  private _currentColor: Color;

  constructor(defaultColor?: Color) {
    this._currentColor = defaultColor || Color.BLACK;
  }

  public get value() { return this._currentColor.value; }
  public set value(color: string) { this._currentColor = new Color(color); }

}
