import { CanvasContextWrapper, ISpriteProps, Sprite } from "@shaunlusk/slgfx";
import { IColor } from "./Color";
import { Palette } from "./Palette";
import { IPixRenderer, PixRenderer } from "./PixRenderer";
import { PixSpriteFrame } from "./PixSpriteFrame";

export interface IPixSpriteProps extends ISpriteProps {
  defaultPalette: Palette;
  pixRenderer: IPixRenderer;
}

/** For showing Pix Animations.  Much like PixElement, but uses multiple frames for animations.<br />
* <b>Extends</b> [Sprite]{@link https://shaunlusk.github.io/slgfx/docs/Sprite.html}
* Uses {@link PixSpriteFrame} for its frames.
* @constructor
* @param {Object} props Properties
* @param {Screen} props.screenContext The target screen.
* @param {int} [props.scaleX=1] Horizontal scale of this element.  Independent of screen scale.
* @param {int} [props.scaleY=1] Vertical scale of this element.  Independent of screen scale.
* @param {boolean} [props.hidden=false] Whether to hide this element.
* @param {number} [props.x=0] The X coordinate for this element.
* @param {number} [props.y=0] The Y coordinate for this element.
* @param {number} [props.rotation=0] The amount of rotation to apply to the element, in radians.  Applied on top of base rotation.
* @param {number} [props.baseRotation=0] The amount of base rotation to apply to the element, in radians. Usually used to apply an initial, unchanging rotation to the element.  Useful for correcting orientation of images.
* @param {boolean} [props.horizontalFlip=false] Whether to flip the element horizontally.
* @param {boolean} [props.verticalFlip=false] Whether to flip the element vertically.
* @param {number} [props.zIndex=-1] The z-index; elements with higher zIndex values will be drawn later than those with lower values (drawn on top of those with lower values).
* @param {Array.<PixSpriteFrame>} [props.frames=[]] Optional. An array of {@link PixSpriteFrame}'s. Default: empty array.
* @param {number} [props.ttl=-1] Time-to-live.  The time (milliseconds) to continue the Sprites animation.  Default: -1 (unlimited time)
* @param {boolean} [props.loop=true] Whether to loop the animation or not.
* @param {int} [props.loopsToLive=-1] If loop is true, the number of loops to execute.  Default: -1 (unlimited loops)
* @param {int} [props.freezeFrameIdx=-1] When animation completes, switch to the frame indicated by the freeze frame index (referring to the index of the frame in the frames array). Default: -1 (don't change frames when animation stops, stay with the final frame)
* @param {Array.<Color>} [props.defaultPalette=Color.getDefaultPalette()] An array of colors.  When a Pix Array entry references a color index, the corresponding color in this array will be used for the entry.
* @param {PixRenderer} [props.pixRenderer=new PixRenderer] The PixRenderer that will draw on the canvas.
* @see GfxElement
* @see AnimationFrame
* @see PixSprite
* @see ImageSprite
*/
export class PixSprite extends Sprite {
  _palette: Palette;
  _width: number;
  _height: number;
  _pixRenderer: IPixRenderer;

  constructor(props: IPixSpriteProps) {
    super(props);
    this._palette = props.defaultPalette || Palette.getDefaultPalette();

    this._width = 0;
    this._height = 0;

    this._pixRenderer = props.pixRenderer || new PixRenderer();

    this._setDimensions();
  }

  /** Return the width of the PixSprite
  * @returns {integer}
  */
  public override getWidth() {return this._width;}

  /** Return the height of the PixSprite
  * @returns {integer}
  */
  public override getHeight() {return this._height;}

  /** Return the palette color for the specified index
  * @returns {integer}
  */
  public getPaletteColor(idx: number) {return this._palette.colorFromIndex(idx);}

  /** Set the palette color for a given palette index.
  * @param {integer} idx
  * @param {string} Color string
  */
   public setPaletteColor(idx: number, color: IColor) {
    this._palette.setColorAtIndex(idx, color);
    this.setDirty(true);
  }

  /** Return the palette
  * @returns {Array.<Color>} Array of color values.
  */
  public getPalette() {return this._palette;}

  /** Set the palette
  * @param {Array.<Color>} palette The palette to set.
  */
  public setPalette(palette: Palette) {
    this._palette = palette;
    this.setDirty(true);
  }

  /** @private */
  private _setDimensions() {
    let width = 0, height = 0;
    const frames = this.getFrames() as PixSpriteFrame[];
    for (let fidx = 0; fidx < frames.length; fidx++) {
      const pixPathArray = frames[fidx].getPixArray();
      for (let i = 0; i < pixPathArray.length; i++) {
        const pixPath = pixPathArray[i];
        const tx = pixPath.x;
        const ty = pixPath.y;
        // switch(pixPath.type) {
        //   case PixPathTypes.PIXEL:
        //   width = tx + 1;
        //   height = ty + 1;
        //   break;
        //   case PixPathTypes.RECTANGLE:
        //   width = tx + pixPath.width;
        //   height = ty + pixPath.height;
        //   break;
        // }
        width = tx + pixPath.width;
        height = ty + pixPath.height;
        if (width > this._width) this._width = width;
        if (height > this._height) this._height = height;
      }
    }
  }

  /* Render the specified PixSpriteFrame.  Automatically called as needed during screen render cycle.<br />
  * @param {number} time The current time (milliseconds).
  * @param {number} diff The difference between the previous render cycle and the current cycle (milliseconds).
  * @param {PixSpriteFrame} frame The frame to be rendered.
  */
  public override renderFrame(canvasContext: CanvasContextWrapper, time: number, diff: number, frame: PixSpriteFrame) {
    const pixPathArray = frame.getPixArray();

    this._pixRenderer.renderPixPathArray(
      canvasContext,
      this.getScaledX(),
      this.getScaledY(),
      this.getScaledWidth(),
      this.getScaledHeight(),
      pixPathArray,
      this._palette,
      this.getTotalScaleX(),
      this.getTotalScaleY(),
      this.isHorizontallyFlipped(),
      this.isVerticallyFlipped(),
      this.getRotation()
    );
  }

}
