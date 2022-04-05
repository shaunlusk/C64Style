import { IColor } from "./Color";

export interface IPixPath {
  x: number;
  y: number; 
  width: number;
  height: number;
  color?: IColor;
  colorIndex?: number;
}
