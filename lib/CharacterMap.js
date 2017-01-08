var C64Style = C64Style || {};

/**
*  PixMaps for characters from the original C64 character set.
*  These are drawn via the {@link C64Style.CharacterRenderer CharacterRenderer} class.
*  These are used by TextLayer and TextElement.
*  The names of some of the symbols were made up by me somewhat arbitrarily (e.g."DIAGONAL_FILL_TOP_RIGHT");
*  Note that inverse characters are not included here despite being part of the original C64 character set;
*  rather, CharacterRender can render a background and foreground color when rendering text.
*  Maps generated from:
*  https://www.c64-wiki.com/index.php/Character_set
@static
@enum {PixMap}
*/
C64Style.CharacterMap = {

  //----------
  //|  ####  |
  //| ##  ## |
  //| ## ### |
  //| ## ### |
  //| ##     |
  //| ##   # |
  //|  ####  |
  //|        |
  //----------
  "@": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|   ##   |
  //|  ####  |
  //| ##  ## |
  //| ###### |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //|        |
  //----------
  "A": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //| #####  |
  //| ##  ## |
  //| ##  ## |
  //| #####  |
  //| ##  ## |
  //| ##  ## |
  //| #####  |
  //|        |
  //----------
  "B": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|  ####  |
  //| ##  ## |
  //| ##     |
  //| ##     |
  //| ##     |
  //| ##  ## |
  //|  ####  |
  //|        |
  //----------
  "C": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //| ####   |
  //| ## ##  |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //| ## ##  |
  //| ####   |
  //|        |
  //----------
  "D": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},],
  //----------
  //| ###### |
  //| ##     |
  //| ##     |
  //| ####   |
  //| ##     |
  //| ##     |
  //| ###### |
  //|        |
  //----------
  "E": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //| ###### |
  //| ##     |
  //| ##     |
  //| ####   |
  //| ##     |
  //| ##     |
  //| ##     |
  //|        |
  //----------
  "F": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},],
  //----------
  //|  ####  |
  //| ##  ## |
  //| ##     |
  //| ## ### |
  //| ##  ## |
  //| ##  ## |
  //|  ####  |
  //|        |
  //----------
  "G": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //| ###### |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //|        |
  //----------
  "H": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|  ####  |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|  ####  |
  //|        |
  //----------
  "I": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|   #### |
  //|    ##  |
  //|    ##  |
  //|    ##  |
  //|    ##  |
  //| ## ##  |
  //|  ###   |
  //|        |
  //----------
  "J": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},],
  //----------
  //| ##  ## |
  //| ## ##  |
  //| ####   |
  //| ###    |
  //| ####   |
  //| ## ##  |
  //| ##  ## |
  //|        |
  //----------
  "K": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //| ##     |
  //| ##     |
  //| ##     |
  //| ##     |
  //| ##     |
  //| ##     |
  //| ###### |
  //|        |
  //----------
  "L": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //| ##   ##|
  //| ### ###|
  //| #######|
  //| ## # ##|
  //| ##   ##|
  //| ##   ##|
  //| ##   ##|
  //|        |
  //----------
  "M": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},],
  //----------
  //| ##  ## |
  //| ### ## |
  //| ###### |
  //| ###### |
  //| ## ### |
  //| ##  ## |
  //| ##  ## |
  //|        |
  //----------
  "N": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|  ####  |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //|  ####  |
  //|        |
  //----------
  "O": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //| #####  |
  //| ##  ## |
  //| ##  ## |
  //| #####  |
  //| ##     |
  //| ##     |
  //| ##     |
  //|        |
  //----------
  "P": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},],
  //----------
  //|  ####  |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //|  ####  |
  //|    ### |
  //|        |
  //----------
  "Q": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //| #####  |
  //| ##  ## |
  //| ##  ## |
  //| #####  |
  //| ####   |
  //| ## ##  |
  //| ##  ## |
  //|        |
  //----------
  "R": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|  ####  |
  //| ##  ## |
  //| ##     |
  //|  ####  |
  //|     ## |
  //| ##  ## |
  //|  ####  |
  //|        |
  //----------
  "S": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //| ###### |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|        |
  //----------
  "T": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},],
  //----------
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //|  ####  |
  //|        |
  //----------
  "U": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //|  ####  |
  //|   ##   |
  //|        |
  //----------
  "V": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},],
  //----------
  //| ##   ##|
  //| ##   ##|
  //| ##   ##|
  //| ## # ##|
  //| #######|
  //| ### ###|
  //| ##   ##|
  //|        |
  //----------
  "W": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},],
  //----------
  //| ##  ## |
  //| ##  ## |
  //|  ####  |
  //|   ##   |
  //|  ####  |
  //| ##  ## |
  //| ##  ## |
  //|        |
  //----------
  "X": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //|  ####  |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|        |
  //----------
  "Y": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},],
  //----------
  //| ###### |
  //|     ## |
  //|    ##  |
  //|   ##   |
  //|  ##    |
  //| ##     |
  //| ###### |
  //|        |
  //----------
  "Z": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|  ####  |
  //|  ##    |
  //|  ##    |
  //|  ##    |
  //|  ##    |
  //|  ##    |
  //|  ####  |
  //|        |
  //----------
  "[": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|    ##  |
  //|   #  # |
  //|  ##    |
  //| #####  |
  //|  ##    |
  //| ##   # |
  //|######  |
  //|        |
  //----------
  "BRITISH_POUND": [	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|  ####  |
  //|    ##  |
  //|    ##  |
  //|    ##  |
  //|    ##  |
  //|    ##  |
  //|  ####  |
  //|        |
  //----------
  "]": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|        |
  //|   ##   |
  //|  ####  |
  //| ###### |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //----------
  "ARROW_UP": [	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},],
  //----------
  //|        |
  //|   #    |
  //|  ##    |
  //| #######|
  //| #######|
  //|  ##    |
  //|   #    |
  //|        |
  //----------
  "ARROW_LEFT": [	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":3, "y":6},],

  //----------
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|        |
  //|        |
  //|   ##   |
  //|        |
  //----------
  "!": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},],
  //----------
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //----------
  "\"": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},],
  //----------
  //| ##  ## |
  //| ##  ## |
  //|########|
  //| ##  ## |
  //|########|
  //| ##  ## |
  //| ##  ## |
  //|        |
  //----------
  "#": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|   ##   |
  //|  ##### |
  //| ##     |
  //|  ####  |
  //|     ## |
  //| #####  |
  //|   ##   |
  //|        |
  //----------
  "$": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},],
  //----------
  //| ##   # |
  //| ##  ## |
  //|    ##  |
  //|   ##   |
  //|  ##    |
  //| ##  ## |
  //| #   ## |
  //|        |
  //----------
  "%": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|  ####  |
  //| ##  ## |
  //|  ####  |
  //|  ###   |
  //| ##  ###|
  //| ##  ## |
  //|  ######|
  //|        |
  //----------
  "&": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},],
  //----------
  //|     ## |
  //|    ##  |
  //|   ##   |
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //----------
  "'": [	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},],
  //----------
  //|    ##  |
  //|   ##   |
  //|  ##    |
  //|  ##    |
  //|  ##    |
  //|   ##   |
  //|    ##  |
  //|        |
  //----------
  "(": [	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|  ##    |
  //|   ##   |
  //|    ##  |
  //|    ##  |
  //|    ##  |
  //|   ##   |
  //|  ##    |
  //|        |
  //----------
  ")": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},],
  //----------
  //|        |
  //| ##  ## |
  //|  ####  |
  //|########|
  //|  ####  |
  //| ##  ## |
  //|        |
  //|        |
  //----------
  "*": [	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},],
  //----------
  //|        |
  //|   ##   |
  //|   ##   |
  //| ###### |
  //|   ##   |
  //|   ##   |
  //|        |
  //|        |
  //----------
  "+": [	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},],
  //----------
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|   ##   |
  //|   ##   |
  //|  ##    |
  //----------
  ",": [	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},],
  //----------
  //|        |
  //|        |
  //|        |
  //| ###### |
  //|        |
  //|        |
  //|        |
  //|        |
  //----------
  "-": [	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},],
  //----------
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|   ##   |
  //|   ##   |
  //|        |
  //----------
  ".": [	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},],
  //----------
  //|        |
  //|      ##|
  //|     ## |
  //|    ##  |
  //|   ##   |
  //|  ##    |
  //| ##     |
  //|        |
  //----------
  "/": [	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},],
  //----------
  //|  ####  |
  //| ##  ## |
  //| ## ### |
  //| ### ## |
  //| ##  ## |
  //| ##  ## |
  //|  ####  |
  //|        |
  //----------
  "0": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|   ##   |
  //|   ##   |
  //|  ###   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //| ###### |
  //|        |
  //----------
  "1": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|  ####  |
  //| ##  ## |
  //|     ## |
  //|    ##  |
  //|  ##    |
  //| ##     |
  //| ###### |
  //|        |
  //----------
  "2": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|  ####  |
  //| ##  ## |
  //|     ## |
  //|   ###  |
  //|     ## |
  //| ##  ## |
  //|  ####  |
  //|        |
  //----------
  "3": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|     ## |
  //|    ### |
  //|   #### |
  //| ##  ## |
  //| #######|
  //|     ## |
  //|     ## |
  //|        |
  //----------
  "4": [	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //| ###### |
  //| ##     |
  //| #####  |
  //|     ## |
  //|     ## |
  //| ##  ## |
  //|  ####  |
  //|        |
  //----------
  "5": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|  ####  |
  //| ##  ## |
  //| ##     |
  //| #####  |
  //| ##  ## |
  //| ##  ## |
  //|  ####  |
  //|        |
  //----------
  "6": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //| ###### |
  //| ##  ## |
  //|    ##  |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|        |
  //----------
  "7": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},],
  //----------
  //|  ####  |
  //| ##  ## |
  //| ##  ## |
  //|  ####  |
  //| ##  ## |
  //| ##  ## |
  //|  ####  |
  //|        |
  //----------
  "8": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|  ####  |
  //| ##  ## |
  //| ##  ## |
  //|  ##### |
  //|     ## |
  //| ##  ## |
  //|  ####  |
  //|        |
  //----------
  "9": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|        |
  //|        |
  //|   ##   |
  //|        |
  //|        |
  //|   ##   |
  //|        |
  //|        |
  //----------
  ":": [	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},],
  //----------
  //|        |
  //|        |
  //|   ##   |
  //|        |
  //|        |
  //|   ##   |
  //|   ##   |
  //|  ##    |
  //----------
  ";": [	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},],
  //----------
  //|    ### |
  //|   ##   |
  //|  ##    |
  //| ##     |
  //|  ##    |
  //|   ##   |
  //|    ### |
  //|        |
  //----------
  "<": [	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|        |
  //|        |
  //| ###### |
  //|        |
  //| ###### |
  //|        |
  //|        |
  //|        |
  //----------
  "=": [	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},],
  //----------
  //| ###    |
  //|   ##   |
  //|    ##  |
  //|     ## |
  //|    ##  |
  //|   ##   |
  //| ###    |
  //|        |
  //----------
  ">": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},],
  //----------
  //|  ####  |
  //| ##  ## |
  //|     ## |
  //|    ##  |
  //|   ##   |
  //|        |
  //|   ##   |
  //|        |
  //----------
  "?": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},],
  //----------
  //|        |
  //|        |
  //|        |
  //|########|
  //|########|
  //|        |
  //|        |
  //|        |
  //----------
  "BAR": [	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},],
  //----------
  //|    #   |
  //|   ###  |
  //|  ##### |
  //| #######|
  //| #######|
  //|   ###  |
  //|  ##### |
  //|        |
  //----------
  "SPADE": [	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //----------
  "|": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},],
  //----------
  //|        |
  //|        |
  //|        |
  //|########|
  //|########|
  //|        |
  //|        |
  //|        |
  //----------
  "BAR_67": [	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},],
  //----------
  //|        |
  //|        |
  //|########|
  //|########|
  //|        |
  //|        |
  //|        |
  //|        |
  //----------
  "BAR_68": [	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},],
  //----------
  //|        |
  //|########|
  //|########|
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //----------
  "BAR_69": [	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},],
  //----------
  //|        |
  //|        |
  //|        |
  //|        |
  //|########|
  //|########|
  //|        |
  //|        |
  //----------
  "BAR_70": [	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},],
  //----------
  //|  ##    |
  //|  ##    |
  //|  ##    |
  //|  ##    |
  //|  ##    |
  //|  ##    |
  //|  ##    |
  //|  ##    |
  //----------
  "PIPE_71": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},],
  //----------
  //|    ##  |
  //|    ##  |
  //|    ##  |
  //|    ##  |
  //|    ##  |
  //|    ##  |
  //|    ##  |
  //|    ##  |
  //----------
  "PIPE_72": [	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":4, "y":7},	{"type":"PIXEL", "x":5, "y":7},],
  //----------
  //|        |
  //|        |
  //|        |
  //|###     |
  //|####    |
  //|  ###   |
  //|   ##   |
  //|   ##   |
  //----------
  "ROUNDED_CORNER_TOP_RIGHT": [	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},],
  //----------
  //|   ##   |
  //|   ##   |
  //|   ###  |
  //|    ####|
  //|     ###|
  //|        |
  //|        |
  //|        |
  //----------
  "ROUNDED_CORNER_BOTTOM_LEFT": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},],
  //----------
  //|   ##   |
  //|   ##   |
  //|  ###   |
  //|####    |
  //|###     |
  //|        |
  //|        |
  //|        |
  //----------
  "ROUNDED_CORNER_BOTTOM_RIGHT": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},],
  //----------
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //|########|
  //|########|
  //----------
  "FULL_CORNER_BOTTOM_LEFT": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},	{"type":"PIXEL", "x":5, "y":7},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|##      |
  //|###     |
  //| ###    |
  //|  ###   |
  //|   ###  |
  //|    ### |
  //|     ###|
  //|      ##|
  //----------
  "DIAGONAL_BACK_SLANT": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|      ##|
  //|     ###|
  //|    ### |
  //|   ###  |
  //|  ###   |
  //| ###    |
  //|###     |
  //|##      |
  //----------
  "DIAGONAL_FORWARD_SLANT": [	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},],
  //----------
  //|########|
  //|########|
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //----------
  "FULL_CORNER_TOP_LEFT": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},],
  //----------
  //|########|
  //|########|
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //----------
  "FULL_CORNER_TOP_RIGHT": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|        |
  //|  ####  |
  //| ###### |
  //| ###### |
  //| ###### |
  //| ###### |
  //|  ####  |
  //|        |
  //----------
  "DOT": [	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|########|
  //|########|
  //|        |
  //----------
  "BAR_82": [	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},],
  //----------
  //|  ## ## |
  //| #######|
  //| #######|
  //| #######|
  //|  ##### |
  //|   ###  |
  //|    #   |
  //|        |
  //----------
  "HEART": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":4, "y":6},],
  //----------
  //| ##     |
  //| ##     |
  //| ##     |
  //| ##     |
  //| ##     |
  //| ##     |
  //| ##     |
  //| ##     |
  //----------
  "PIPE_84": [	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},],
  //----------
  //|        |
  //|        |
  //|        |
  //|     ###|
  //|    ####|
  //|   ###  |
  //|   ##   |
  //|   ##   |
  //----------
  "ROUNDED_CORNER_TOP_LEFT": [	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},],
  //----------
  //|##    ##|
  //|###  ###|
  //| ###### |
  //|  ####  |
  //|  ####  |
  //| ###### |
  //|###  ###|
  //|##    ##|
  //----------
  "DIAGONAL_CROSS": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|        |
  //|  ####  |
  //| ###### |
  //| ##  ## |
  //| ##  ## |
  //| ###### |
  //|  ####  |
  //|        |
  //----------
  "CIRCLE": [	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|   ##   |
  //|   ##   |
  //| ##  ## |
  //| ##  ## |
  //|   ##   |
  //|   ##   |
  //|  ####  |
  //|        |
  //----------
  "CLUB": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|     ## |
  //|     ## |
  //|     ## |
  //|     ## |
  //|     ## |
  //|     ## |
  //|     ## |
  //|     ## |
  //----------
  "PIPE_89": [	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":5, "y":7},	{"type":"PIXEL", "x":6, "y":7},],
  //----------
  //|    #   |
  //|   ###  |
  //|  ##### |
  //| #######|
  //|  ##### |
  //|   ###  |
  //|    #   |
  //|        |
  //----------
  "DIAMOND": [	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":4, "y":6},],
  //----------
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|########|
  //|########|
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //----------
  "CROSS": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},],
  //----------
  //|##      |
  //|##      |
  //|  ##    |
  //|  ##    |
  //|##      |
  //|##      |
  //|  ##    |
  //|  ##    |
  //----------
  "CHECKER_BOARD_LEFT": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},],
  //----------
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //----------
  "PIPE_93": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},],
  //----------
  //|        |
  //|        |
  //|      ##|
  //|  ##### |
  //| ### ## |
  //|  ## ## |
  //|  ## ## |
  //|        |
  //----------
  "PI": [	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|########|
  //| #######|
  //|  ######|
  //|   #####|
  //|    ####|
  //|     ###|
  //|      ##|
  //|       #|
  //----------
  "DIAGONAL_FILL_TOP_RIGHT": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":7, "y":7},],

  //----------
  //|####    |
  //|####    |
  //|####    |
  //|####    |
  //|####    |
  //|####    |
  //|####    |
  //|####    |
  //----------
  "BLOCK_LEFT": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},],
  //----------
  //|        |
  //|        |
  //|        |
  //|        |
  //|########|
  //|########|
  //|########|
  //|########|
  //----------
  "BLOCK_BOTTOM": [	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},	{"type":"PIXEL", "x":5, "y":7},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|########|
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //----------
  "BAR_99": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},],
  //----------
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|########|
  //----------
  "BAR_100": [	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},	{"type":"PIXEL", "x":5, "y":7},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //----------
  "PIPE_101": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},],
  //----------
  //|##  ##  |
  //|##  ##  |
  //|  ##  ##|
  //|  ##  ##|
  //|##  ##  |
  //|##  ##  |
  //|  ##  ##|
  //|  ##  ##|
  //----------
  "CHECKER_BOARD": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //----------
  "PIPE_103": [	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|        |
  //|        |
  //|        |
  //|        |
  //|##  ##  |
  //|##  ##  |
  //|  ##  ##|
  //|  ##  ##|
  //----------
  "CHECKER_BOARD_BOTTOM": [	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|########|
  //|####### |
  //|######  |
  //|#####   |
  //|####    |
  //|###     |
  //|##      |
  //|#       |
  //----------
  "DIAGONAL_FILL_TOP_LEFT": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":0, "y":7},],
  //----------
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //----------
  "PIPE_106": [	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   #####|
  //|   #####|
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //----------
  "T_LEFT": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},],
  //----------
  //|        |
  //|        |
  //|        |
  //|        |
  //|    ####|
  //|    ####|
  //|    ####|
  //|    ####|
  //----------
  "BLOCK_BOTTOM_RIGHT": [	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":4, "y":7},	{"type":"PIXEL", "x":5, "y":7},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   #####|
  //|   #####|
  //|        |
  //|        |
  //|        |
  //----------
  "MID_CORNER_BOTTOM_LEFT": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},],
  //----------
  //|        |
  //|        |
  //|        |
  //|#####   |
  //|#####   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //----------
  "MID_CORNER_TOP_RIGHT": [	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},],
  //----------
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|########|
  //|########|
  //----------
  "BAR_111": [	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},	{"type":"PIXEL", "x":5, "y":7},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|        |
  //|        |
  //|        |
  //|   #####|
  //|   #####|
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //----------
  "MID_CORNER_TOP_LEFT": [	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},],
  //----------
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|########|
  //|########|
  //|        |
  //|        |
  //|        |
  //----------
  "T_BOTTOM": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},],
  //----------
  //|        |
  //|        |
  //|        |
  //|########|
  //|########|
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //----------
  "T_TOP": [	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},],
  //----------
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|#####   |
  //|#####   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //----------
  "T_RIGHT": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},],
  //----------
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //|##      |
  //----------
  "PIPE_116": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},],
  //----------
  //|###     |
  //|###     |
  //|###     |
  //|###     |
  //|###     |
  //|###     |
  //|###     |
  //|###     |
  //----------
  "PIPE_117": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},],
  //----------
  //|     ###|
  //|     ###|
  //|     ###|
  //|     ###|
  //|     ###|
  //|     ###|
  //|     ###|
  //|     ###|
  //----------
  "PIPE_118": [	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":5, "y":7},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|########|
  //|########|
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //----------
  "BAR_119": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},],
  //----------
  //|########|
  //|########|
  //|########|
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //----------
  "BAR_120": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},],
  //----------
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|########|
  //|########|
  //|########|
  //----------
  "BAR_121": [	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},	{"type":"PIXEL", "x":5, "y":7},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //|      ##|
  //|########|
  //|########|
  //----------
  "FULL_CORNER_BOTTOM_RIGHT": [	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},	{"type":"PIXEL", "x":5, "y":7},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],
  //----------
  //|        |
  //|        |
  //|        |
  //|        |
  //|####    |
  //|####    |
  //|####    |
  //|####    |
  //----------
  "BLOCK_BOTTOM_LEFT": [	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},],
  //----------
  //|    ####|
  //|    ####|
  //|    ####|
  //|    ####|
  //|        |
  //|        |
  //|        |
  //|        |
  //----------
  "BLOCK_TOP_RIGHT": [	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},],
  //----------
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|#####   |
  //|#####   |
  //|        |
  //|        |
  //|        |
  //----------
  "MID_CORNER_BOTTOM_RIGHT": [	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},],
  //----------
  //|####    |
  //|####    |
  //|####    |
  //|####    |
  //|        |
  //|        |
  //|        |
  //|        |
  //----------
  "BLOCK_TOP_LEFT": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},],
  //----------
  //|####    |
  //|####    |
  //|####    |
  //|####    |
  //|    ####|
  //|    ####|
  //|    ####|
  //|    ####|
  //----------
  "BLOCK_DIAGONAL_1": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":4, "y":7},	{"type":"PIXEL", "x":5, "y":7},	{"type":"PIXEL", "x":6, "y":7},	{"type":"PIXEL", "x":7, "y":7},],

  //----------
  //|        |
  //|        |
  //|  ####  |
  //|     ## |
  //|  ##### |
  //| ##  ## |
  //|  ##### |
  //|        |
  //----------
  "a": [	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|        |
  //| ##     |
  //| ##     |
  //| #####  |
  //| ##  ## |
  //| ##  ## |
  //| #####  |
  //|        |
  //----------
  "b": [	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|        |
  //|        |
  //|  ####  |
  //| ##     |
  //| ##     |
  //| ##     |
  //|  ####  |
  //|        |
  //----------
  "c": [	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|        |
  //|     ## |
  //|     ## |
  //|  ##### |
  //| ##  ## |
  //| ##  ## |
  //|  ##### |
  //|        |
  //----------
  "d": [	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|        |
  //|        |
  //|  ####  |
  //| ##  ## |
  //| ###### |
  //| ##     |
  //|  ####  |
  //|        |
  //----------
  "e": [	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|        |
  //|    ### |
  //|   ##   |
  //|  ##### |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|        |
  //----------
  "f": [	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},],
  //----------
  //|        |
  //|        |
  //|  ##### |
  //| ##  ## |
  //| ##  ## |
  //|  ##### |
  //|     ## |
  //| #####  |
  //----------
  "g": [	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},	{"type":"PIXEL", "x":5, "y":7},],
  //----------
  //|        |
  //| ##     |
  //| ##     |
  //| #####  |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //|        |
  //----------
  "h": [	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|        |
  //|   ##   |
  //|        |
  //|  ###   |
  //|   ##   |
  //|   ##   |
  //|  ####  |
  //|        |
  //----------
  "i": [	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|        |
  //|     ## |
  //|        |
  //|     ## |
  //|     ## |
  //|     ## |
  //|     ## |
  //|  ####  |
  //----------
  "j": [	{"type":"PIXEL", "x":5, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},	{"type":"PIXEL", "x":5, "y":7},],
  //----------
  //|        |
  //| ##     |
  //| ##     |
  //| ## ##  |
  //| ####   |
  //| ## ##  |
  //| ##  ## |
  //|        |
  //----------
  "k": [	{"type":"PIXEL", "x":1, "y":1},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|        |
  //|  ###   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|  ####  |
  //|        |
  //----------
  "l": [	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|        |
  //|        |
  //| ##  ## |
  //| #######|
  //| #######|
  //| ## # ##|
  //| ##   ##|
  //|        |
  //----------
  "m": [	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},],
  //----------
  //|        |
  //|        |
  //| #####  |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //|        |
  //----------
  "n": [	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|        |
  //|        |
  //|  ####  |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //|  ####  |
  //|        |
  //----------
  "o": [	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|        |
  //|        |
  //| #####  |
  //| ##  ## |
  //| ##  ## |
  //| #####  |
  //| ##     |
  //| ##     |
  //----------
  "p": [	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},],
  //----------
  //|        |
  //|        |
  //|  ##### |
  //| ##  ## |
  //| ##  ## |
  //|  ##### |
  //|     ## |
  //|     ## |
  //----------
  "q": [	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":5, "y":7},	{"type":"PIXEL", "x":6, "y":7},],
  //----------
  //|        |
  //|        |
  //| #####  |
  //| ##  ## |
  //| ##     |
  //| ##     |
  //| ##     |
  //|        |
  //----------
  "r": [	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},],
  //----------
  //|        |
  //|        |
  //|  ##### |
  //| ##     |
  //|  ####  |
  //|     ## |
  //| #####  |
  //|        |
  //----------
  "s": [	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},],
  //----------
  //|        |
  //|   ##   |
  //| ###### |
  //|   ##   |
  //|   ##   |
  //|   ##   |
  //|    ### |
  //|        |
  //----------
  "t": [	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|        |
  //|        |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //|  ##### |
  //|        |
  //----------
  "u": [	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|        |
  //|        |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //|  ####  |
  //|   ##   |
  //|        |
  //----------
  "v": [	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},],
  //----------
  //|        |
  //|        |
  //| ##   ##|
  //| ## # ##|
  //| #######|
  //|  ##### |
  //|  ## ## |
  //|        |
  //----------
  "w": [	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":7, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|        |
  //|        |
  //| ##  ## |
  //|  ####  |
  //|   ##   |
  //|  ####  |
  //| ##  ## |
  //|        |
  //----------
  "x": [	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":3, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],
  //----------
  //|        |
  //|        |
  //| ##  ## |
  //| ##  ## |
  //| ##  ## |
  //|  ##### |
  //|    ##  |
  //| ####   |
  //----------
  "y": [	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":5, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":3, "y":7},	{"type":"PIXEL", "x":4, "y":7},],
  //----------
  //|        |
  //|        |
  //| ###### |
  //|    ##  |
  //|   ##   |
  //|  ##    |
  //| ###### |
  //|        |
  //----------
  "z": [	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":6, "y":6},],

  //----------
  //|  ##  ##|
  //|  ##  ##|
  //|##  ##  |
  //|##  ##  |
  //|  ##  ##|
  //|  ##  ##|
  //|##  ##  |
  //|##  ##  |
  //----------
  "CHECKER_BOARD_INVERSE": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":2, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":0, "y":3},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":6, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":0, "y":7},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":4, "y":7},	{"type":"PIXEL", "x":5, "y":7},],
  //----------
  //|  ##  ##|
  //|#  ##  #|
  //|##  ##  |
  //| ##  ## |
  //|  ##  ##|
  //|#  ##  #|
  //|##  ##  |
  //| ##  ## |
  //----------
  "DIAGONAL_LINES_1": [	{"type":"PIXEL", "x":2, "y":0},	{"type":"PIXEL", "x":3, "y":0},	{"type":"PIXEL", "x":6, "y":0},	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":0, "y":2},	{"type":"PIXEL", "x":1, "y":2},	{"type":"PIXEL", "x":4, "y":2},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":6, "y":4},	{"type":"PIXEL", "x":7, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":0, "y":6},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":4, "y":6},	{"type":"PIXEL", "x":5, "y":6},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":5, "y":7},	{"type":"PIXEL", "x":6, "y":7},],

  //----------
  //|##  ##  |
  //|#  ##  #|
  //|  ##  ##|
  //| ##  ## |
  //|##  ##  |
  //|#  ##  #|
  //|  ##  ##|
  //| ##  ## |
  //----------
  "DIAGONAL_LINES_2": [	{"type":"PIXEL", "x":0, "y":0},	{"type":"PIXEL", "x":1, "y":0},	{"type":"PIXEL", "x":4, "y":0},	{"type":"PIXEL", "x":5, "y":0},	{"type":"PIXEL", "x":0, "y":1},	{"type":"PIXEL", "x":3, "y":1},	{"type":"PIXEL", "x":4, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":2, "y":2},	{"type":"PIXEL", "x":3, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":7, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":6, "y":3},	{"type":"PIXEL", "x":0, "y":4},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":5, "y":4},	{"type":"PIXEL", "x":0, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":4, "y":5},	{"type":"PIXEL", "x":7, "y":5},	{"type":"PIXEL", "x":2, "y":6},	{"type":"PIXEL", "x":3, "y":6},	{"type":"PIXEL", "x":6, "y":6},	{"type":"PIXEL", "x":7, "y":6},	{"type":"PIXEL", "x":1, "y":7},	{"type":"PIXEL", "x":2, "y":7},	{"type":"PIXEL", "x":5, "y":7},	{"type":"PIXEL", "x":6, "y":7},],

  //----------
  //|       #|
  //|      ##|
  //|     ## |
  //| ## ##  |
  //| ####   |
  //| ###    |
  //| ##     |
  //|        |
  //----------
  "CHECK": [	{"type":"PIXEL", "x":7, "y":0},	{"type":"PIXEL", "x":6, "y":1},	{"type":"PIXEL", "x":7, "y":1},	{"type":"PIXEL", "x":5, "y":2},	{"type":"PIXEL", "x":6, "y":2},	{"type":"PIXEL", "x":1, "y":3},	{"type":"PIXEL", "x":2, "y":3},	{"type":"PIXEL", "x":4, "y":3},	{"type":"PIXEL", "x":5, "y":3},	{"type":"PIXEL", "x":1, "y":4},	{"type":"PIXEL", "x":2, "y":4},	{"type":"PIXEL", "x":3, "y":4},	{"type":"PIXEL", "x":4, "y":4},	{"type":"PIXEL", "x":1, "y":5},	{"type":"PIXEL", "x":2, "y":5},	{"type":"PIXEL", "x":3, "y":5},	{"type":"PIXEL", "x":1, "y":6},	{"type":"PIXEL", "x":2, "y":6},],

  //----------
  //|########|
  //|########|
  //|########|
  //|########|
  //|########|
  //|########|
  //|########|
  //|########|
  //----------
  "BLOCK": [{"type":"RECTANGLE", "x":0, "y":0, "width":8, "height":8}],

  //----------
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //|        |
  //----------
  "SPACE": [],

  //----------
  //|        |
  //|        |
  //|        |
  //|###     |
  //|####    |
  //|#####   |
  //|#####   |
  //|#####   |
  //----------
  "ROUNDED_CORNER_FILLED_TOP_RIGHT": [
    {type:"RECTANGLE", x:0, y:3, width:3, height:5},
    {type:"RECTANGLE", x:3, y:4, width:1, height:4},
    {type:"RECTANGLE", x:4, y:5, width:1, height:3}
  ],
  //----------
  //|   #####|
  //|   #####|
  //|   #####|
  //|    ####|
  //|     ###|
  //|        |
  //|        |
  //|        |
  //----------
  "ROUNDED_CORNER_FILLED_BOTTOM_LEFT": [
    {type:"RECTANGLE", x:3, y:0, width:5, height:3},
    {type:"RECTANGLE", x:4, y:3, width:4, height:1},
    {type:"RECTANGLE", x:5, y:4, width:3, height:1}
  ],
  //----------
  //|#####   |
  //|#####   |
  //|#####   |
  //|####    |
  //|###     |
  //|        |
  //|        |
  //|        |
  //----------
  "ROUNDED_CORNER_FILLED_BOTTOM_RIGHT": [
    {type:"RECTANGLE", x:0, y:0, width:5, height:3},
    {type:"RECTANGLE", x:0, y:3, width:4, height:1},
    {type:"RECTANGLE", x:0, y:4, width:3, height:1}
  ],
  //----------
  //|        |
  //|        |
  //|        |
  //|     ###|
  //|    ####|
  //|   #####|
  //|   #####|
  //|   #####|
  //----------
  "ROUNDED_CORNER_FILLED_TOP_LEFT": [
    {type:"RECTANGLE", x:3, y:5, width:5, height:3},
    {type:"RECTANGLE", x:4, y:4, width:4, height:1},
    {type:"RECTANGLE", x:5, y:3, width:3, height:1}
  ],

  //----------
  //|    #   |
  //|   ###  |
  //|  ## ## |
  //| ##   ##|
  //| #     #|
  //| #     #|
  //|        |
  //|        |
  //----------
  "^" : [{"type":"PIXEL","x":4,"y":0},{"type":"PIXEL","x":3,"y":1},{"type":"PIXEL","x":4,"y":1},{"type":"PIXEL","x":5,"y":1},{"type":"PIXEL","x":2,"y":2},{"type":"PIXEL","x":3,"y":2},{"type":"PIXEL","x":5,"y":2},{"type":"PIXEL","x":6,"y":2},{"type":"PIXEL","x":1,"y":3},{"type":"PIXEL","x":2,"y":3},{"type":"PIXEL","x":6,"y":3},{"type":"PIXEL","x":7,"y":3},{"type":"PIXEL","x":1,"y":4},{"type":"PIXEL","x":7,"y":4},{"type":"PIXEL","x":1,"y":5},{"type":"PIXEL","x":7,"y":5}],

  //----------
  //|        |
  //|        |
  //|  ##    |
  //| #### # |
  //| # #### |
  //|    ##  |
  //|        |
  //|        |
  //----------
  "~" : [{"type":"PIXEL","x":2,"y":2},{"type":"PIXEL","x":3,"y":2},{"type":"PIXEL","x":1,"y":3},{"type":"PIXEL","x":2,"y":3},{"type":"PIXEL","x":3,"y":3},{"type":"PIXEL","x":4,"y":3},{"type":"PIXEL","x":6,"y":3},{"type":"PIXEL","x":1,"y":4},{"type":"PIXEL","x":3,"y":4},{"type":"PIXEL","x":4,"y":4},{"type":"PIXEL","x":5,"y":4},{"type":"PIXEL","x":6,"y":4},{"type":"PIXEL","x":4,"y":5},{"type":"PIXEL","x":5,"y":5}],

  //----------
  //|    ##  |
  //|   ##   |
  //|   ##   |
  //|  ##    |
  //|   ##   |
  //|   ##   |
  //|    ##  |
  //|        |
  //----------
  "{" : [{"type":"PIXEL","x":4,"y":0},{"type":"PIXEL","x":5,"y":0},{"type":"PIXEL","x":3,"y":1},{"type":"PIXEL","x":4,"y":1},{"type":"PIXEL","x":3,"y":2},{"type":"PIXEL","x":4,"y":2},{"type":"PIXEL","x":2,"y":3},{"type":"PIXEL","x":3,"y":3},{"type":"PIXEL","x":3,"y":4},{"type":"PIXEL","x":4,"y":4},{"type":"PIXEL","x":3,"y":5},{"type":"PIXEL","x":4,"y":5},{"type":"PIXEL","x":4,"y":6},{"type":"PIXEL","x":5,"y":6}],

  //----------
  //|  ##    |
  //|   ##   |
  //|   ##   |
  //|    ##  |
  //|   ##   |
  //|   ##   |
  //|  ##    |
  //|        |
  //----------
  "}" : [{"type":"PIXEL","x":2,"y":0},{"type":"PIXEL","x":3,"y":0},{"type":"PIXEL","x":3,"y":1},{"type":"PIXEL","x":4,"y":1},{"type":"PIXEL","x":3,"y":2},{"type":"PIXEL","x":4,"y":2},{"type":"PIXEL","x":4,"y":3},{"type":"PIXEL","x":5,"y":3},{"type":"PIXEL","x":3,"y":4},{"type":"PIXEL","x":4,"y":4},{"type":"PIXEL","x":3,"y":5},{"type":"PIXEL","x":4,"y":5},{"type":"PIXEL","x":2,"y":6},{"type":"PIXEL","x":3,"y":6}]
};
