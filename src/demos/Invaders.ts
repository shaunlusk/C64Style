import { Event } from '@shaunlusk/slcommon';
import { EventType, GfxLayer, IImageLoadUpdates, ILayerProps, ImageElement, ImageLoader, ImageRenderer, ImageSprite, ImageSpriteFrame } from "@shaunlusk/slgfx";
import { C64Panel } from "../C64Panel";
import { Color } from "../Color";
import { ColorIndexedPixPath } from "../ColorIndexedPixPath";
import { CELLWIDTH } from "../Constants";
import { IPalette, Palette } from "../Palette";
import { PixElement } from "../PixElement";
import { PixPathRectangle } from "../PixPathRectangle";
import { IPixSpriteProps, PixSprite } from "../PixSprite";
import { PixSpriteFrame } from "../PixSpriteFrame";
import { TextElement } from "../TextElement";
import { ITextLayerProps, TextLayer } from "../TextLayer";
import * as ShipPng from '../../assets/ship.png';
import * as ExplosionPng from '../../assets/explosion.png';
import * as BlueBall from '../../assets/BlueBallSpriteTest.png';
import { AlienPix1 } from './alienPix1';
import { AlienPix2 } from './alienPix2';

class Alien extends PixSprite {
    public isAlien: boolean = true;
    public scoreValue: number = 10;
    public constructor(props: IPixSpriteProps) {
        super(props);
    }
}

const config = {
  targetElement: document.getElementById("content"),
  rows : 25,
  cols : 40,
  scaleX : 2,
  scaleY : 2,
  backgroundColor : Color.BLACK,
  borderColor : Color.DARKGREY
};

export class Invaders {
  private bulletPix = [new PixPathRectangle(0, 0, 2, 6, Color.WHITE)];
  private alienBulletPix = [
    new ColorIndexedPixPath(0, 0, 2),
    new ColorIndexedPixPath(1, 0, 2),
    new ColorIndexedPixPath(0, 1, 2),
    new ColorIndexedPixPath(0, 2, 2),
    new ColorIndexedPixPath(1, 2, 2),
    new ColorIndexedPixPath(1, 3, 2),
    new ColorIndexedPixPath(0, 4, 2),
    new ColorIndexedPixPath(0, 5, 2),
    new ColorIndexedPixPath(1, 5, 2),
    new ColorIndexedPixPath(1, 6, 2)
  ];
  private altPalette = new Palette([
    Color.BLACK,
    Color.BLACK,
    Color.YELLOW,
    Color.BLACK,
    Color.BLACK,
    Color.BLACK,
    Color.RED,
    Color.LIGHTGREEN
  ]);

  private score = 0;
  private actionPaused = false;
  private shipsRemaining = 2;
  private ShipPng: HTMLImageElement;
  private ExplosionPng: HTMLImageElement;
  public panel: C64Panel;
  private textLayer: TextLayer;
  public gfxLayer: GfxLayer;
  public shipElement: ImageElement;
  public bulletElement: PixElement;
  private explosionElement: ImageSprite;
  public aliens: Alien[];
  private shipMovingLeft: boolean;
  private shipMovingRight: boolean;
  private aliensMovingDown: boolean;
  private alienMoveDirection: string;
  private alienCounter: number;
  public imgLoader: ImageLoader;

  constructor() {
    document.onkeydown = e => {
      if (this.actionPaused) return true;
      let preventDefault = true;
      switch (e.key) {
        case "ArrowLeft":
          this.shipMovingLeft = true;
          break;
        case "ArrowRight":
          this.shipMovingRight = true;
          break;
        case " ":
          this.fireBullet();
          break;
        default:
          preventDefault = false;
          break;
      }
      if (preventDefault) e.preventDefault();
      return !preventDefault;
    };

    document.onkeyup = e => {
      if(this.actionPaused) return true;
      let preventDefault = false;
      switch (e.key) {
        case "ArrowLeft":
          this.shipMovingLeft = false;
          break;
        case "ArrowRight":
          this.shipMovingRight = false;
          break;
        default:
          break;
      }
      if (preventDefault) e.preventDefault();
      return !preventDefault;
    };

    this.imgLoader = new ImageLoader();
    this.imgLoader.loadImages({shipPng: ShipPng, explosionPng: ExplosionPng}, imagesHash => {
      this.ShipPng = imagesHash['shipPng'];
      this.ExplosionPng = imagesHash['explosionPng'];
      this.setup();
    });

  }
   
  private setup() {
    this.panel = new C64Panel(config);
    
    this.textLayer = this.panel.createLayer<TextLayer, ITextLayerProps>("TextLayer", {
      scaleX : config.scaleX,
      scaleY : config.scaleY
    });

    this.textLayer.writeText("Alien Invasion!", 12,1, Color.WHITE);
    this.textLayer.writeText("Score:", 1, 24, Color.WHITE);
    this.textLayer.writeText("Ships Remaining:", 22, 24, Color.WHITE);

    this.gfxLayer = this.panel.createLayer<GfxLayer, ILayerProps>("GfxLayer");

    const imageRenderer =  new ImageRenderer(config.scaleX, config.scaleY);
    
    this.shipElement = new ImageElement({
      gfxPanel: this.panel,
      imageRenderer: imageRenderer,
      image: this.ShipPng,
      sourceX:0,
      sourceY:0,
      sourceWidth:32,
      sourceHeight:32,
      x:144,
      y:160
    });

    this.gfxLayer.addElement(this.shipElement);

    this.bulletElement = new PixElement({
      gfxPanel: this.panel,
      hidden: true,
      pixPathArray: this.bulletPix
    });
    this.gfxLayer.addElement(this.bulletElement);
  
    this.explosionElement = new ImageSprite({
      gfxPanel: this.panel,
      imageRenderer: imageRenderer,
      hidden: true,
      width: 32,
      height: 32,
      image: this.ExplosionPng,
      frames:[
        new ImageSpriteFrame({duration:50, sourceX:0, sourceY:0, sourceWidth:32, sourceHeight:32}),
        new ImageSpriteFrame({duration:50, sourceX:32, sourceY:0, sourceWidth:32, sourceHeight:32})
      ]
    });
    this.gfxLayer.addElement(this.explosionElement);

    this.aliens = [];

    let x = 8;
    for (let i = 0; i < 8; i++) {
      const newAlien = this.createAlien(x, 32, Palette.getDefaultPalette(), 20);
      this.aliens.push(newAlien);
      this.gfxLayer.addElement(newAlien);
      x += 20;
    }

    x = 8;
    for (let i = 0; i < 8; i++) {
      var newAlien = this.createAlien(x, 48, this.altPalette, 10);
      this.aliens.push(newAlien);
      this.gfxLayer.addElement(newAlien);
      x += 20;
    }

    this.aliensMovingDown = false;
    this.alienMoveDirection = "RIGHT";
    this.alienCounter = 0;
    this.setAliensMoving();

    this.panel.on(EventType.BEFORE_RENDER, (e: Event) => {
      if (this.actionPaused) return;
      this.updateShip(e);
      this.updateAliens();
      this.alienAttack();
      this.updateScore();
      this.updateShipsRemaining();
      this.checkVictoryCondition();
    });

    this.bulletElement.on(EventType.ELEMENT_HIT_TOP_EDGE, _ => {
      this.removeBullet();
    });
  
    this.bulletElement.on(EventType.ELEMENT_COLLISION, e => {
      if(e.data.element2.isAlien) {
        this.killAlien(e.data.element2);
      }
    });

    this.shipElement.on(EventType.ELEMENT_COLLISION, e => {
      if (e.data.element2.isAlien) {
        this.killAlien(e.data.element2);
      } else {
        // assume it is a bullet. be careful if there are other types of elements that the ship can collide with!
        this.removeAlienBullet(e.data.element2);
      }
      this.blowUpShip();
    });

    this.panel.render();
  }

  private createAlien(x: number, y: number, palette: IPalette, scoreValue: number): Alien {
    const alienFrame1 = new PixSpriteFrame(AlienPix1, 200);
    const alienFrame2 = new PixSpriteFrame(AlienPix2, 200);
    const newAlien = new Alien({
      gfxPanel: this.panel,
      frames: [alienFrame1, alienFrame2],
      x: x,
      y: y,
      defaultPalette: palette
    });
    newAlien.isAlien = true;
    newAlien.scoreValue = scoreValue;
    return newAlien;
  }

  private updateShip(event: Event) {
    const shipMoveRate = 1/8;
    
    if (this.shipMovingLeft && this.shipElement.getX() > 4) {
      this.shipElement.setX(this.shipElement.getX() - event.data.diff * shipMoveRate);
    }
    if (this.shipMovingRight && this.shipElement.getX() < 284) {
      this.shipElement.setX(this.shipElement.getX() + event.data.diff * shipMoveRate);
    }
  }

  private updateAliens() {
    if (!this.aliensMovingDown &&
      ((this.anyAlienAtX(4) && this.alienMoveDirection === "LEFT") || (this.anyAlienAtX(316) && this.alienMoveDirection ==="RIGHT"))) {
        this.moveAliensDown();
    }
  }

  private anyAlienAtX(boundary: number) {
    var result = false;
    this.aliens.forEach( alien => {
      if (alien.getX() <= boundary && alien.getX() + alien.getWidth() >= boundary) result = true;
    });
    return result;
  }

  private moveAliensDown() {
    this.aliens.forEach( alien => {
      alien.moveTo(alien.getX(), alien.getY() + 16, 1100, this.alienStoppedMoving.bind(this));
      alien.setMoveRates(0,0);
    });
    this.aliensMovingDown = true;
  }

  private alienStoppedMoving() {
    this.alienCounter++;
    if (this.alienCounter === this.aliens.length)  {
      this.aliensMovingDown = false;
      this.alienCounter = 0;
      if (this.alienMoveDirection === "RIGHT") {
        this.alienMoveDirection = "LEFT";
      } else {
        this.alienMoveDirection = "RIGHT";
      }
      if (!this.actionPaused) this.setAliensMoving();
    }
  }

  private setAliensMoving() {
    this.aliens.forEach(alien =>{
      if (this.alienMoveDirection === "RIGHT") {
        alien.setMoveRates(48,0);
      } else {
        alien.setMoveRates(-48,0);
      }
    });
  }

  private fireBullet() {
    this.bulletElement.setX(this.shipElement.getX() + 15);
    this.bulletElement.setY(153);
    this.bulletElement.show();
    this.bulletElement.setMoveRates(0, -120);
  }

  private removeBullet() {
    this.bulletElement.hide();
    this.bulletElement.setMoveRates(0, 0);
  }

  private killAlien(alien: Alien) {
    this.score += alien.scoreValue;
    this.gfxLayer.removeElement(alien);
    var idx = this.aliens.indexOf(alien);
    this.aliens.splice(idx ,1);
    this.removeBullet();
  }

  private updateScore() {
    this.textLayer.writeText(this.score.toString(), 8, 24, Color.WHITE);
  }
  
  private updateShipsRemaining() {
    this.textLayer.writeText(this.shipsRemaining.toString(), 39, 24, Color.WHITE);
  }

  private alienAttack() {
    if (this.aliens.length === 0) return;
    const roll = Math.floor(Math.random() * 25);
    if (roll === 0) {
      const alien = this.pickAlien();
      const bullet = this.createAlienBullet(alien.getX() + 8, alien.getY() + 16);
      this.gfxLayer.addElement(bullet);
      bullet.setMoveRates(0, 135);
      bullet.on(EventType.ELEMENT_HIT_BOTTOM_EDGE, this.removeAlienBullet.bind(this, bullet));
    }
  }

  private pickAlien() {
    var alienIdx = Math.floor(Math.random() * this.aliens.length);
    return this.aliens[alienIdx];
  }
  
  private createAlienBullet(x: number, y: number) {
    var bullet = new PixElement({
      gfxPanel: this.panel,
      pixPathArray: this.alienBulletPix,
      x:x,
      y:y
    });
    return bullet;
  }

  private removeAlienBullet(bullet: PixElement) {
    this.gfxLayer.removeElement(bullet);
  }

  private blowUpShip() {
    this.shipElement.hide();
    this.explosionElement.setX(this.shipElement.getX());
    this.explosionElement.setY(this.shipElement.getY());
    this.explosionElement.show();
    this.shipsRemaining--;
    this.stopAction();
    if (this.shipsRemaining <  0) {
      this.endGame(false);
    } else {
      setTimeout(this.resumeAction.bind(this), 1000);
    }
  }

  private stopAction() {
    this.actionPaused = true;
    this.shipMovingLeft = false;
    this.shipMovingRight = false;
    this.aliens.forEach(alien => {
      alien.setMoveRates(0,0);
    });
  }

  private resumeAction() {
    this.actionPaused = false;
    this.shipElement.show();
    this.explosionElement.hide();
    this.setAliensMoving();
  }

  private checkVictoryCondition() {
    if (this.aliens.length === 0) {
      this.endGame(true);
      this.stopAction();
    }
  }

  private endGame(victory: boolean) {
    let msg, color, bgColor;
    if (victory) {
      msg = "VICTORY!";
      color = Color.CYAN;
      bgColor = Color.BLUE;
    } else {
      msg = "FAILURE!";
      this.explosionElement.hide();
      color = Color.ORANGE;
      bgColor = Color.RED;
    }
    const scaleX = 3;
    const scaleY = 3;
    const x = ((CELLWIDTH * config.cols) - (msg.length * CELLWIDTH * scaleX)) / 2;
    const msgElement = new TextElement({
      gfxPanel: this.panel,
      text:msg,
      color:color,
      backgroundColor:bgColor,
      scaleX:scaleX,
      scaleY:scaleY,
      y:50,
      x:x
    });
    this.gfxLayer.addElement(msgElement);
  }

  public togglePause() {
    this.panel.setPaused(!this.panel.isPaused());
  }
}
