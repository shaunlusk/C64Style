import { CELLWIDTH, CELLHEIGHT } from './Constants';
import { ILayerProps, Layer, SLGfxMouseEvent } from  '@shaunlusk/slgfx';
import { Color, IColor } from './Color';
import { ITextPrompt, TextPrompt } from './TextPrompt';
import { CharacterRenderer, ICharacterRenderer } from './CharacterRenderer';

export interface ITextLayerProps extends ILayerProps {
  characterRenderer: ICharacterRenderer,
  textPrompt?: ITextPrompt,
  scaleX?: number,
  scaleY?: number
}

interface PendingString {
  string?: string;
  pixMapId?: string;
  cellX: number;
  cellY: number;
  color?: IColor;
  backgroundColor?: IColor;
}

/** Text-only layer.<br />
* <b>Extends</b> [Layer]{@link https://shaunlusk.github.io/slgfx/docs/Layer.html}
* Generally, the use of C64Screen.createLayer("TextLayer") is preferred over creating layer by hand.
* @constructor
* @param {Object} props Properties
* @param {Screen} props.screenContext The parent screen.
* @param {CanvasContextWrapper} props.canvasContextWrapper The canvasContextWrapper. This layer will draw to the canvas' context, via wrapper's exposed methods.
* @param {number} props.width The width of the layer.  Should match Screen.
* @param {number} props.height The height of the layer.  Should match Screen.
* @param {ICharacterRenderer} [props.characterRenderer=new CharacterRenderer] The renderer to use to draw text.
*     This can be shared with a renderer for drawing text elements.  If a renderer is not provided,
*     This TextLayer will create a {@link CharacterRenderer}.
* @param {TextPrompt} [props.textPrompt=new TextPrompt] A text prompt for this layer.  If not provided,
*     a {@link TextPrompt} will be created.
* @param {function} [props.registerKeyHandler=window.document.addEventListener] A function to register a key handler with; this allows keystrokes to be sent to the default TextPrompt.
*     If not provided, window.document.addEventListener will be used.
* @param {integer} [props.scaleX=1] The horizontal scale.
* @param {integer} [props.scaleY=1] The vertical scale.
*/
export class TextLayer extends Layer {
  // TODO these aren't used??
  private _cx: number;
  private _cy: number;
  private _color: IColor;
  private _backgroundColor: IColor;
  private _characterRenderer: ICharacterRenderer;
  private _textPrompt: ITextPrompt;
  private _pendingTextStrings: PendingString[];
  private _scaleX: number;
  private _scaleY: number;
  private _scaledCellWidth: number;
  private _scaledCellHeight: number;
  
  constructor(props: ITextLayerProps) {
    super(props);
    this._scaleX = props.scaleX || 1;
    this._scaleY = props.scaleY || 1;
    this._cx = 0;
    this._cy = 0;
    this._color = Color.LIGHTBLUE;
    this._backgroundColor = Color.BLUE;
    this._characterRenderer = props.characterRenderer || new CharacterRenderer();
    this._textPrompt = props.textPrompt || new TextPrompt({
      parentLayer : this,
      registerKeyHandler: document.addEventListener.bind(window.document)
    });
    this._pendingTextStrings = [];
    this._scaledCellWidth = CELLWIDTH * this._scaleX;
    this._scaledCellHeight = CELLHEIGHT * this._scaleY;
  }

  /* Updates this layer.  Automatically called during screen update cycle.
  * @param {number} time The current time, in milliseconds.
  * @param {number} diff The difference between the previous time and the current time, in milliseconds.
  * @override
  */
  public update(time: number, diff: number) {
    this._textPrompt.update(time,diff);
  }

  /*
  * Renders this layer, drawing any new text that has been added since the last render cycle.
  * @override
  */
  public render() {
    var i, pendingString;

    this._textPrompt.render();

    // Clear pending string bounding boxes
    for (i = 0; i < this._pendingTextStrings.length; i++) {
      pendingString = this._pendingTextStrings[i];

      if (pendingString.string) {
        this.clearLength(pendingString.cellX, pendingString.cellY, pendingString.string.length);
      } else {
        this.clearLength(pendingString.cellX, pendingString.cellY);
      }
    }

    // write pending strings
    for (i = 0; i < this._pendingTextStrings.length; i++) {
      pendingString = this._pendingTextStrings[i];
      if (pendingString.string !== undefined && pendingString.string !== null) {
        this._characterRenderer.renderString(
          this.getCanvasContextWrapper(),
          pendingString.string,
          pendingString.cellX * this._scaledCellWidth,
          pendingString.cellY * this._scaledCellHeight,
          pendingString.color,
          pendingString.backgroundColor,
          this._scaleX,
          this._scaleY
        );
      } else {
        this._characterRenderer.renderSymbol(
          this.getCanvasContextWrapper(),
          pendingString.pixMapId,
          pendingString.cellX * this._scaledCellWidth,
          pendingString.cellY * this._scaledCellHeight,
          pendingString.color,
          pendingString.backgroundColor,
          this._scaleX,
          this._scaleY
        );
      }
    }

    this._pendingTextStrings = [];
  }

  /** Clears whole text cells, starting at the specified cellX and cellY, through cellX + length.
  * @param {integer} cellX The column number to start clearing.
  * @param {integer} cellY The row number to start clearing.
  * @param {integer} length The number of columns to clear.
  */
  public clearLength(cellX: number, cellY: number, length: number = 1) {
    this._characterRenderer.clearRect(
      this.getCanvasContextWrapper(),
      cellX * this._scaledCellWidth,
      cellY * this._scaledCellHeight,
      length,
      this._scaleX,
      this._scaleY
    );
  }

  /** Writes a text string to the layer.
  * @param {string} text The string to write.
  * @param {integer} cellX The column to start writing the text to.
  * @param {integer} cellY The row to start writing the text to.
  * @param {Color} color The color of the text.
  * @param {Color} backgroundColor The background color for the text.
  */
  public writeText(text: string, cellX: number, cellY: number, color: Color, backgroundColor?: Color) {
    this._pendingTextStrings.push({
      string: text.toString(),
      cellX: cellX,
      cellY: cellY,
      color: color,
      backgroundColor: backgroundColor
    });
  }

  /** Draws a single symbol to the layer.
  * @param {string} pixMapId The name of the symbol to draw, e.g. "BRITISH_POUND".  Refer to {@link CharacterMap} for symbol names.
  * @param {integer} cellX The column to write the symbol to.
  * @param {integer} cellY The row to write the syymbol to.
  * @param {Color} color The color of the symbol.
  * @param {Color} backgroundColor The background color for the symbol.
  */
  public drawSymbol(pixMapId: string, cellX: number, cellY: number, color: Color, backgroundColor?: Color) {
    this._pendingTextStrings.push({
      pixMapId: pixMapId,
      cellX: cellX,
      cellY: cellY,
      color: color,
      backgroundColor: backgroundColor
    });
  }

  /** Return the text prompt
  * @returns {TextPrompt}
  */
  public getTextPrompt() {return this._textPrompt;}

  /** Prompt the user for text input.
  * @param {string} prompt The text prompt to provide the user, e.g. "Enter your name:".
  * @param {integer} x The column to write the text prompt to.
  * @param {integer} y The row to write the text prompt to.
  * @param {Color} color The color for the text prompt.
  * @param {integer} maxLength The maximum allowed length for the input.
  * @param {function} callback The function to call when the user has hit the Enter key.
  *   The argument to the callback is the text the user entered.
  * @see TextPrompt
  */
  public prompt(prompt: string, x: number, y: number, color: Color, maxLength: number, callback: () => void) {
    return this._textPrompt.prompt(prompt, x, y, color, maxLength, callback);
  }

  /** Override clearLayer in base class: clear pending strings to prevent
  * rendering things the caller expects to be cleared.
  */
  public clearLayer() {
    Layer.prototype.clearLayer.call(this);
    this._pendingTextStrings = [];
  }

  handleMouseEvent(event: SLGfxMouseEvent): void {
    // todo
  }

}
