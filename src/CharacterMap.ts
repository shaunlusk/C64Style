import { IPixPath } from "./IPixPath";
import { PixPath } from "./PixPath";
import { PixPathRectangle } from "./PixPathRectangle";

/**
*  PixMaps for characters from the original C64 character set.
*  These are drawn via the {@link CharacterRenderer CharacterRenderer} class.
*  These are used by TextLayer and TextElement.
*  The names of some of the symbols were made up by me somewhat arbitrarily (e.g."DIAGONAL_FILL_TOP_RIGHT");
*  Note that inverse characters are not included here despite being part of the original C64 character set;
*  rather, CharacterRender can render a background and foreground color when rendering text.
*  Maps generated from:
*  https://www.c64-wiki.com/index.php/Character_set
*/
let CharacterMap: {[key: string]: IPixPath[]} = {

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
  "@": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "A": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "B": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "C": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "D": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),],
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
  "E": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "F": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(1, 6),	new PixPath(2, 6),],
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
  "G": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "H": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "I": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "J": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),],
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
  "K": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "L": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "M": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(4, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(6, 6),	new PixPath(7, 6),],
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
  "N": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "O": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "P": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(1, 6),	new PixPath(2, 6),],
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
  "Q": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "R": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "S": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "T": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),],
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
  "U": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "V": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(3, 6),	new PixPath(4, 6),],
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
  "W": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(4, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(6, 6),	new PixPath(7, 6),],
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
  "X": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "Y": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),],
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
  "Z": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "[": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "BRITISH_POUND": [	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(3, 1),	new PixPath(6, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(6, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "]": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "ARROW_UP": [	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(3, 7),	new PixPath(4, 7),],
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
  "ARROW_LEFT": [	new PixPath(3, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(3, 6),],

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
  "!": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(3, 6),	new PixPath(4, 6),],
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
  "\"": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),],
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
  "#": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "$": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(3, 6),	new PixPath(4, 6),],
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
  "%": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(1, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "&": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(7, 6),],
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
  "'": [	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(3, 2),	new PixPath(4, 2),],
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
  "(": [	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  ")": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(2, 6),	new PixPath(3, 6),],
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
  "*": [	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),],
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
  "+": [	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),],
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
  ",": [	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(2, 7),	new PixPath(3, 7),],
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
  "-": [	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),],
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
  ".": [	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),],
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
  "/": [	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(1, 6),	new PixPath(2, 6),],
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
  "0": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "1": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "2": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "3": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "4": [	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "5": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "6": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "7": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),],
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
  "8": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "9": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  ":": [	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(3, 5),	new PixPath(4, 5),],
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
  ";": [	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(2, 7),	new PixPath(3, 7),],
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
  "<": [	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "=": [	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),],
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
  ">": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),],
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
  "?": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 6),	new PixPath(4, 6),],
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
  "BAR": [	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),],
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
  "SPADE": [	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "|": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(3, 7),	new PixPath(4, 7),],
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
  "BAR_67": [	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),],
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
  "BAR_68": [	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),],
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
  "BAR_69": [	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(7, 2),],
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
  "BAR_70": [	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(7, 5),],
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
  "PIPE_71": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(2, 7),	new PixPath(3, 7),],
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
  "PIPE_72": [	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(4, 7),	new PixPath(5, 7),],
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
  "ROUNDED_CORNER_TOP_RIGHT": [	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(3, 7),	new PixPath(4, 7),],
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
  "ROUNDED_CORNER_BOTTOM_LEFT": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),],
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
  "ROUNDED_CORNER_BOTTOM_RIGHT": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),],
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
  "FULL_CORNER_BOTTOM_LEFT": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(0, 7),	new PixPath(1, 7),	new PixPath(2, 7),	new PixPath(3, 7),	new PixPath(4, 7),	new PixPath(5, 7),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "DIAGONAL_BACK_SLANT": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "DIAGONAL_FORWARD_SLANT": [	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(0, 7),	new PixPath(1, 7),],
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
  "FULL_CORNER_TOP_LEFT": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(0, 7),	new PixPath(1, 7),],
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
  "FULL_CORNER_TOP_RIGHT": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "DOT": [	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "BAR_82": [	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(7, 6),],
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
  "HEART": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(4, 6),],
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
  "PIPE_84": [	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(1, 7),	new PixPath(2, 7),],
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
  "ROUNDED_CORNER_TOP_LEFT": [	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(3, 7),	new PixPath(4, 7),],
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
  "DIAGONAL_CROSS": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(0, 7),	new PixPath(1, 7),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "CIRCLE": [	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "CLUB": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "PIPE_89": [	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(5, 7),	new PixPath(6, 7),],
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
  "DIAMOND": [	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(4, 6),],
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
  "CROSS": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(3, 7),	new PixPath(4, 7),],
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
  "CHECKER_BOARD_LEFT": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(2, 7),	new PixPath(3, 7),],
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
  "PIPE_93": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(3, 7),	new PixPath(4, 7),],
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
  "PI": [	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "DIAGONAL_FILL_TOP_RIGHT": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(7, 7),],

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
  "BLOCK_LEFT": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(0, 7),	new PixPath(1, 7),	new PixPath(2, 7),	new PixPath(3, 7),],
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
  "BLOCK_BOTTOM": [	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(0, 7),	new PixPath(1, 7),	new PixPath(2, 7),	new PixPath(3, 7),	new PixPath(4, 7),	new PixPath(5, 7),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "BAR_99": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(7, 0),],
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
  "BAR_100": [	new PixPath(0, 7),	new PixPath(1, 7),	new PixPath(2, 7),	new PixPath(3, 7),	new PixPath(4, 7),	new PixPath(5, 7),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "PIPE_101": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(0, 7),	new PixPath(1, 7),],
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
  "CHECKER_BOARD": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(2, 7),	new PixPath(3, 7),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "PIPE_103": [	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "CHECKER_BOARD_BOTTOM": [	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(2, 7),	new PixPath(3, 7),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "DIAGONAL_FILL_TOP_LEFT": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(0, 7),],
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
  "PIPE_106": [	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "T_LEFT": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(3, 7),	new PixPath(4, 7),],
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
  "BLOCK_BOTTOM_RIGHT": [	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(4, 7),	new PixPath(5, 7),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "MID_CORNER_BOTTOM_LEFT": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),],
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
  "MID_CORNER_TOP_RIGHT": [	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(3, 7),	new PixPath(4, 7),],
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
  "BAR_111": [	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(0, 7),	new PixPath(1, 7),	new PixPath(2, 7),	new PixPath(3, 7),	new PixPath(4, 7),	new PixPath(5, 7),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "MID_CORNER_TOP_LEFT": [	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(3, 7),	new PixPath(4, 7),],
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
  "T_BOTTOM": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),],
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
  "T_TOP": [	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(3, 7),	new PixPath(4, 7),],
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
  "T_RIGHT": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(3, 7),	new PixPath(4, 7),],
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
  "PIPE_116": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(0, 7),	new PixPath(1, 7),],
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
  "PIPE_117": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(0, 7),	new PixPath(1, 7),	new PixPath(2, 7),],
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
  "PIPE_118": [	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(5, 7),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "BAR_119": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(7, 1),],
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
  "BAR_120": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(7, 2),],
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
  "BAR_121": [	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(0, 7),	new PixPath(1, 7),	new PixPath(2, 7),	new PixPath(3, 7),	new PixPath(4, 7),	new PixPath(5, 7),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "FULL_CORNER_BOTTOM_RIGHT": [	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(0, 7),	new PixPath(1, 7),	new PixPath(2, 7),	new PixPath(3, 7),	new PixPath(4, 7),	new PixPath(5, 7),	new PixPath(6, 7),	new PixPath(7, 7),],
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
  "BLOCK_BOTTOM_LEFT": [	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(0, 5),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(0, 7),	new PixPath(1, 7),	new PixPath(2, 7),	new PixPath(3, 7),],
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
  "BLOCK_TOP_RIGHT": [	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),],
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
  "MID_CORNER_BOTTOM_RIGHT": [	new PixPath(3, 0),	new PixPath(4, 0),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),],
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
  "BLOCK_TOP_LEFT": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),],
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
  "BLOCK_DIAGONAL_1": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(0, 1),	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(4, 7),	new PixPath(5, 7),	new PixPath(6, 7),	new PixPath(7, 7),],

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
  "a": [	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "b": [	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "c": [	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "d": [	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "e": [	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "f": [	new PixPath(4, 1),	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(3, 6),	new PixPath(4, 6),],
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
  "g": [	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(1, 7),	new PixPath(2, 7),	new PixPath(3, 7),	new PixPath(4, 7),	new PixPath(5, 7),],
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
  "h": [	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "i": [	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "j": [	new PixPath(5, 1),	new PixPath(6, 1),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(2, 7),	new PixPath(3, 7),	new PixPath(4, 7),	new PixPath(5, 7),],
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
  "k": [	new PixPath(1, 1),	new PixPath(2, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "l": [	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "m": [	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(4, 5),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(6, 6),	new PixPath(7, 6),],
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
  "n": [	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "o": [	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "p": [	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(1, 7),	new PixPath(2, 7),],
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
  "q": [	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(5, 6),	new PixPath(6, 6),	new PixPath(5, 7),	new PixPath(6, 7),],
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
  "r": [	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(1, 6),	new PixPath(2, 6),],
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
  "s": [	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),],
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
  "t": [	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "u": [	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "v": [	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(3, 6),	new PixPath(4, 6),],
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
  "w": [	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(4, 3),	new PixPath(6, 3),	new PixPath(7, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "x": [	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(2, 3),	new PixPath(3, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(5, 6),	new PixPath(6, 6),],
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
  "y": [	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(5, 4),	new PixPath(6, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(5, 5),	new PixPath(6, 5),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(1, 7),	new PixPath(2, 7),	new PixPath(3, 7),	new PixPath(4, 7),],
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
  "z": [	new PixPath(1, 2),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(1, 6),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(6, 6),],

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
  "CHECKER_BOARD_INVERSE": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(2, 1),	new PixPath(3, 1),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(0, 3),	new PixPath(1, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(6, 5),	new PixPath(7, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(0, 7),	new PixPath(1, 7),	new PixPath(4, 7),	new PixPath(5, 7),],
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
  "DIAGONAL_LINES_1": [	new PixPath(2, 0),	new PixPath(3, 0),	new PixPath(6, 0),	new PixPath(7, 0),	new PixPath(0, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(7, 1),	new PixPath(0, 2),	new PixPath(1, 2),	new PixPath(4, 2),	new PixPath(5, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(6, 4),	new PixPath(7, 4),	new PixPath(0, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(7, 5),	new PixPath(0, 6),	new PixPath(1, 6),	new PixPath(4, 6),	new PixPath(5, 6),	new PixPath(1, 7),	new PixPath(2, 7),	new PixPath(5, 7),	new PixPath(6, 7),],

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
  "DIAGONAL_LINES_2": [	new PixPath(0, 0),	new PixPath(1, 0),	new PixPath(4, 0),	new PixPath(5, 0),	new PixPath(0, 1),	new PixPath(3, 1),	new PixPath(4, 1),	new PixPath(7, 1),	new PixPath(2, 2),	new PixPath(3, 2),	new PixPath(6, 2),	new PixPath(7, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(5, 3),	new PixPath(6, 3),	new PixPath(0, 4),	new PixPath(1, 4),	new PixPath(4, 4),	new PixPath(5, 4),	new PixPath(0, 5),	new PixPath(3, 5),	new PixPath(4, 5),	new PixPath(7, 5),	new PixPath(2, 6),	new PixPath(3, 6),	new PixPath(6, 6),	new PixPath(7, 6),	new PixPath(1, 7),	new PixPath(2, 7),	new PixPath(5, 7),	new PixPath(6, 7),],

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
  "CHECK": [	new PixPath(7, 0),	new PixPath(6, 1),	new PixPath(7, 1),	new PixPath(5, 2),	new PixPath(6, 2),	new PixPath(1, 3),	new PixPath(2, 3),	new PixPath(4, 3),	new PixPath(5, 3),	new PixPath(1, 4),	new PixPath(2, 4),	new PixPath(3, 4),	new PixPath(4, 4),	new PixPath(1, 5),	new PixPath(2, 5),	new PixPath(3, 5),	new PixPath(1, 6),	new PixPath(2, 6),],

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
  "BLOCK": [new PixPathRectangle(0, 0, 8, 8)],

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
    new PixPathRectangle(0, 3, 3, 5),
    new PixPathRectangle(3, 4, 1, 4),
    new PixPathRectangle(4, 5, 1, 3)
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
    new PixPathRectangle(3, 0, 5, 3),
    new PixPathRectangle(4, 3, 4, 1),
    new PixPathRectangle(5, 4, 3, 1)
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
    new PixPathRectangle(0, 0, 5, 3),
    new PixPathRectangle(0, 3, 4, 1),
    new PixPathRectangle(0, 4, 3, 1)
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
    new PixPathRectangle(3, 5, 5, 3),
    new PixPathRectangle(4, 4, 4, 1),
    new PixPathRectangle(5, 3, 3, 1)
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
  "^" : [new PixPath(4, 0),new PixPath(3, 1),new PixPath(4, 1),new PixPath(5, 1),new PixPath(2, 2),new PixPath(3, 2),new PixPath(5, 2),new PixPath(6, 2),new PixPath(1, 3),new PixPath(2, 3),new PixPath(6, 3),new PixPath(7, 3),new PixPath(1, 4),new PixPath(7, 4),new PixPath(1, 5),new PixPath(7, 5)],

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
  "~" : [new PixPath(2, 2),new PixPath(3, 2),new PixPath(1, 3),new PixPath(2, 3),new PixPath(3, 3),new PixPath(4, 3),new PixPath(6, 3),new PixPath(1, 4),new PixPath(3, 4),new PixPath(4, 4),new PixPath(5, 4),new PixPath(6, 4),new PixPath(4, 5),new PixPath(5, 5)],

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
  "{" : [new PixPath(4, 0),new PixPath(5, 0),new PixPath(3, 1),new PixPath(4, 1),new PixPath(3, 2),new PixPath(4, 2),new PixPath(2, 3),new PixPath(3, 3),new PixPath(3, 4),new PixPath(4, 4),new PixPath(3, 5),new PixPath(4, 5),new PixPath(4, 6),new PixPath(5, 6)],

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
  "}" : [new PixPath(2, 0),new PixPath(3, 0),new PixPath(3, 1),new PixPath(4, 1),new PixPath(3, 2),new PixPath(4, 2),new PixPath(4, 3),new PixPath(5, 3),new PixPath(3, 4),new PixPath(4, 4),new PixPath(3, 5),new PixPath(4, 5),new PixPath(2, 6),new PixPath(3, 6)]
};

// Aliases
CharacterMap._ = CharacterMap.BAR_82;
CharacterMap.UNDERSCORE = CharacterMap.BAR_82;

// module.exports = CharacterMap;
export {CharacterMap};
