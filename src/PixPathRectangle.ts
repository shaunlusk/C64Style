import { Color } from "./Color";
import { IPixPath } from "./IPixPath";

export class PixPathRectangle implements IPixPath {
  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;
  private _color: Color;

  constructor(x: number, y: number, width: number, height: number, color?: Color) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
    this._color = color;
  }

  public get x() { return this._x; }
  public get y() { return this._y; }
  public get width() { return this._width; }
  public get height() { return this._height; }

  public get color() { return this._color; }
  
}