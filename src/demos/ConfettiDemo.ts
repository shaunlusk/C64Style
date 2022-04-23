import { EventType, GfxLayer, ILayerProps } from "@shaunlusk/slgfx";
import { Color } from "../Color";
import { ColorIndexedPixPath } from "../ColorIndexedPixPath";
import { ColorIndexedPixPathRectangle } from "../ColorIndexedPixPathRectangle";
import { CELLHEIGHT, CELLWIDTH } from "../Constants";
import { IPixPath } from "../IPixPath";
import { Palette } from "../Palette";
import { PixElement } from "../PixElement";
import { PixRenderer } from "../PixRenderer";
import { ITextLayerProps, TextLayer } from "../TextLayer";
import { BaseDemo, IBaseDemoProps } from "./BaseDemo";

const pixPathArray: IPixPath[] = [
  new ColorIndexedPixPathRectangle(1, 5, 1, 6, 0),
  new ColorIndexedPixPathRectangle(5, 1, 6, 1, 0),
  new ColorIndexedPixPathRectangle(5, 14, 6, 1, 0),
  new ColorIndexedPixPathRectangle(14, 5, 1, 6, 0),

  new ColorIndexedPixPath(2, 4, 0),
  new ColorIndexedPixPath(3, 3, 0),
  new ColorIndexedPixPath(4, 2, 0),

  new ColorIndexedPixPath(11, 2, 0),
  new ColorIndexedPixPath(12, 3, 0),
  new ColorIndexedPixPath(13, 4, 0),

  new ColorIndexedPixPath(2, 11, 0),
  new ColorIndexedPixPath(3, 12, 0),
  new ColorIndexedPixPath(4, 13, 0),

  new ColorIndexedPixPath(11, 13, 0),
  new ColorIndexedPixPath(12, 12, 0),
  new ColorIndexedPixPath(13, 11, 0),

  new ColorIndexedPixPathRectangle(2, 5, 12, 6, 1),
  new ColorIndexedPixPathRectangle(5, 2, 6, 12, 1),
  new ColorIndexedPixPathRectangle(3, 4, 10, 8, 1),
  new ColorIndexedPixPathRectangle(4, 3, 8, 10, 1)
];

export class ConfettiDemo extends BaseDemo {
  private static moveRateMin = 3;
  private static moveRateMax = 300;

  constructor(props: IBaseDemoProps) {
    const rows = 50;
    const cols = 80;
    const superProps = {
      ...props,
      rows,
      cols
    };
    super(superProps);

    let element: PixElement;

    const xBounds = cols * CELLWIDTH - 16;
    const yBounds = rows * CELLHEIGHT - 16;
    
    const textLayer = this.panel.createLayer<TextLayer, ITextLayerProps>("TextLayer");
    textLayer.writeText("This is probably a bit more than C64 could have handled.",11,24, Color.WHITE);
    
    const gfxLayer = this.panel.createLayer<GfxLayer, ILayerProps>("GfxLayer");
    
    const pixRenderer = new PixRenderer();

    for (let i = 0; i < 600; i++) {
      const x = Math.floor(Math.random() * xBounds);
      const y = Math.floor(Math.random() * yBounds);
      element = new PixElement({
        pixPathArray : pixPathArray,
        defaultPalette : new Palette([
          Color.getByIndex(Math.floor(Math.random() * 16)),
          Color.getByIndex(Math.floor(Math.random() * 16))
        ]),
        gfxPanel: this.panel,
        pixRenderer
      });
      element.setX(x);
      element.setY(y);

      const xMoveRate = ConfettiDemo.getRandomMoveRate();
      const yMoveRate = ConfettiDemo.getRandomMoveRate();
      element.setMoveRates(xMoveRate, yMoveRate);

      gfxLayer.addElement(element);
    }
  
    this.panel.on(EventType.ELEMENT_HIT_LEFT_EDGE, function(event) {
      const element = event.data.element;
      element.setMoveRates(Math.abs(element.getMoveRateX()), element.getMoveRateY());
    });

    this.panel.on(EventType.ELEMENT_HIT_RIGHT_EDGE, function(event) {
      const element = event.data.element;
      element.setMoveRates(0 - Math.abs(element.getMoveRateX()), element.getMoveRateY());
    });

    this.panel.on(EventType.ELEMENT_HIT_TOP_EDGE, function(event) {
      const element = event.data.element;
      element.setMoveRates(element.getMoveRateX(), Math.abs(element.getMoveRateY()));
    });
  
    this.panel.on(EventType.ELEMENT_HIT_BOTTOM_EDGE, function(event) {
      const element = event.data.element;
      element.setMoveRates(element.getMoveRateX(), 0 - Math.abs(element.getMoveRateY()));
    });

    this.panel.render();
  }

  public static getRandomMoveRate() {
    let rate = Math.floor(Math.random() * (ConfettiDemo.moveRateMax - ConfettiDemo.moveRateMin)) + ConfettiDemo.moveRateMin;
    rate = Math.random() >= 0.5 ? rate : 0 - rate;
    return rate;
  }
  
}
  