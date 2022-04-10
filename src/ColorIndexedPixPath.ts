import { IPixPath } from "./IPixPath";

export class ColorIndexedPixPath implements IPixPath {
  private _x: number;
  private _y: number;
  private _colorIndex?: number;

  constructor(x: number, y: number, colorIndex?: number) {
    this._x = x;
    this._y = y;
    this._colorIndex = colorIndex;
  }

  public get x() { return this._x; }
  public get y() { return this._y; }
  public get width() { return 1; }
  public get height() { return 1; }

  public get colorIndex(): number | undefined { return this._colorIndex; }
  
}