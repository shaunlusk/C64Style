import { GfxLayer, ILayerProps } from "@shaunlusk/slgfx";
import { Color } from "../Color";
import { CELLHEIGHT, CELLWIDTH } from "../Constants";
import { TextElement } from "../TextElement";
import { ITextLayerProps, TextLayer } from "../TextLayer";
import { BaseDemo, IBaseDemoProps } from "./BaseDemo";

function isEven(n: number) {
  return n % 2 === 0;
}

export class ChristmasDemo extends BaseDemo {
  constructor(props: IBaseDemoProps) {
    const rows = 15;
    const cols = 22;
    const scaleX = 2;
    const scaleY = 2;
    const superProps: IBaseDemoProps = {
      ...props,
      rows,
      cols,
      scaleX,
      scaleY,
      backgroundColor: Color.BLACK,
      borderColor: Color.RED,
      borderSize: 35
    };

    super(superProps);
  
    const textLayer = this.panel.createLayer<TextLayer, ITextLayerProps>("TextLayer", {
      scaleX,
      scaleY
    });
    const gfxLayer = this.panel.createLayer<GfxLayer, ILayerProps>("GfxLayer");
  
    textLayer.writeText("Merry Christmas", 12, 1, Color.LIGHTGREEN);
    textLayer.writeText("" + (new Date().getFullYear()), 28, 1, Color.LIGHTGREEN);
    textLayer.writeText("Commodore 64 Style", 13, 3, Color.LIGHTGREEN);
  
    textLayer.drawSymbol("BLOCK", 21, 25, Color.BROWN);
    textLayer.drawSymbol("BLOCK", 22, 25, Color.BROWN);
    textLayer.drawSymbol("BLOCK", 21, 26, Color.BROWN);
    textLayer.drawSymbol("BLOCK", 22, 26, Color.BROWN);
  
    const lightTargets = [];
    let i = 0;
    for (let y = 6; y < 25; y++) {
      if (y === 7 || isEven(y)) i++;
      for (let x = 22 - i; x < 22 + i; x++) {
        textLayer.drawSymbol("BLOCK", x, y, Color.GREEN);
        if (x === 22 - i) textLayer.drawSymbol("DIAGONAL_FILL_TOP_LEFT", x, y, Color.BLACK, Color.GREEN);
        if (x === 22 + i - 1) textLayer.drawSymbol("DIAGONAL_FILL_TOP_RIGHT", x, y, Color.BLACK,  Color.GREEN);
        if (x !== 22 - i && x !== 22 + i - 1 && y > 6 && y < 24) {
          lightTargets.push({x:x, y:y});
        }
      }
    }
  
    const lightCoords = [
      {x: 21, y: 7},
      {x: 22, y: 8},

      {x: 20, y: 9},
      {x: 21, y: 10},
      {x: 23, y: 10},

      {x: 19, y: 11},
      {x: 20, y: 12},
      {x: 22, y: 13},
      {x: 24, y: 13},
  
      {x: 18, y: 14},
      {x: 19, y: 15},
      {x: 20, y: 16},
      {x: 22, y: 16},
      {x: 23, y: 16},
      {x: 25, y: 16},
      {x: 26, y: 15},

      {x: 17, y: 17},
      {x: 18, y: 18},
      {x: 19, y: 19},
      {x: 21, y: 19},
      {x: 23, y: 19},
      {x: 25, y: 19},
      {x: 27, y: 18},
  
      {x: 15, y: 20},
      {x: 16, y: 21},
      {x: 17, y: 22},
      {x: 19, y: 22},
      {x: 21, y: 22},
      {x: 23, y: 22},
      {x: 25, y: 22},
      {x: 27, y: 21},
      {x: 29, y: 20},
    ];
  
    const lights: TextElement[] = [];
    for (let i = 0; i < lightCoords.length; i++) {
      var element = new TextElement({
        symbolName:"DOT",
        color: ChristmasDemo.getRandomLightColor(),
        gfxPanel: this.panel
      });
      element.setX(lightCoords[i].x * CELLWIDTH);
      element.setY(lightCoords[i].y * CELLHEIGHT);
      gfxLayer.addElement(element);
      lights.push(element);
    }
  
    setInterval(function() {
      for (var i = 0; i < lights.length; i++) {
        var light = lights[i];
        if (light.isHidden()) light.show();
        else {
          if (Math.random() < 0.25) light.hide();
          if (Math.random() < 0.25) light.setColor(ChristmasDemo.getRandomLightColor());
        }
      }
    }, 100);
  
    var star = new TextElement({
      scaleX:1,
      scaleY:1,
      text:"*",
      color:Color.YELLOW,
      gfxPanel: this.panel
    });
    star.setX(21 * CELLWIDTH + (CELLWIDTH / 2));
    star.setY(5 * CELLHEIGHT);
    gfxLayer.addElement(star);
    var starOn = true;
    setInterval(function() {
      if (starOn) {
        star.hide();
        starOn = false;
      } else {
        star.show();
        starOn = true;
      }
    }, 35);
  
    this.panel.render();
  }

  public static getRandomLightColor() {
    var color;
    do {
      color = Color.getByIndex(Math.floor(Math.random() * 15 + 1))
    } while (color === Color.GREEN);
    return color;
  }
}