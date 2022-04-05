import { IAnimationFrame } from '@shaunlusk/slgfx';
import { IPixPath } from './IPixPath';

/**
* PixSprite Implementation of AnimationFrame.
* @implements {IAnimationFrame}
* @constructor
* @param {number} duration Object properties.
* @param {Array} pixArray The Array of Pix entries for this frame. Format: <br />
*     {type:"TYPE", x:x, y:y, [width:width, height:height,] color:ColorObject}</br>
*     where:
*     <ul>
*       <li>type can be either "PIXEL" or "RECTANGLE" (see {@link PixPathTypes})</li>
*       <li>x, y are coordinates relative to the element's origin</li>
*       <li>width, height are only used by RECTANGLE types to determine the size of the rectangle drawn</li>
*       <li>color can be any of: a valid CSS color (hex format "#1234AB", or "rbg(100, 200, 255)"),
*           a ColorPointer,
*           or an integer value corresponding to an index on this element's color palette.</li>
*     </ul>
* @see {PixSprite}
*/
export class PixSpriteFrame implements IAnimationFrame {
  private _pixArray: IPixPath[];
  private _duration: number;

  constructor(pixArray: IPixPath[], duration: number) {
    this._pixArray = pixArray;
    this._duration = duration;
  }

  /** Return the duration to display this frame.
  * @returns {number}
  */
  public getDuration() {return this._duration;}

  /** Return the PixArray for this frame.
  * @returns {number}
  */
  public getPixArray() {return this._pixArray;}

}