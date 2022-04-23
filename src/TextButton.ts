import { CanvasContextWrapper } from "@shaunlusk/slgfx";
import { IColor } from "./Color";
import { CELLHEIGHT, CELLWIDTH } from "./Constants";
import { ITextLinkProps, TextLink } from "./TextLink";

export interface ITextButtonProps extends ITextLinkProps {
  buttonColor?: IColor;
  textColor?: IColor;
  highlightButtonColor?: IColor;
  highlightTextColor?: IColor;
}

/** Provides a clickable button link.
* @constructor
* @augments TextLink
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
* @param {function} [props.onClick] An optional function to call when the link is clicked.
* @param {string} [props.href] The location to navigate to when the link is clicked.
* @param {boolean} [props.newWindow] Whether to open the new location in a new window or not.
* @param {Color} [props.buttonColor=props.color] The text color to display when the mouse is over this element.
* @param {Color} [props.textColor=props.color] The text backgroundColor to display when the mouse is over this element.
* @param {Color} [props.highlightButtonColor=props.color] The color to draw the button border and to highlight the button with when the mouse is over.
* @param {Color} [props.highlightTextColor=props.backgroundColor] The color to draw the button text.
*/
export class TextButton extends TextLink {
  private _buttonColor: IColor;
  private _textColor: IColor;
  private _highlightButtonColor: IColor;
  private _highlightTextColor: IColor;

  constructor (props: ITextButtonProps) {
    super(props);

    this._buttonColor = props.buttonColor || this.getColor();
    this._textColor = props.textColor || this.getColor();

    this._highlightButtonColor = props.highlightButtonColor || this.getColor();
    this._highlightTextColor = props.highlightTextColor || this.getBackgroundColor();

    this._height = CELLHEIGHT * 3;
  }

  /** @private  */
  protected override _setWidth() {
    this._lastWidth = this._width;
    this._width = CELLWIDTH * ((this._text ? this._text.length : 1) + 2);
  }

  /** Render this element.
  * @param {number} time The current time, in milliseconds.
  * @param {number} diff The difference between the previous time and the current time, in milliseconds.
  * @override
  */
  public override render(canvasContext: CanvasContextWrapper, time: number, diff: number) {
    if (!this.isHidden() && this.isDirty()) {
      this.drawTextButton(canvasContext);
    }
  }

  /** @private */
  private drawTextButton(canvasContext: CanvasContextWrapper) {
    const x = this.getX() * this.getPanelScaleX();
    const y = this.getY() * this.getPanelScaleY();
    const scaledCellWidth = CELLWIDTH * this.getTotalScaleX();
    const scaledCellHeight = CELLHEIGHT * this.getTotalScaleY();
    let edgeX = x + scaledCellWidth;
    const rightEdge = x + (this.getLength() * scaledCellWidth) + scaledCellWidth;
    const characterRenderer = this.getCharacterRenderer();

    if (this.isMouseOver()) {
      for ( ; edgeX < rightEdge; edgeX += scaledCellWidth) {
        characterRenderer.renderSymbol(canvasContext, "BAR_120", edgeX, y,  this.getBackgroundColor(), this._highlightButtonColor, this.getTotalScaleX(),this.getTotalScaleY());
        characterRenderer.renderSymbol(canvasContext, "BAR_121", edgeX, y + 2 * scaledCellHeight, this.getBackgroundColor(), this._highlightButtonColor, this.getTotalScaleX(),this.getTotalScaleY());
      }
      characterRenderer.renderSymbol(canvasContext, "PIPE_117", x, y + scaledCellHeight, this.getBackgroundColor(), this._highlightButtonColor, this.getTotalScaleX(),this.getTotalScaleY());
      characterRenderer.renderSymbol(canvasContext, "PIPE_118", rightEdge, y + scaledCellHeight, this.getBackgroundColor(), this._highlightButtonColor, this.getTotalScaleX(),this.getTotalScaleY());

      characterRenderer.renderSymbol(canvasContext, "ROUNDED_CORNER_FILLED_TOP_LEFT", x, y, this._highlightButtonColor, this.getBackgroundColor(), this.getTotalScaleX(),this.getTotalScaleY());
      characterRenderer.renderSymbol(canvasContext, "ROUNDED_CORNER_FILLED_TOP_RIGHT", rightEdge, y, this._highlightButtonColor, this.getBackgroundColor(), this.getTotalScaleX(),this.getTotalScaleY());
      characterRenderer.renderSymbol(canvasContext, "ROUNDED_CORNER_FILLED_BOTTOM_LEFT", x, y + 2 * scaledCellHeight, this._highlightButtonColor, this.getBackgroundColor(), this.getTotalScaleX(),this.getTotalScaleY());
      characterRenderer.renderSymbol(canvasContext, "ROUNDED_CORNER_FILLED_BOTTOM_RIGHT", rightEdge, y + 2 * scaledCellHeight, this._highlightButtonColor, this.getBackgroundColor(), this.getTotalScaleX(),this.getTotalScaleY());

      if (this.getText()) {
        characterRenderer.renderString(canvasContext, this.getText(), this.getTextX(), this.getTextY(), this._highlightTextColor, this._highlightButtonColor, this.getTotalScaleX(),this.getTotalScaleY());
      } else {
      characterRenderer.renderSymbol(canvasContext, this.getSymbolName(), this.getTextX(), this.getTextY(), this._highlightTextColor, this._highlightButtonColor, this.getTotalScaleX(),this.getTotalScaleY());
      }
    } else {
      for ( ; edgeX < rightEdge; edgeX += scaledCellWidth) {
        characterRenderer.renderSymbol(canvasContext, "BAR", edgeX, y, this._buttonColor, this.getBackgroundColor(), this.getTotalScaleX(),this.getTotalScaleY());
        characterRenderer.renderSymbol(canvasContext, "BAR", edgeX, y + 2 * scaledCellHeight, this._buttonColor, this.getBackgroundColor(), this.getTotalScaleX(),this.getTotalScaleY());
      }
      characterRenderer.renderSymbol(canvasContext, "|", x, y + scaledCellHeight, this._buttonColor, this.getBackgroundColor(), this.getTotalScaleX(),this.getTotalScaleY());
      characterRenderer.renderSymbol(canvasContext, "|", rightEdge, y + scaledCellHeight, this._buttonColor, this.getBackgroundColor(), this.getTotalScaleX(),this.getTotalScaleY());

      characterRenderer.renderSymbol(canvasContext, "ROUNDED_CORNER_TOP_LEFT", x, y, this._buttonColor, this.getBackgroundColor(), this.getTotalScaleX(),this.getTotalScaleY());
      characterRenderer.renderSymbol(canvasContext, "ROUNDED_CORNER_TOP_RIGHT", rightEdge, y, this._buttonColor, this.getBackgroundColor(), this.getTotalScaleX(),this.getTotalScaleY());
      characterRenderer.renderSymbol(canvasContext, "ROUNDED_CORNER_BOTTOM_LEFT", x, y + 2 * scaledCellHeight, this._buttonColor, this.getBackgroundColor(), this.getTotalScaleX(),this.getTotalScaleY());
      characterRenderer.renderSymbol(canvasContext, "ROUNDED_CORNER_BOTTOM_RIGHT", rightEdge, y + 2 * scaledCellHeight, this._buttonColor, this.getBackgroundColor(), this.getTotalScaleX(),this.getTotalScaleY());

      if (this.getText()) {
        characterRenderer.renderString(canvasContext, this.getText(), this.getTextX(), this.getTextY(), this._textColor, this.getBackgroundColor(), this.getTotalScaleX(),this.getTotalScaleY());
      } else {
        characterRenderer.renderSymbol(canvasContext, this.getSymbolName(), this.getTextX(), this.getTextY(), this._textColor, this.getBackgroundColor(), this.getTotalScaleX(),this.getTotalScaleY());
      }
    }
  }

  /** @private  */
  private getTextX() {
    return this.getX() * this.getPanelScaleX() + CELLWIDTH * this.getTotalScaleX();
  }

  /** @private  */
  private getTextY() {
    return this.getY() * this.getPanelScaleY() + CELLHEIGHT * this.getTotalScaleY();
  }

}
