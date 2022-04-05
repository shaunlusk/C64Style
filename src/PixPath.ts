import { Color } from "./Color";
import { IPixPath } from "./IPixPath";

export class PixPath implements IPixPath {
  private _x: number;
  private _y: number;
  private _color?: Color;

  constructor(x: number, y: number, color?: Color) {
    this._x = x;
    this._y = y;
    this._color = color;
  }

  public get x() { return this._x; }
  public get y() { return this._y; }
  public get width() { return 1; }
  public get height() { return 1; }

  public get color(): Color | undefined { return this._color; }
  
}