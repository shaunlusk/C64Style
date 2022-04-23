import { EventType, GfxLayer, ILayerProps } from "@shaunlusk/slgfx";
import { C64Panel } from "../C64Panel";
import { Color } from "../Color";
import { TextElement } from "../TextElement";
import { BaseDemo, IBaseDemoProps } from "./BaseDemo";

export class TextElementDemo extends BaseDemo {
  constructor(props: IBaseDemoProps) {
    super(props);

    const gfxLayer = this.panel.createLayer<GfxLayer, ILayerProps>("GfxLayer");

    const element = new TextElement({
      text:"Regular Text",
      color: Color.LIGHTBLUE,
      backgroundColor: Color.BLUE,
      gfxPanel: this.panel
    });
    element.setX(10);
    element.setY(10);
    element.setMoveRates(25, 10);
    gfxLayer.addElement(element);

    const element2 = new TextElement({
      scaleX:2,
      scaleY:2,
      text:"SCALED TEXT!",
      color: Color.GREEN,
      backgroundColor: Color.BLACK,
      gfxPanel: this.panel
    });
    element2.setX(20);
    element2.setY(20);
    element2.setMoveRates(35, 20);
    gfxLayer.addElement(element2);

    const element3 = new TextElement({
      scaleX:2,
      scaleY:2,
      symbolName:"HEART",
      color: Color.RED,
      backgroundColor: Color.PINK,
      gfxPanel: this.panel
    });
    element3.setX(50);
    element3.setY(50);
    element3.setMoveRates(20,20);
    gfxLayer.addElement(element3);

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

}