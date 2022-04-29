import { EventType, GfxLayer, ILayerProps } from "@shaunlusk/slgfx";
import { Color } from "../Color";
import { ColorIndexedPixPath } from "../ColorIndexedPixPath";
import { ColorIndexedPixPathRectangle } from "../ColorIndexedPixPathRectangle";
import { Palette } from "../Palette";
import { PixElement } from "../PixElement";
import { ITextLayerProps, TextLayer } from "../TextLayer";
import { BaseDemo, IBaseDemoProps } from "./BaseDemo";

function isOdd(num: number) {return num % 2 === 1;}


export class PaletteDemo extends BaseDemo {
  private pixImage1: PixElement;
  private pixImage2: PixElement;
  private pixImage3: PixElement;
  private pixImage4: PixElement;

  constructor(props: IBaseDemoProps) {
    super(props);
    const textLayer = this.panel.createLayer<TextLayer, ITextLayerProps>("TextLayer");
    const gfxLayer = this.panel.createLayer<GfxLayer, ILayerProps>("GfxLayer");
  
    this.pixImage1 = new PixElement({
      gfxPanel: this.panel,
      x : 10, y : 40,
      scaleX : 3, scaleY : 3,
      pixPathArray : [
        new ColorIndexedPixPath(3, 0, 0),
        new ColorIndexedPixPath(6, 0, 0),
        new ColorIndexedPixPath(7, 0, 0),
        new ColorIndexedPixPath(8, 0, 0),
        new ColorIndexedPixPath(9, 0, 0),
        new ColorIndexedPixPath(12, 0, 0),
        new ColorIndexedPixPath(3, 1, 0),
        new ColorIndexedPixPath(4, 1, 0),
        new ColorIndexedPixPath(5, 1, 0),
        new ColorIndexedPixPath(6, 1, 15),
        new ColorIndexedPixPath(7, 1, 0),
        new ColorIndexedPixPath(8, 1, 15),
        new ColorIndexedPixPath(9, 1, 15),
        new ColorIndexedPixPath(10, 1, 0),
        new ColorIndexedPixPath(11, 1, 0),
        new ColorIndexedPixPath(12, 1, 0),
        new ColorIndexedPixPath(1, 2, 15),
        new ColorIndexedPixPath(4, 2, 0),
        new ColorIndexedPixPath(5, 2, 15),
        new ColorIndexedPixPath(6, 2, 0),
        new ColorIndexedPixPath(7, 2, 15),
        new ColorIndexedPixPath(8, 2, 0),
        new ColorIndexedPixPath(9, 2, 15),
        new ColorIndexedPixPath(10, 2, 15),
        new ColorIndexedPixPath(11, 2, 0),
        new ColorIndexedPixPath(1, 3, 15),
        new ColorIndexedPixPath(2, 3, 15),
        new ColorIndexedPixPath(4, 3, 0),
        new ColorIndexedPixPath(5, 3, 0),
        new ColorIndexedPixPath(6, 3, 0),
        new ColorIndexedPixPath(7, 3, 0),
        new ColorIndexedPixPath(8, 3, 0),
        new ColorIndexedPixPath(9, 3, 0),
        new ColorIndexedPixPath(10, 3, 0),
        new ColorIndexedPixPath(11, 3, 0),
        new ColorIndexedPixPath(1, 4, 9),
        new ColorIndexedPixPath(4, 4, 0),
        new ColorIndexedPixPath(5, 4, 5),
        new ColorIndexedPixPath(6, 4, 6),
        new ColorIndexedPixPath(7, 4, 5),
        new ColorIndexedPixPath(8, 4, 5),
        new ColorIndexedPixPath(9, 4, 6),
        new ColorIndexedPixPath(10, 4, 5),
        new ColorIndexedPixPath(11, 4, 0),
        new ColorIndexedPixPath(1, 5, 9),
        new ColorIndexedPixPath(4, 5, 0),
        new ColorIndexedPixPath(5, 5, 5),
        new ColorIndexedPixPath(6, 5, 5),
        new ColorIndexedPixPath(7, 5, 11),
        new ColorIndexedPixPath(8, 5, 5),
        new ColorIndexedPixPath(9, 5, 5),
        new ColorIndexedPixPath(10, 5, 5),
        new ColorIndexedPixPath(11, 5, 0),
        new ColorIndexedPixPath(1, 6, 9),
        new ColorIndexedPixPath(5, 6, 0),
        new ColorIndexedPixPath(6, 6, 1),
        new ColorIndexedPixPath(7, 6, 5),
        new ColorIndexedPixPath(8, 6, 1),
        new ColorIndexedPixPath(9, 6, 5),
        new ColorIndexedPixPath(10, 6, 0),
        new ColorIndexedPixPath(1, 7, 9),
        new ColorIndexedPixPath(6, 7, 5),
        new ColorIndexedPixPath(7, 7, 5),
        new ColorIndexedPixPath(8, 7, 5),
        new ColorIndexedPixPath(9, 7, 0),
        new ColorIndexedPixPath(1, 8, 5),
        new ColorIndexedPixPath(2, 8, 5),
        new ColorIndexedPixPath(4, 8, 0),
        new ColorIndexedPixPath(5, 8, 0),
        new ColorIndexedPixPath(6, 8, 0),
        new ColorIndexedPixPath(7, 8, 0),
        new ColorIndexedPixPath(8, 8, 0),
        new ColorIndexedPixPath(9, 8, 0),
        new ColorIndexedPixPath(10, 8, 0),
        new ColorIndexedPixPath(11, 8, 0),
        new ColorIndexedPixPath(1, 9, 9),
        new ColorIndexedPixPath(2, 9, 5),
        new ColorIndexedPixPath(3, 9, 0),
        new ColorIndexedPixPath(4, 9, 0),
        new ColorIndexedPixPath(5, 9, 2),
        new ColorIndexedPixPath(6, 9, 2),
        new ColorIndexedPixPath(7, 9, 0),
        new ColorIndexedPixPath(8, 9, 10),
        new ColorIndexedPixPath(9, 9, 2),
        new ColorIndexedPixPath(10, 9, 2),
        new ColorIndexedPixPath(11, 9, 0),
        new ColorIndexedPixPath(12, 9, 0),
        new ColorIndexedPixPath(1, 10, 9),
        new ColorIndexedPixPath(3, 10, 5),
        new ColorIndexedPixPath(4, 10, 0),
        new ColorIndexedPixPath(5, 10, 2),
        new ColorIndexedPixPath(6, 10, 2),
        new ColorIndexedPixPath(7, 10, 0),
        new ColorIndexedPixPath(8, 10, 2),
        new ColorIndexedPixPath(9, 10, 2),
        new ColorIndexedPixPath(10, 10, 2),
        new ColorIndexedPixPath(11, 10, 0),
        new ColorIndexedPixPath(12, 10, 5),
        new ColorIndexedPixPath(1, 11, 9),
        new ColorIndexedPixPath(4, 11, 0),
        new ColorIndexedPixPath(5, 11, 2),
        new ColorIndexedPixPath(6, 11, 2),
        new ColorIndexedPixPath(7, 11, 0),
        new ColorIndexedPixPath(8, 11, 2),
        new ColorIndexedPixPath(9, 11, 2),
        new ColorIndexedPixPath(10, 11, 2),
        new ColorIndexedPixPath(11, 11, 0),
        new ColorIndexedPixPath(12, 11, 5),
        new ColorIndexedPixPath(1, 12, 9),
        new ColorIndexedPixPath(5, 12, 0),
        new ColorIndexedPixPath(6, 12, 0),
        new ColorIndexedPixPath(7, 12, 0),
        new ColorIndexedPixPath(8, 12, 0),
        new ColorIndexedPixPath(9, 12, 0),
        new ColorIndexedPixPath(10, 12, 0),
        new ColorIndexedPixPath(12, 12, 5),
        new ColorIndexedPixPath(1, 13, 9),
        new ColorIndexedPixPath(6, 13, 0),
        new ColorIndexedPixPath(7, 13, 9),
        new ColorIndexedPixPath(8, 13, 9),
        new ColorIndexedPixPath(9, 13, 0),
        new ColorIndexedPixPath(1, 14, 9),
        new ColorIndexedPixPath(5, 14, 0),
        new ColorIndexedPixPath(6, 14, 9),
        new ColorIndexedPixPath(7, 14, 9),
        new ColorIndexedPixPath(8, 14, 0),
        new ColorIndexedPixPath(9, 14, 9),
        new ColorIndexedPixPath(10, 14, 0),
        new ColorIndexedPixPath(4, 15, 0),
        new ColorIndexedPixPath(5, 15, 0),
        new ColorIndexedPixPath(6, 15, 0),
        new ColorIndexedPixPath(7, 15, 0),
        new ColorIndexedPixPath(8, 15, 0),
        new ColorIndexedPixPath(9, 15, 0),
        new ColorIndexedPixPath(10, 15, 0),
        new ColorIndexedPixPath(11, 15, 0)
      ],
    });
    gfxLayer.addElement(this.pixImage1);
  
    this.pixImage2 = new PixElement({
      gfxPanel: this.panel,
      x : 10, y : 40,
      scaleX : 3, scaleY : 3,
      hidden:true,
      pixPathArray:[
        new ColorIndexedPixPath(1, 0, 15),
        new ColorIndexedPixPath(3, 0, 0),
        new ColorIndexedPixPath(6, 0, 0),
        new ColorIndexedPixPath(7, 0, 0),
        new ColorIndexedPixPath(8, 0, 0),
        new ColorIndexedPixPath(9, 0, 0),
        new ColorIndexedPixPath(12, 0, 0),
        new ColorIndexedPixPath(1, 1, 15),
        new ColorIndexedPixPath(2, 1, 15),
        new ColorIndexedPixPath(3, 1, 0),
        new ColorIndexedPixPath(4, 1, 0),
        new ColorIndexedPixPath(5, 1, 0),
        new ColorIndexedPixPath(6, 1, 15),
        new ColorIndexedPixPath(7, 1, 0),
        new ColorIndexedPixPath(8, 1, 15),
        new ColorIndexedPixPath(9, 1, 15),
        new ColorIndexedPixPath(10, 1, 0),
        new ColorIndexedPixPath(11, 1, 0),
        new ColorIndexedPixPath(12, 1, 0),
        new ColorIndexedPixPath(1, 2, 9),
        new ColorIndexedPixPath(4, 2, 0),
        new ColorIndexedPixPath(5, 2, 15),
        new ColorIndexedPixPath(6, 2, 0),
        new ColorIndexedPixPath(7, 2, 15),
        new ColorIndexedPixPath(8, 2, 0),
        new ColorIndexedPixPath(9, 2, 15),
        new ColorIndexedPixPath(10, 2, 15),
        new ColorIndexedPixPath(11, 2, 0),
        new ColorIndexedPixPath(1, 3, 9),
        new ColorIndexedPixPath(4, 3, 0),
        new ColorIndexedPixPath(5, 3, 0),
        new ColorIndexedPixPath(6, 3, 0),
        new ColorIndexedPixPath(7, 3, 0),
        new ColorIndexedPixPath(8, 3, 0),
        new ColorIndexedPixPath(9, 3, 0),
        new ColorIndexedPixPath(10, 3, 0),
        new ColorIndexedPixPath(11, 3, 0),
        new ColorIndexedPixPath(1, 4, 9),
        new ColorIndexedPixPath(4, 4, 0),
        new ColorIndexedPixPath(5, 4, 5),
        new ColorIndexedPixPath(6, 4, 2),
        new ColorIndexedPixPath(7, 4, 5),
        new ColorIndexedPixPath(8, 4, 5),
        new ColorIndexedPixPath(9, 4, 2),
        new ColorIndexedPixPath(10, 4, 5),
        new ColorIndexedPixPath(11, 4, 0),
        new ColorIndexedPixPath(1, 5, 9),
        new ColorIndexedPixPath(4, 5, 0),
        new ColorIndexedPixPath(5, 5, 5),
        new ColorIndexedPixPath(6, 5, 5),
        new ColorIndexedPixPath(7, 5, 11),
        new ColorIndexedPixPath(8, 5, 5),
        new ColorIndexedPixPath(9, 5, 5),
        new ColorIndexedPixPath(10, 5, 5),
        new ColorIndexedPixPath(11, 5, 0),
        new ColorIndexedPixPath(1, 6, 5),
        new ColorIndexedPixPath(2, 6, 5),
        new ColorIndexedPixPath(5, 6, 0),
        new ColorIndexedPixPath(6, 6, 1),
        new ColorIndexedPixPath(7, 6, 5),
        new ColorIndexedPixPath(8, 6, 1),
        new ColorIndexedPixPath(9, 6, 5),
        new ColorIndexedPixPath(10, 6, 0),
        new ColorIndexedPixPath(1, 7, 9),
        new ColorIndexedPixPath(2, 7, 5),
        new ColorIndexedPixPath(6, 7, 5),
        new ColorIndexedPixPath(7, 7, 5),
        new ColorIndexedPixPath(8, 7, 5),
        new ColorIndexedPixPath(9, 7, 0),
        new ColorIndexedPixPath(14, 7, 5),
        new ColorIndexedPixPath(1, 8, 9),
        new ColorIndexedPixPath(2, 8, 5),
        new ColorIndexedPixPath(3, 8, 0),
        new ColorIndexedPixPath(4, 8, 0),
        new ColorIndexedPixPath(5, 8, 0),
        new ColorIndexedPixPath(6, 8, 0),
        new ColorIndexedPixPath(7, 8, 0),
        new ColorIndexedPixPath(8, 8, 0),
        new ColorIndexedPixPath(9, 8, 0),
        new ColorIndexedPixPath(10, 8, 0),
        new ColorIndexedPixPath(11, 8, 0),
        new ColorIndexedPixPath(13, 8, 5),
        new ColorIndexedPixPath(14, 8, 5),
        new ColorIndexedPixPath(1, 9, 9),
        new ColorIndexedPixPath(3, 9, 0),
        new ColorIndexedPixPath(4, 9, 0),
        new ColorIndexedPixPath(5, 9, 2),
        new ColorIndexedPixPath(6, 9, 2),
        new ColorIndexedPixPath(7, 9, 0),
        new ColorIndexedPixPath(8, 9, 10),
        new ColorIndexedPixPath(9, 9, 2),
        new ColorIndexedPixPath(10, 9, 2),
        new ColorIndexedPixPath(11, 9, 0),
        new ColorIndexedPixPath(12, 9, 0),
        new ColorIndexedPixPath(13, 9, 5),
        new ColorIndexedPixPath(1, 10, 9),
        new ColorIndexedPixPath(4, 10, 0),
        new ColorIndexedPixPath(5, 10, 2),
        new ColorIndexedPixPath(6, 10, 2),
        new ColorIndexedPixPath(7, 10, 0),
        new ColorIndexedPixPath(8, 10, 2),
        new ColorIndexedPixPath(9, 10, 2),
        new ColorIndexedPixPath(10, 10, 2),
        new ColorIndexedPixPath(11, 10, 0),
        new ColorIndexedPixPath(1, 11, 9),
        new ColorIndexedPixPath(4, 11, 0),
        new ColorIndexedPixPath(5, 11, 2),
        new ColorIndexedPixPath(6, 11, 2),
        new ColorIndexedPixPath(7, 11, 0),
        new ColorIndexedPixPath(8, 11, 2),
        new ColorIndexedPixPath(9, 11, 2),
        new ColorIndexedPixPath(10, 11, 2),
        new ColorIndexedPixPath(11, 11, 0),
        new ColorIndexedPixPath(1, 12, 9),
        new ColorIndexedPixPath(5, 12, 0),
        new ColorIndexedPixPath(6, 12, 0),
        new ColorIndexedPixPath(7, 12, 0),
        new ColorIndexedPixPath(8, 12, 0),
        new ColorIndexedPixPath(9, 12, 0),
        new ColorIndexedPixPath(10, 12, 0),
        new ColorIndexedPixPath(6, 13, 0),
        new ColorIndexedPixPath(7, 13, 9),
        new ColorIndexedPixPath(8, 13, 9),
        new ColorIndexedPixPath(9, 13, 0),
        new ColorIndexedPixPath(5, 14, 0),
        new ColorIndexedPixPath(6, 14, 9),
        new ColorIndexedPixPath(7, 14, 9),
        new ColorIndexedPixPath(8, 14, 0),
        new ColorIndexedPixPath(9, 14, 9),
        new ColorIndexedPixPath(10, 14, 0),
        new ColorIndexedPixPath(4, 15, 0),
        new ColorIndexedPixPath(5, 15, 0),
        new ColorIndexedPixPath(6, 15, 0),
        new ColorIndexedPixPath(7, 15, 0),
        new ColorIndexedPixPath(8, 15, 0),
        new ColorIndexedPixPath(9, 15, 0),
        new ColorIndexedPixPath(10, 15, 0),
        new ColorIndexedPixPath(11, 15, 0)
      ]
    });
    gfxLayer.addElement(this.pixImage2);
    this.pixImage3 = new PixElement({
      gfxPanel: this.panel,
      x:12,y:130,scaleX:4, scaleY:2,
      pixPathArray:[
        new ColorIndexedPixPathRectangle(0, 0, 8, 8, 0),
        new ColorIndexedPixPathRectangle(8, 0, 8, 8, 1),
        new ColorIndexedPixPathRectangle(16, 0, 8, 8, 2),
        new ColorIndexedPixPathRectangle(24, 0, 8, 8, 3),
        new ColorIndexedPixPathRectangle(32, 0, 8, 8, 4),
        new ColorIndexedPixPathRectangle(40, 0, 8, 8, 5),
        new ColorIndexedPixPathRectangle(48, 0, 8, 8, 6),
        new ColorIndexedPixPathRectangle(56, 0, 8, 8, 7)
      ],
      defaultPalette: Palette.getDefaultPalette()
    });
    gfxLayer.addElement(this.pixImage3);
  
    this.pixImage4 = new PixElement({
      gfxPanel: this.panel,
      x:12,y:170,scaleX:4, scaleY:2,
      pixPathArray:[
        new ColorIndexedPixPathRectangle(0, 0, 8, 8, 8),
        new ColorIndexedPixPathRectangle(8, 0, 8, 8, 9),
        new ColorIndexedPixPathRectangle(16, 0, 8, 8, 10),
        new ColorIndexedPixPathRectangle(24, 0, 8, 8, 11),
        new ColorIndexedPixPathRectangle(32, 0, 8, 8, 12),
        new ColorIndexedPixPathRectangle(40, 0, 8, 8, 13),
        new ColorIndexedPixPathRectangle(48, 0, 8, 8, 14),
        new ColorIndexedPixPathRectangle(56, 0, 8, 8, 15)
      ],
      defaultPalette: Palette.getDefaultPalette()
    });
    gfxLayer.addElement(this.pixImage4);


    textLayer.writeText("Change the values of the colors", 7, 2, Color.WHITE);
    textLayer.writeText("below and click Update to give", 7, 3, Color.WHITE);
    textLayer.writeText("Mr. Orc a new look.", 7, 4, Color.WHITE);
  
    textLayer.writeText("0", 3, 15, Color.WHITE);
    textLayer.writeText("1", 7, 15, Color.WHITE);
    textLayer.writeText("2", 11, 15, Color.WHITE);
    textLayer.writeText("3", 15, 15, Color.WHITE);
    textLayer.writeText("4", 19, 15, Color.WHITE);
    textLayer.writeText("5", 23, 15, Color.WHITE);
    textLayer.writeText("6", 27, 15, Color.WHITE);
    textLayer.writeText("7", 31, 15, Color.WHITE);
  
    textLayer.writeText("8", 3, 20, Color.WHITE);
    textLayer.writeText("9", 7, 20, Color.WHITE);
    textLayer.writeText("10", 10, 20, Color.WHITE);
    textLayer.writeText("11", 14, 20, Color.WHITE);
    textLayer.writeText("12", 18, 20, Color.WHITE);
    textLayer.writeText("13", 22, 20, Color.WHITE);
    textLayer.writeText("14", 26, 20, Color.WHITE);
    textLayer.writeText("15", 30, 20, Color.WHITE);
  
    this.initializePaletteColors();
    this.panel.render();

    this.panel.on(EventType.MOUSE_MOVE, e => {
      if (this.pixImage1.collidesWithCoordinates(e.data.x, e.data.y)) {
        this.pixImage1.hide();
        this.pixImage2.show();
      } else {
        this.pixImage2.hide();
        this.pixImage1.show();
      }
    });
  }

  private initializePaletteColors() {
    var inputs = document.getElementsByName("paletteColor");
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i] as HTMLInputElement;
      var idx = Math.floor(isOdd(i) ? i/2 + 8 : i / 2);
      input.value = this.pixImage1.getPaletteColor(idx).value;
    }
  }

  private updatePaletteColors() {
    var inputs = document.getElementsByName("paletteColor");
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i] as HTMLInputElement;
      var idx = Math.floor(isOdd(i) ? i/2 + 8 : i / 2);
      this.pixImage1.setPaletteColor(idx, new Color(input.value));
      this.pixImage2.setPaletteColor(idx, new Color(input.value));
      this.pixImage3.setPaletteColor(idx, new Color(input.value));
      this.pixImage4.setPaletteColor(idx, new Color(input.value));
    }
  }
}

var demo = new PaletteDemo({
  targetElement: document.getElementById('content'),
  fpsElement: document.getElementById('info')
});
(window as any)['demo'] = demo;