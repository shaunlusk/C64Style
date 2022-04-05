import { CanvasContextWrapper, GfxElement, IGfxElementProps } from "@shaunlusk/slgfx";
import { CharacterRenderer, ICharacterRenderer } from "./CharacterRenderer";
import { Color, IColor } from "./Color";
import { CELLHEIGHT, CELLWIDTH } from "./Constants";

export interface ITextElementProps extends IGfxElementProps {
  text: string;
  symbolName?: string;
  color: Color;
  backgroundColor?: Color;
  pixelWidth?: number;
  pixelHeight?: number;
  characterRenderer?: ICharacterRenderer;
}

/** Element that draws a text string or a text symbol to a canvas.<br />
* <b>Extends</b> [GfxElement]{@link https://shaunlusk.github.io/slgfx/docs/GfxElement.html}
* @constructor
* @param {Object} props Properties
* @param {Screen} props.screenContext The target screen.
* @param {int} [props.scaleX=1] Horizontal scale of this element.  Independent of screen scale.
* @param {int} [props.scaleY=1] Vertical scale of this element.  Independent of screen scale.
* @param {boolean} [props.hidden=false] Whether to hide this element.
* @param {number} [props.x=0] The X coordinate for this element.
* @param {number} [props.y=0] The Y coordinate for this element.
* @param {boolean} [props.horizontalFlip=false] Whether to flip the element horizontally.
* @param {boolean} [props.verticalFlip=false] Whether to flip the element vertically.
* @param {number} [props.zIndex=-1] The z-index; elements with higher zIndex values will be drawn later than those with lower values (drawn on top of those with lower values).
* @param {string} props.text The text for this element. A text string or a symbol name is required for TextElement.
* @param {string} props.symbolName The symbolName for this element.  A text string or a symbol name is required for TextElement.  Refer to symbol names in {@link CharacterMap}.
* @param {Color} [props.color=Color.LIGHTBLUE] The color for the text.
* @param {Color} [props.backgroundColor=none] The backgroundColor for the text.
* @param {CharacterRenderer} [props.characterRenderer=new CharacterRenderer] The renderer to use to draw text.
*     This can be shared with a renderer for drawing text elements.  If a renderer is not provided,
*     This TextElement will create a {@link CharacterRenderer}.
*/
export class TextElement extends GfxElement {
  protected _width: number;
  protected _height: number;
  protected _color: IColor;
  protected _backgroundColor: IColor;
  protected _text: string;
  protected _symbolName: string;
  protected _characterRenderer: ICharacterRenderer;
  protected _lastWidth: number;

  constructor(props: ITextElementProps) {

    super(props);
    this._width = 0;
    this._height = CELLHEIGHT;
    this._color = props.color || Color.LIGHTBLUE;
    this._backgroundColor = props.backgroundColor;
    this._text = props.text;
    this._symbolName = props.symbolName;
    this._characterRenderer = props.characterRenderer || new CharacterRenderer();

    this._setWidth();
  }

  /** Returns the CharacterRenderer for this element.
  * @returns {CharacterRenderer}
  */
  public getCharacterRenderer() {return this._characterRenderer;}

  /**
  * Return this element's width.
  * @return {number}
  */
  public override getWidth() {return this._width;}

  // /**
  // * Return this element's width during the previous render cycle.
  // * @return {number}
  // */
  // private getLastWidth() {return this._lastWidth || this._width;}

  /**
  * Return this element's height.
  * @return {number}
  */
  public override getHeight() {return this._height;}

  /**
  * Return this element's text.
  * @return {string}
  */
  public getText() {return this._text;}

  /**
  * Set this element's text.
  * @param {string} text
  */
  public setText(text: string) {
    this._text = text;
    this._symbolName = null;
    this._setWidth();
    this.setDirty(true);
  }

  /**
  * Return this element's symbolName.
  * @return {string}
  */
  public getSymbolName() {return this._symbolName;}

  /**
  * Set this element's symbolName.
  * @param {string} symbolName
  */
  public setSymbolName(symbolName: string) {
    this._symbolName = symbolName;
    this._text = null;
    this._setWidth();
    this.setDirty(true);
  }

  /**
  * Return this element's color.
  * @return {IColor}
  */
  public getColor() {return this._color;}

  /**
  * Set this element's color.
  * @param {IColor}
  */
  public setColor(color: IColor) {
    this._color = color;
    this.setDirty(true);
  }

  /**
  * Return this element's backgroundColor.
  * @return {Color}
  */
  public getBackgroundColor() {return this._backgroundColor;}

  /**
  * Set this element's backgroundColor.
  * @param {Color}
  */
  public setBackgroundColor(color: IColor) {
    this._backgroundColor = color;
    this.setDirty(true);
  }

  /** @private */
  protected _setWidth() {
    this._lastWidth = this._width;
    this._width = CELLWIDTH * (this._text ? this._text.length : 1);
  }

  // /** Clear this element.
  // * In case the width of the text changed, clear based on last width
  // * @param {number} time The current time, in milliseconds.
  // * @param {number} diff The difference between the previous time and the current time, in milliseconds.
  // * @override
  // */
  // public clear(canvasContext, time, diff) {
  //   canvasContext.clearRect(
  //     this.getLastX() * this.getScreenScaleX() - 1,
  //     this.getLastY() * this.getScreenScaleY() - 1,
  //     this.getLastWidth() * this.getTotalScaleX() + 2,
  //     this.getHeight() * this.getTotalScaleY() + 2 );
  //   this._lastWidth = null;
  // }

/* Render this element.
* @param {number} time The current time, in milliseconds.
* @param {number} diff The difference between the previous time and the current time, in milliseconds.
* @override
*/
public override render(canvasContext: CanvasContextWrapper, time: number, diff: number) {
  if (!this.isHidden() && this.isDirty()) {
    if (this._text) {
      this._characterRenderer.renderString(
        canvasContext,
        this._text,
        this.getScaledX(),
        this.getScaledY(),
        this._color,
        this._backgroundColor,
        this.getTotalScaleX(),
        this.getTotalScaleY()
      );
    } else {
      this._characterRenderer.renderSymbol(
        canvasContext,
        this._symbolName,
        this.getScaledX(),
        this.getScaledY(),
        this._color,
        this._backgroundColor,
        this.getTotalScaleX(),
        this.getTotalScaleY()
      );
    }
  }
}

  public getLength() {
    return this._text ? this._text.length : 1;
  }

}