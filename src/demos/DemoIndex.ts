import { GfxLayer, ILayerProps } from "@shaunlusk/slgfx";
import { Color } from "../Color";
import { CELLHEIGHT, CELLWIDTH } from "../Constants";
import { ITextLayerProps, TextLayer } from "../TextLayer";
import { TextLink } from "../TextLink";
import { BaseDemo, IBaseDemoProps } from "./BaseDemo";

export class DemoIndex extends BaseDemo {
  constructor(props: IBaseDemoProps) {
    const rows = 28;
    const cols = 40;
    const scaleX = 2;
    const scaleY = 2;
    const superProps = {
      ...props,
      rows,
      cols,
      scaleX,
      scaleY
    };
    super(superProps);

    const textLayer = this.panel.createLayer<TextLayer, ITextLayerProps>("TextLayer", {
      scaleX,
      scaleY
    });

    const gfxLayer =  this.panel.createLayer<GfxLayer, ILayerProps>("GfxLayer");
    this.panel.render();

    textLayer.writeText("C64Style Demos", 1, 1, Color.WHITE, Color.BLUE);

    let element = new TextLink({
      x: 1 * CELLWIDTH, 
      y: 4 * CELLHEIGHT,
      text: "Text Demo",
      color: Color.LIGHTGREEN,
      backgroundColor: Color.BLUE,
      mouseOverColor: Color.GREEN,
      mouseOverBackgroundColor: Color.BLACK,
      href:"TextDemo.html",
      gfxPanel: this.panel
    });
    gfxLayer.addElement(element);

    element = new TextLink({
      x:1 * CELLWIDTH, y:6 * CELLHEIGHT,
      text:"Text Element Demo",
      color:Color.LIGHTGREEN,
      backgroundColor:Color.BLUE,
      mouseOverColor: Color.GREEN,
      mouseOverBackgroundColor: Color.BLACK,
      href:"TextElementDemo.html",
      gfxPanel: this.panel
    });
    gfxLayer.addElement(element);

    element = new TextLink({
      x:1 * CELLWIDTH, y:8 * CELLHEIGHT,
      text:"Confetti",
      color:Color.LIGHTGREEN,
      backgroundColor:Color.BLUE,
      mouseOverColor: Color.GREEN,
      mouseOverBackgroundColor: Color.BLACK,
      href:"Confetti.html",
      gfxPanel: this.panel
    });
    gfxLayer.addElement(element);

    element = new TextLink({
      x:1 * CELLWIDTH, y:10 * CELLHEIGHT,
      text:"Image Sprite Demo",
      color:Color.LIGHTGREEN,
      backgroundColor:Color.BLUE,
      mouseOverColor: Color.GREEN,
      mouseOverBackgroundColor: Color.BLACK,
      href:"ImageSpriteDemo.html",
      gfxPanel: this.panel
    });
    gfxLayer.addElement(element);

    element = new TextLink({
      x:1 * CELLWIDTH, y:12 * CELLHEIGHT,
      text:"Palette Demo 1",
      color:Color.LIGHTGREEN,
      backgroundColor:Color.BLUE,
      mouseOverColor: Color.GREEN,
      mouseOverBackgroundColor: Color.BLACK,
      href:"PaletteDemo.html",
      gfxPanel: this.panel
    });
    gfxLayer.addElement(element);

    element = new TextLink({
      x:1 * CELLWIDTH, y:14 * CELLHEIGHT,
      text:"Palette Demo 2",
      color:Color.LIGHTGREEN,
      backgroundColor:Color.BLUE,
      mouseOverColor: Color.GREEN,
      mouseOverBackgroundColor: Color.BLACK,
      href:"PaletteDemo2.html",
      gfxPanel: this.panel
    });
    gfxLayer.addElement(element);

    element = new TextLink({
      x:1 * CELLWIDTH, y:16 * CELLHEIGHT,
      text:"Mouse Event Demo",
      color:Color.LIGHTGREEN,
      backgroundColor:Color.BLUE,
      mouseOverColor: Color.GREEN,
      mouseOverBackgroundColor: Color.BLACK,
      href:"MouseEventDemo.html",
      gfxPanel: this.panel
    });
    gfxLayer.addElement(element);

    element = new TextLink({
      x:1 * CELLWIDTH, y:18 * CELLHEIGHT,
      text:"Text Prompt Demo",
      color:Color.LIGHTGREEN,
      backgroundColor:Color.BLUE,
      mouseOverColor: Color.GREEN,
      mouseOverBackgroundColor: Color.BLACK,
      href:"TextPromptDemo.html",
      gfxPanel: this.panel
    });
    gfxLayer.addElement(element);

    element = new TextLink({
      x:1 * CELLWIDTH, y:20 * CELLHEIGHT,
      text:"Tutorial - Alien Invasion",
      color:Color.LIGHTGREEN,
      backgroundColor:Color.BLUE,
      mouseOverColor: Color.GREEN,
      mouseOverBackgroundColor: Color.BLACK,
      href:"invaders.html",
      gfxPanel: this.panel
    });
    gfxLayer.addElement(element);

    if (new Date().getMonth() === 11) {
      element = new TextLink({
        x:1 * CELLWIDTH, y:22 * CELLHEIGHT,
        text:"Christmas Demo",
        color:Color.LIGHTGREEN,
        backgroundColor:Color.BLUE,
        mouseOverColor: Color.GREEN,
        mouseOverBackgroundColor: Color.BLACK,
        href:"ChristmasDemo.html",
        gfxPanel: this.panel
      });
      gfxLayer.addElement(element);
    }

    element = new TextLink({
      x:1 * CELLWIDTH, y:25 * CELLHEIGHT,
      text:"Back to Main Index",
      color:Color.LIGHTGREEN,
      backgroundColor:Color.BLUE,
      mouseOverColor: Color.GREEN,
      mouseOverBackgroundColor: Color.BLACK,
      href:"../index.html",
      gfxPanel: this.panel
    });
    gfxLayer.addElement(element);
  }
}