import { EventType, GfxLayer, ILayerProps, ImageLoader, ImageRenderer, ImageSprite, ImageSpriteFrame } from "@shaunlusk/slgfx";
import { BaseDemo, IBaseDemoProps } from "./BaseDemo";
import * as BlueBallImage from '../../assets/BlueBallSpriteTest.png';

export class ImageSpriteDemo extends BaseDemo {
  private _gfxLayer: GfxLayer;
  private _elementFront: ImageSprite;
  private _elementRight: ImageSprite;
  private _elementLeft: ImageSprite;
  private _elementBack: ImageSprite;
// var screen = null,
// image = null,
// gfxLayer = null,
// elementFront = null,
// elementLeft = null,
// elementRight = null,
// elementBack = null;

// var config = {
// targetDiv:document.getElementById("content"),
// rows : 50,
// cols : 80,
// scaleX : 1,
// scaleY : 1,
// fpsElem : document.getElementById('info')
// };

  constructor(props: IBaseDemoProps) {
    const rows = 50;
    const cols = 80;
    const superProps = {
      ...props,
      rows,
      cols
    };
    super(superProps);
    this._gfxLayer = this.panel.createLayer<GfxLayer, ILayerProps>("GfxLayer");

    // const image = new Image();
    // image.src = "BlueBallSpriteTest.png";

    // image.onload = setupSprites;

    const imgLoader = new ImageLoader();
    imgLoader.loadImages({blueBall: BlueBallImage}, imagesHash => {
      this.setupSprites(imagesHash['blueBall']);
    });

    this.panel.render();
  }

  private setupSprites(blueBallImage: HTMLImageElement) {
    console.log("Image loaded.");
    var imageRenderer =  new ImageRenderer();

    this._elementFront = new ImageSprite({
      image: blueBallImage,
      x : 100, y : 100,
      scaleX: 1, scaleY: 1,
      width: 32, height: 32,
      frames: [
        new ImageSpriteFrame({
          duration:2500,
          sourceX:0, sourceY:0,
          sourceWidth:32, sourceHeight:32
        }),
        new ImageSpriteFrame({
          duration:200,
          sourceX:32, sourceY:0,
          sourceWidth:32, sourceHeight:32
        }),
      ],
      gfxPanel: this.panel,
      imageRenderer: imageRenderer
    });
    this._gfxLayer.addElement(this._elementFront);

    this._elementRight = new ImageSprite({
      image: blueBallImage,
      x : 100, y : 300,
      scaleX:1, scaleY:1,
      width:32, height:32,
      hidden: true,
      frames:[
        new ImageSpriteFrame({
          duration:2500,
          sourceX:64, sourceY:0,
          sourceWidth:32, sourceHeight:32
        }),
        new ImageSpriteFrame({
          duration:200,
          sourceX:96, sourceY:0,
          sourceWidth:32, sourceHeight:32
        }),
      ],
      gfxPanel: this.panel,
      imageRenderer:imageRenderer
    });
    this._gfxLayer.addElement(this._elementRight);

    this._elementLeft = new ImageSprite({
      image: blueBallImage,
      x: 500, y: 100,
      scaleX:1, scaleY:1,
      width:32, height:32,
      hidden: true,
      frames:[
        new ImageSpriteFrame({
          duration:2500,
          sourceX:0, sourceY:32,
          sourceWidth:32, sourceHeight:32
        }),
        new ImageSpriteFrame({
          duration:200,
          sourceX:32, sourceY:32,
          sourceWidth:32, sourceHeight:32
        }),
      ],
      gfxPanel: this.panel,
      imageRenderer:imageRenderer
    });
    this._gfxLayer.addElement(this._elementLeft);

    this._elementBack = new ImageSprite({
      image: blueBallImage,
      x:500, y:300,
      scaleX:1, scaleY:1,
      width:32, height:32,
      hidden: true,
      frames:[
        new ImageSpriteFrame({
          duration:2500,
          sourceX:64, sourceY:32,
          sourceWidth:32, sourceHeight:32
        })
      ],
      gfxPanel: this.panel,
      imageRenderer:imageRenderer
    });
    this._gfxLayer.addElement(this._elementBack);

    this._elementFront.on(EventType.ELEMENT_STOPPED_MOVING, () => this.moveEast());
    this._elementRight.on(EventType.ELEMENT_STOPPED_MOVING, () => this.moveNorth());
    this._elementBack.on(EventType.ELEMENT_STOPPED_MOVING, () => this.moveWest());
    this._elementLeft.on(EventType.ELEMENT_STOPPED_MOVING, () => this.moveSouth());

    this.moveSouth();
  }

  private moveSouth(){
    this._elementLeft.hide();
    this._elementFront.setX(100);
    this._elementFront.setY(100);
    this._elementFront.show();
    this._elementFront.moveTo(100, 300, 4000);
  }

  private moveEast() {
    this._elementFront.hide();
    this._elementRight.setX(100);
    this._elementRight.setY(300);
    this._elementRight.show();
    this._elementRight.moveTo(500, 300, 6000);
  }

  private moveNorth() {
    this._elementRight.hide();
    this._elementBack.setX(500);
    this._elementBack.setY(300);
    this._elementBack.show();
    this._elementBack.moveTo(500, 100, 4000);
  }

  private moveWest() {
    this._elementBack.hide();
    this._elementLeft.setX(500);
    this._elementLeft.setY(100);
    this._elementLeft.show();
    this._elementLeft.moveTo(100, 100, 6000);
  }
}
