var C64Style = C64Style || {};


/**
* Default Colors.
* These values are taken from the ccs64 emulator palette.
* @static
* @enum {Color}
*/
C64Style.Color = {
  "BLACK":"#000000",
  "WHITE":"#FFFFFF",
  "RED":"#E04040",
  "CYAN":"#60FFFF",
  "PURPLE":"#E060E0",
  "GREEN":"#40E040",
  "BLUE":"#4040E0",
  "YELLOW":"#FFFF40",
  "ORANGE":"#E0A040",
  "BROWN":"#9C7448",
  "PINK":"#FFA0A0",
  "DARKGREY":"#545454",
  "GREY":"#888888",
  "LIGHTGREEN":"#A0FFA0",
  "LIGHTBLUE":"#A0A0FF",
  "LIGHTGREY":"#C0C0C0",

  /**
  * Retrieves a color by its index.
  * @param {integer} idx index
  */
  getByIndex : function(idx) {
    switch(idx) {
      case 0:
        return this.BLACK;
      case 1:
        return this.WHITE;
      case 2:
        return this.RED;
      case 3:
        return this.CYAN;
      case 4:
        return this.PURPLE;
      case 5:
        return this.GREEN;
      case 6:
        return this.BLUE;
      case 7:
        return this.YELLOW;
      case 8:
        return this.ORANGE;
      case 9:
        return this.BROWN;
      case 10:
        return this.PINK;
      case 11:
        return this.DARKGREY;
      case 12:
        return this.GREY;
      case 13:
        return this.LIGHTGREEN;
      case 14:
        return this.LIGHTBLUE;
      case 15:
        return this.LIGHTGREY;
    }
  },

  /**
  * Get a default palette, for use with {@link C64Style.PixElement} and {@link C64Style.PixSprite}
  * @function
  */
  getDefaultPalette : function() {
    return [
      this.BLACK,
      this.WHITE,
      this.RED,
      this.CYAN,
      this.PURPLE,
      this.GREEN,
      this.BLUE,
      this.YELLOW,
      this.ORANGE,
      this.BROWN,
      this.PINK,
      this.DARKGREY,
      this.GREY,
      this.LIGHTGREEN,
      this.LIGHTBLUE,
      this.LIGHTGREY
    ];
  }
};

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
