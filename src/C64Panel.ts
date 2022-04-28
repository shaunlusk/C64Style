import { EventManager } from "@shaunlusk/slcommon";
import { GfxPanel, IGfxPanelProps, ILayerFactory } from "@shaunlusk/slgfx";
import { C64MouseEventData } from "./C64MouseEvent";
import { Color, IColor } from "./Color";
import { CELLHEIGHT, CELLWIDTH } from "./Constants";
import { LayerFactory } from "./LayerFactoryExtensions";

export interface IC64PanelProps {
  cols?: number;
  rows?: number;
  borderSize?: number;

  targetElement: HTMLElement;
  layerFactory?: ILayerFactory;
  scaleX?: number;
  scaleY?: number;
  fpsElement?: HTMLElement;
  imageSmoothingEnabled?: boolean;
  useMouseMoveEvents?: boolean;
  backgroundColor?: IColor | string;
  borderColor?: IColor | string;
  eventManager?: EventManager;
  requestAnimationFrame?: () => void;
  document?: Document;
}

/** The Panel is the overriding container for all C64Style components.
* The Panel orchestrates updating and rendering its layers, propagates
* mouse events down to the layers, and notifies event listeners when events occur.
* @class
* @param {Object} props Properties
* @param {HTMLElement} props.targetDiv The target HTMLElement into which the panel and its layers will be built.
* @param {LayerFactory} [props.layerFactory=LayerFactory] The layer factory to use to create layers.  Defaults to LayerFactory.
* @param {int} [props.scaleX=1] The horizontal scale of the panel.
* @param {int} [props.scaleY=1] The vertical scale of the panel.
* @param {HTMLElement} [props.fpsElem] Optional. An HTMLElement to write Frames-per-second information to.
* @param {boolean} [props.imageSmoothingEnabled=false] Whether to use image smoothing on child canvases.
* @param {boolean} [props.useMouseMoveEvents=true] Whether to listen for mouseevents on this panel.
* @param {number} [props.borderSize=20] The size of the border.
* @param {function} [props.requestAnimationFrame=window.requestAnimationFrame] A function that regulates render rate.  Uses window.requestAnimationFrame by default.
* @param {int} [props.cols=40] The number of columns for the panel.  Width will be sized accordingly: cols * {@link CELLWIDTH}.  Default: 40
* @param {int} [props.rows=25] The number of rows for the panel.  Width will be sized accordingly: cols * {@link CELLHEIGHT}.  Default: 25
* @param {string} [props.backgroundColor=Color.BLUE] The color to set the panel background to. Default: Color.BLUE
* @param {string} [props.borderColor=Color.LIGHTBLUE] The color to set the panel border to. Default: Color.LIGHTBLUE
*/
export class C64Panel extends GfxPanel {
  private _cols: number;
  private _rows: number;
  private _mouseRow: number;
  private _mouseCol: number;

  constructor(props: IC64PanelProps) {
    const cols = props.cols || 40;
    const rows = props.rows || 25;
    const backgroundIColor = props.backgroundColor as IColor;
    const backgroundColor: string = (backgroundIColor ? backgroundIColor.value : props.backgroundColor ? props.backgroundColor as string : Color.BLUE.value);
    const borderIColor = props.borderColor as IColor;
    const borderColor: string = (borderIColor ? borderIColor.value : props.borderColor ? props.borderColor as string : Color.LIGHTBLUE.value);
    const gfxPanelProps: IGfxPanelProps = {
      targetElement: props.targetElement,
      layerFactory: props.layerFactory || new LayerFactory(),
      scaleX: props.scaleX,
      scaleY: props.scaleY,
      width: cols * CELLWIDTH,
      height: rows * CELLHEIGHT,
      fpsElement: props.fpsElement,
      imageSmoothingEnabled: props.imageSmoothingEnabled,
      useMouseMoveEvents: props.useMouseMoveEvents,
      backgroundColor,
      borderColor,
      borderSize: props.borderSize || 20,
      eventManager: props.eventManager,
      requestAnimationFrame: props.requestAnimationFrame,
      document: props.document
    };

    super(gfxPanelProps);
    
    this._cols = cols;
    this._rows = rows;

    this._mouseRow = -1;
    this._mouseCol = -1;

  }

  /** Return the number of rows.
  * @returns {integer}
  */
  public getRows() {return this._rows;}

  /** Return the number of columns.
  * @returns {integer}
  */
   public getCols() {return this._cols;}

  /** Return the current row coordinate of the mouse.
  * @returns {integer}
  */
   public getMouseRow() {return this._mouseRow;}

  /** Return the current column coordinate of the mouse.
  * @returns {integer}
  */
   public getMouseCol() {return this._mouseCol;}

  /** @protected
  */
  protected override _getDataForMouseEvent(scaledX: number, scaledY: number) {
    const data = super._getDataForMouseEvent(scaledX, scaledY);
    const c64Data: C64MouseEventData = {
      ...data,
      col: this._xToColumnFromMouseEvent(data.x),
      row: this._yToRowFromMouseEvent(data.y)
    }
    return c64Data;
  }

  /** Return the column coordinate from a given X. Factors in Panel scale and view origin.
  * @param {int} x The x coordinate from the event.
  */
  public xToColumn(x: number) {
    return Math.floor((x - this.getViewOriginX()) / (CELLWIDTH * this.getScaleX()));
  }

  /** Return the row coordinate from a given y. Factors in Panel scale and view origin.
  * @param {int} y The y coordinate from the event.
  */
  public yToRow(y: number) {
    return Math.floor((y - this.getViewOriginY()) / (CELLHEIGHT * this.getScaleY()));
  }

  /** Assumes scale and view origin have already been factored out.
  * @private
  */
  private _xToColumnFromMouseEvent(x: number) {
    return Math.floor(x / CELLWIDTH);
  }

  /** Assumes scale and view origin have already been factored out.
  * @private
  */
  private _yToRowFromMouseEvent(y: number) {
    return Math.floor(y / CELLHEIGHT);
  }

}
