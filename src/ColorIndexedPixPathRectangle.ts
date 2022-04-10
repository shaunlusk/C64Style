import { IPixPath } from "./IPixPath";

export class PixPathRectangle implements IPixPath {
  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;
  private _colorIndex?: number;

  constructor(x: number, y: number, width: number, height: number, colorIndex?: number) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
    this._colorIndex = colorIndex;
  }

  public get x() { return this._x; }
  public get y() { return this._y; }
  public get width() { return this._width; }
  public get height() { return this._height; }

  public get colorIndex() { return this._colorIndex; }
  
}