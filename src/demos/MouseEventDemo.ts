import { EventType, GfxLayer, ILayerProps, SLGfxMouseEvent } from "@shaunlusk/slgfx";
import { Color } from "../Color";
import { PixPath } from "../PixPath";
import { PixSprite } from "../PixSprite";
import { PixSpriteFrame } from "../PixSpriteFrame";
import { ITextLayerProps, TextLayer } from "../TextLayer";
import { BaseDemo, IBaseDemoProps } from "./BaseDemo";

const pixPathArray1 = [
  new PixPath(3, 0, new Color("#A0A0FF")),
  new PixPath(4, 0, new Color("#A0A0FF")),
  new PixPath(2, 1, new Color("#A0A0FF")),
  new PixPath(3, 1, new Color("#A0A0FF")),
  new PixPath(4, 1, new Color("#A0A0FF")),
  new PixPath(5, 1, new Color("#A0A0FF")),
  new PixPath(1, 2, new Color("#A0A0FF")),
  new PixPath(2, 2, new Color("#A0A0FF")),
  new PixPath(5, 2, new Color("#A0A0FF")),
  new PixPath(6, 2, new Color("#A0A0FF")),
  new PixPath(0, 3, new Color("#A0A0FF")),
  new PixPath(1, 3, new Color("#A0A0FF")),
  new PixPath(6, 3, new Color("#A0A0FF")),
  new PixPath(7, 3, new Color("#A0A0FF")),
  new PixPath(0, 4, new Color("#A0A0FF")),
  new PixPath(1, 4, new Color("#A0A0FF")),
  new PixPath(6, 4, new Color("#A0A0FF")),
  new PixPath(7, 4, new Color("#A0A0FF")),
  new PixPath(1, 5, new Color("#A0A0FF")),
  new PixPath(2, 5, new Color("#A0A0FF")),
  new PixPath(5, 5, new Color("#A0A0FF")),
  new PixPath(6, 5, new Color("#A0A0FF")),
  new PixPath(2, 6, new Color("#A0A0FF")),
  new PixPath(3, 6, new Color("#A0A0FF")),
  new PixPath(4, 6, new Color("#A0A0FF")),
  new PixPath(5, 6, new Color("#A0A0FF")),
  new PixPath(3, 7, new Color("#A0A0FF")),
  new PixPath(4, 7, new Color("#A0A0FF"))
];
const pixPathArray2 = [
  new PixPath(3, 0, new Color("#A0A0FF")),
  new PixPath(4, 0, new Color("#A0A0FF")),
  new PixPath(2, 1, new Color("#A0A0FF")),
  new PixPath(3, 1, new Color("#A0A0FF")),
  new PixPath(4, 1, new Color("#A0A0FF")),
  new PixPath(5, 1, new Color("#A0A0FF")),
  new PixPath(1, 2, new Color("#A0A0FF")),
  new PixPath(2, 2, new Color("#A0A0FF")),
  new PixPath(5, 2, new Color("#A0A0FF")),
  new PixPath(6, 2, new Color("#A0A0FF")),
  new PixPath(0, 3, new Color("#A0A0FF")),
  new PixPath(1, 3, new Color("#A0A0FF")),
  new PixPath(3, 3, new Color("#A0FFA0")),
  new PixPath(4, 3, new Color("#A0FFA0")),
  new PixPath(6, 3, new Color("#A0A0FF")),
  new PixPath(7, 3, new Color("#A0A0FF")),
  new PixPath(0, 4, new Color("#A0A0FF")),
  new PixPath(1, 4, new Color("#A0A0FF")),
  new PixPath(3, 4, new Color("#A0FFA0")),
  new PixPath(4, 4, new Color("#A0FFA0")),
  new PixPath(6, 4, new Color("#A0A0FF")),
  new PixPath(7, 4, new Color("#A0A0FF")),
  new PixPath(1, 5, new Color("#A0A0FF")),
  new PixPath(2, 5, new Color("#A0A0FF")),
  new PixPath(5, 5, new Color("#A0A0FF")),
  new PixPath(6, 5, new Color("#A0A0FF")),
  new PixPath(2, 6, new Color("#A0A0FF")),
  new PixPath(3, 6, new Color("#A0A0FF")),
  new PixPath(4, 6, new Color("#A0A0FF")),
  new PixPath(5, 6, new Color("#A0A0FF")),
  new PixPath(3, 7, new Color("#A0A0FF")),
  new PixPath(4, 7, new Color("#A0A0FF"))
];
const pixPathArray3 = [
  new PixPath(3, 0, new Color("#60FFFF")),
  new PixPath(4, 0, new Color("#60FFFF")),
  new PixPath(2, 1, new Color("#60FFFF")),
  new PixPath(3, 1, new Color("#60FFFF")),
  new PixPath(4, 1, new Color("#60FFFF")),
  new PixPath(5, 1, new Color("#60FFFF")),
  new PixPath(1, 2, new Color("#60FFFF")),
  new PixPath(2, 2, new Color("#60FFFF")),
  new PixPath(5, 2, new Color("#60FFFF")),
  new PixPath(6, 2, new Color("#60FFFF")),
  new PixPath(0, 3, new Color("#60FFFF")),
  new PixPath(1, 3, new Color("#60FFFF")),
  new PixPath(6, 3, new Color("#60FFFF")),
  new PixPath(7, 3, new Color("#60FFFF")),
  new PixPath(0, 4, new Color("#60FFFF")),
  new PixPath(1, 4, new Color("#60FFFF")),
  new PixPath(6, 4, new Color("#60FFFF")),
  new PixPath(7, 4, new Color("#60FFFF")),
  new PixPath(1, 5, new Color("#60FFFF")),
  new PixPath(2, 5, new Color("#60FFFF")),
  new PixPath(5, 5, new Color("#60FFFF")),
  new PixPath(6, 5, new Color("#60FFFF")),
  new PixPath(2, 6, new Color("#60FFFF")),
  new PixPath(3, 6, new Color("#60FFFF")),
  new PixPath(4, 6, new Color("#60FFFF")),
  new PixPath(5, 6, new Color("#60FFFF")),
  new PixPath(3, 7, new Color("#60FFFF")),
  new PixPath(4, 7, new Color("#60FFFF"))
];
const pixPathArray4 = [
  new PixPath(3, 0, new Color("#60FFFF")),
  new PixPath(4, 0, new Color("#60FFFF")),
  new PixPath(2, 1, new Color("#60FFFF")),
  new PixPath(3, 1, new Color("#60FFFF")),
  new PixPath(4, 1, new Color("#60FFFF")),
  new PixPath(5, 1, new Color("#60FFFF")),
  new PixPath(1, 2, new Color("#60FFFF")),
  new PixPath(2, 2, new Color("#60FFFF")),
  new PixPath(5, 2, new Color("#60FFFF")),
  new PixPath(6, 2, new Color("#60FFFF")),
  new PixPath(0, 3, new Color("#60FFFF")),
  new PixPath(1, 3, new Color("#60FFFF")),
  new PixPath(3, 3, Color.RED),
  new PixPath(4, 3, Color.RED),
  new PixPath(6, 3, new Color("#60FFFF")),
  new PixPath(7, 3, new Color("#60FFFF")),
  new PixPath(0, 4, new Color("#60FFFF")),
  new PixPath(1, 4, new Color("#60FFFF")),
  new PixPath(3, 4, Color.RED),
  new PixPath(4, 4, Color.RED),
  new PixPath(6, 4, new Color("#60FFFF")),
  new PixPath(7, 4, new Color("#60FFFF")),
  new PixPath(1, 5, new Color("#60FFFF")),
  new PixPath(2, 5, new Color("#60FFFF")),
  new PixPath(5, 5, new Color("#60FFFF")),
  new PixPath(6, 5, new Color("#60FFFF")),
  new PixPath(2, 6, new Color("#60FFFF")),
  new PixPath(3, 6, new Color("#60FFFF")),
  new PixPath(4, 6, new Color("#60FFFF")),
  new PixPath(5, 6, new Color("#60FFFF")),
  new PixPath(3, 7, new Color("#60FFFF")),
  new PixPath(4, 7, new Color("#60FFFF"))
];

export class MouseEventDemo extends BaseDemo {
  private _dragOn: boolean;
  private _xOffset: number;
  private _yOffset: number;
  private _textLayer: TextLayer;
  private _sprite1: PixSprite;
  private _sprite2: PixSprite;
  private _mouseIsOver: boolean;

  constructor(props: IBaseDemoProps) {
    const rows = 25;
    const cols = 40;
    const scaleX = 2;
    const scaleY = 2;
    const superProps = {
      ...props,
      scaleX,
      scaleY,
      rows,
      cols
    };

    super(superProps);
    this._dragOn = false;
    this._xOffset = 0;
    this._yOffset = 0;
    this._mouseIsOver = false;
    this._textLayer = this.panel.createLayer<TextLayer, ITextLayerProps>("TextLayer", {
      scaleX: scaleX,
      scaleY: scaleY
    });

    this._textLayer.writeText("Try clicking and dragging", 4, 1, Color.LIGHTBLUE);
    this._textLayer.writeText("the PixSprite.", 4, 2, Color.LIGHTBLUE);

    this._textLayer.writeText("Mouse X:", 1, 19, Color.LIGHTBLUE);
    this._textLayer.writeText("Mouse Y:", 1, 20, Color.LIGHTBLUE);
    this._textLayer.writeText("Mouse Column:", 1, 21, Color.LIGHTBLUE);
    this._textLayer.writeText("Mouse Row:", 1, 22, Color.LIGHTBLUE);
    this._textLayer.writeText("Mouse Over Element?", 1, 23, Color.LIGHTBLUE);

    const gfxLayer = this.panel.createLayer<GfxLayer, ILayerProps>("GfxLayer");

    this._sprite1 = new PixSprite({
      x:10, y:10,
      scaleX:2, scaleY:2,
      frames:[
        new PixSpriteFrame(pixPathArray1, 400),
        new PixSpriteFrame(pixPathArray2, 400),
      ],
      gfxPanel: this.panel
    });
    this._sprite2 = new PixSprite({
      x:10, y:10,
      scaleX:2, scaleY:2,
      hidden:true,
      frames:[
        new PixSpriteFrame(pixPathArray3, 400),
        new PixSpriteFrame(pixPathArray4, 400),
      ],
      gfxPanel: this.panel
    });
    gfxLayer.addElement(this._sprite1);
    gfxLayer.addElement(this._sprite2);

    this.panel.on(EventType.MOUSE_DOWN_ON_ELEMENT, event => {
      this._dragOn = true;
      this._xOffset = event.data.x - this._sprite1.getX();
      this._yOffset = event.data.y - this._sprite1.getY();
      this._sprite1.hide();
      this._sprite2.show();
    });
    this.panel.on(EventType.MOUSE_UP, event => {
      this._dragOn = false;
    });

    this.panel.on(EventType.MOUSE_UP_ON_ELEMENT, event => {
      this._dragOn = false;
      this._sprite2.hide();
      this._sprite1.show();
    });
    this.panel.on(EventType.MOUSE_MOVE, event => {
      this.updateMouseStats(event as SLGfxMouseEvent);
      if (this._dragOn) {
        this._sprite2.setX(event.data.x - this._xOffset);
        this._sprite2.setY(event.data.y - this._yOffset);
        this._sprite1.setX(event.data.x - this._xOffset);
        this._sprite1.setY(event.data.y - this._yOffset);
      }
    });
    this.panel.on(EventType.MOUSE_ENTER_ELEMENT, event => {
      this._mouseIsOver = true;
    });
    this.panel.on(EventType.MOUSE_EXIT_ELEMENT, event => {
      this._mouseIsOver = false;
    });
    
    this.panel.render();
  }

  private dump() {
    console.log("x:", this._sprite1.getX(), "; y:",this._sprite1.getY(), "; width:", this._sprite1.getWidth(), "; height;",this._sprite1.getHeight());
    console.log("cboxx:",this._sprite1.getCollisionBoxX(),"; cboxy:",this._sprite1.getCollisionBoxY(), "; cboxwidth:", this._sprite1.getCollisionBoxWidth(), "; cboxheight;",this._sprite1.getCollisionBoxHeight());
  }

  private updateMouseStats(event: SLGfxMouseEvent) {
    this._textLayer.clearLength(15,19,4);
    this._textLayer.writeText(event.data.x.toString(), 15,19, Color.LIGHTGREEN);
    this._textLayer.clearLength(15,20,4);
    this._textLayer.writeText(event.data.y.toString(), 15,20, Color.LIGHTGREEN);
    this._textLayer.clearLength(15,21,4);
    this._textLayer.writeText(event.data.col.toString(), 15,21, Color.LIGHTGREEN);
    this._textLayer.clearLength(15,22,4);
    this._textLayer.writeText(event.data.row.toString(), 15,22, Color.LIGHTGREEN);
    this._textLayer.clearLength(21,23,6);
    this._textLayer.writeText(this._mouseIsOver.toString(), 21,23, Color.LIGHTGREEN);
  }
}
