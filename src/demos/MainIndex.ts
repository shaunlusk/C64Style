import { GfxLayer, ILayerProps } from "@shaunlusk/slgfx";
import { Color } from "../Color";
import { CELLHEIGHT, CELLWIDTH } from "../Constants";
import { TextButton } from "../TextButton";
import { ITextLayerProps, TextLayer } from "../TextLayer";
import { TextLink } from "../TextLink";
import { BaseDemo, IBaseDemoProps } from "./BaseDemo";

const config = {
  targetElement: document.getElementById("content"),
  rows: 28,
  cols: 40,
  scaleX: 2,
  scaleY: 2
};

export class MainIndex extends BaseDemo {

  constructor() {
    super(config);

    const textLayer = this.panel.createLayer<TextLayer, ITextLayerProps>("TextLayer", {
      scaleX:config.scaleX,
      scaleY:config.scaleY
    });

    const gfxLayer = this.panel.createLayer<GfxLayer, ILayerProps>("GfxLayer");

    this.panel.render();

    let element = new TextButton({
      gfxPanel: this.panel,
      x: 9.5 * CELLWIDTH,
      y: 7 * CELLHEIGHT,
      text: "Download Bundle.JS",
      backgroundColor: Color.BLUE,
      color: Color.LIGHTBLUE,
      textColor: Color.LIGHTBLUE,
      highlightButtonColor: Color.LIGHTBLUE,
      highlightTextColor: Color.BLUE,
      href: "https://shaunlusk.github.io/C64Style/dist/bundle.js",
      newWindow: true
    });
    gfxLayer.addElement(element);

    element = new TextButton({
      gfxPanel: this.panel,
      x:11 * CELLWIDTH + 4,
      y:10 * CELLHEIGHT,
      text:"View On GitHub",
      backgroundColor:Color.BLUE,
      color : Color.LIGHTBLUE,
      textColor : Color.LIGHTBLUE,
      highlightButtonColor : Color.LIGHTBLUE,
      highlightTextColor : Color.BLUE,
      href:"https://github.com/shaunlusk/C64Style",
      newWindow : true
    });
    gfxLayer.addElement(element);

    element = new TextButton({
      gfxPanel: this.panel,      
      x:12 * CELLWIDTH,
      y:13 * CELLHEIGHT,
      text:"Documentation",
      backgroundColor:Color.BLUE,
      color : Color.LIGHTBLUE,
      textColor : Color.LIGHTBLUE,
      highlightButtonColor : Color.LIGHTBLUE,
      highlightTextColor : Color.BLUE,
      href:"docs/index.html",
      newWindow : true
    });
    gfxLayer.addElement(element);

    element = new TextButton({
      gfxPanel: this.panel,      
      x:16 * CELLWIDTH,
      y:16 * CELLHEIGHT,
      text:"Tools",
      backgroundColor:Color.BLUE,
      color : Color.LIGHTBLUE,
      textColor : Color.LIGHTBLUE,
      highlightButtonColor : Color.LIGHTBLUE,
      highlightTextColor : Color.BLUE,
      href:"tools/index.html"
    });
    gfxLayer.addElement(element);

    element = new TextButton({
      gfxPanel: this.panel,      
      x:15 * CELLWIDTH + 4,
      y:19 * CELLHEIGHT,
      text:"Demos!",
      backgroundColor:Color.BLUE,
      color : Color.LIGHTBLUE,
      textColor : Color.LIGHTBLUE,
      highlightButtonColor : Color.LIGHTBLUE,
      highlightTextColor : Color.BLUE,
      href:"demos/index.html",
      onClick: function(e) {
        console.log(e);
      }
    });
    gfxLayer.addElement(element);

    element = new TextButton({
      gfxPanel: this.panel,      
      x:14 * CELLWIDTH + 4,
      y:22 * CELLHEIGHT,
      text:"Tutorial",
      backgroundColor:Color.BLUE,
      color : Color.LIGHTBLUE,
      textColor : Color.LIGHTBLUE,
      highlightButtonColor : Color.LIGHTBLUE,
      highlightTextColor : Color.BLUE,
      href:"demos/tutorial.html",
      onClick: function(e) {
        console.log(e);
      }
    });
    gfxLayer.addElement(element);

    textLayer.writeText("C64Style", 16, 1, Color.WHITE, Color.LIGHTBLUE);
    textLayer.writeText("A library for rendering Commodore 64", 1, 3, Color.LIGHTBLUE);
    textLayer.writeText("style graphics with JavaScript and ", 2, 4, Color.LIGHTBLUE);
    textLayer.writeText("HTML5 Canvas.", 13, 5, Color.LIGHTBLUE);
  
    textLayer.writeText("C64Style is maintained by", 1, 26, Color.LIGHTBLUE);

    const linkElement = new TextLink({
      gfxPanel: this.panel,
      
      x:27 * CELLWIDTH, y:26 * CELLHEIGHT,
      text:"shaunlusk",
      color:Color.LIGHTBLUE,
      backgroundColor:Color.BLUE,
      mouseOverColor: Color.BLUE,
      mouseOverBackgroundColor: Color.LIGHTBLUE,
      href:"https://github.com/shaunlusk",
      newWindow : true
    });
    gfxLayer.addElement(linkElement);
    
    for (var i = 0; i < "shaunlusk".length; i++) textLayer.drawSymbol("BAR_99", 27 + i, 27, Color.LIGHTBLUE);
  }

}
