import { Palette } from "./Palette";

export interface IColor {
  value: string;
}

/**
* Default Colors.
* These values are taken from the ccs64 emulator palette.
* @static
* @enum {Color}
*/
export class Color implements IColor {
  private _value: string;

  public constructor(color: string) {
    this._value = color;
  }

  public get value() { return this._value; }

  public static BLACK = new Color("#000000");
  public static WHITE = new Color("#FFFFFF");
  public static RED = new Color("#E04040");
  public static CYAN = new Color("#60FFFF");
  public static PURPLE = new Color("#E060E0");
  public static GREEN = new Color("#40E040");
  public static BLUE = new Color("#4040E0");
  public static YELLOW = new Color("#FFFF40");
  public static ORANGE = new Color("#E0A040");
  public static BROWN = new Color("#9C7448");
  public static PINK = new Color("#FFA0A0");
  public static DARKGREY = new Color("#545454");
  public static GREY = new Color("#888888");
  public static LIGHTGREEN = new Color("#A0FFA0");
  public static LIGHTBLUE = new Color("#A0A0FF");
  public static LIGHTGREY = new Color("#C0C0C0");

  /**
  * Retrieves a color by its index.
  * @param {integer} idx index
  */
  public static getByIndex(idx: number): Color {
    switch(idx) {
      case 0:
        return Color.BLACK;
      case 1:
        return Color.WHITE;
      case 2:
        return Color.RED;
      case 3:
        return Color.CYAN;
      case 4:
        return Color.PURPLE;
      case 5:
        return Color.GREEN;
      case 6:
        return Color.BLUE;
      case 7:
        return Color.YELLOW;
      case 8:
        return Color.ORANGE;
      case 9:
        return Color.BROWN;
      case 10:
        return Color.PINK;
      case 11:
        return Color.DARKGREY;
      case 12:
        return Color.GREY;
      case 13:
        return Color.LIGHTGREEN;
      case 14:
        return Color.LIGHTBLUE;
      case 15:
        return Color.LIGHTGREY;
    }
  }
}

// Colors are non-gamma-corrected values from:
// http://unusedino.de/ec64/technical/misc/vic656x/colors/
// C64Style.Color = {
//   "BLACK":"#000000",
//   "WHITE":"#FFFFFF",
//   "RED":"#744335",
//   "CYAN":"#7CACBA",
//   "PURPLE":"#7B4890",
//   "GREEN":"#64974F",
//   "BLUE":"#403285",
//   "YELLOW":"#BFCD7A",
//   "ORANGE":"#7B5B2F",
//   "BROWN":"#4F4500",
//   "PINK":"#A37265",
//   "DARKGREY":"#505050",
//   "GREY":"#787878",
//   "LIGHTGREEN":"#A4D78E",
//   "LIGHTBLUE":"#786ABD",
//   "LIGHTGREY":"#9F9F9F"
// };

// These are the gamma corrected values.  They didn't look quite right to me.
// C64Style.Color = {
//   "BLACK":"#000000",
//   "WHITE":"#FFFFFF",
//   "RED":"#68372B",
//   "CYAN":"#70A4B2",
//   "PURPLE":"#6F3D86",
//   "GREEN":"#588D43",
//   "BLUE":"#352879",
//   "YELLOW":"#B8C76F",
//   "ORANGE":"#6F4F25",
//   "BROWN":"#433900",
//   "PINK":"#9A6759",
//   "DARKGREY":"#444444",
//   "GREY":"#6C6C6C",
//   "LIGHTGREEN":"#9AD284",
//   "LIGHTBLUE":"#6C5EB5",
//   "LIGHTGREY":"#959595"
// };
