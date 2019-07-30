import AnimationFrame from 'slgfx/src/SpriteAnimationFrame';

/**
* PixSprite Implementation of AnimationFrame.
* @extends {AnimationFrame}
* @constructor
* @param {Object} props Object properties.
* @param {number} props.duration Object properties.
* @param {Array} props.pixArray The Array of Pix entries for this frame. Format: <br />
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
function PixSpriteFrame(props) {
  props = props || {};
  AnimationFrame.call(this);
  this._pixArray = props.pixArray;
  this._duration = props.duration;
};
PixSpriteFrame.prototype = new AnimationFrame();
PixSpriteFrame.prototype.callback = PixSpriteFrame;

/** Return the duration to display this frame.
* @returns {number}
*/
PixSpriteFrame.prototype.getDuration = function() {return this._duration;};

/** Return the PixArray for this frame.
* @returns {number}
*/
PixSpriteFrame.prototype.getPixArray = function() {return this._pixArray;};

export default PixSpriteFrame;
