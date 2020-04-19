import Event from 'slcommon/src/Event';
import EventManager from 'slcommon/src/EventManager';
import EventNotifierMixin from 'slcommon/src/EventNotifierMixin';
import PriorityQueue from 'slcommon/src/PriorityQueue';
import Queue from 'slcommon/src/Queue';
import UniquePriorityQueue from 'slcommon/src/UniquePriorityQueue';

import BackgroundLayer from 'slgfx/src/BackgroundLayer';
import CanvasContextWrapper from 'slgfx/src/CanvasContextWrapper';
import EventType from 'slgfx/src/EventType';
import GfxElement from 'slgfx/src/GfxElement';
import GfxElementZIndexComparable from 'slgfx/src/GfxElementZIndexComparable';
import GfxLayer from 'slgfx/src/GfxLayer';
import ILayerFactory from 'slgfx/src/ILayerFactory';
import ImageElement from 'slgfx/src/ImageElement';
import ImageLoader from 'slgfx/src/ImageLoader';
import ImageRenderer from 'slgfx/src/ImageRenderer';
import ImageSprite from 'slgfx/src/ImageSprite';
import ImageSpriteFrame from 'slgfx/src/ImageSpriteFrame';
import LayerFactory from 'slgfx/src/LayerFactory';
import MouseEvent from 'slgfx/src/MouseEvent';
import MoveOrder from 'slgfx/src/MoveOrder';
import Screen from 'slgfx/src/Screen';
import Sprite from 'slgfx/src/Sprite';
import SpriteAnimationFrame from 'slgfx/src/SpriteAnimationFrame';
import Utils from 'slgfx/src/Utils';

import C64Screen from './src/C64Screen';
import {CharacterMap} from './src/CharacterMap';
import CharacterRenderer from './src/CharacterRenderer';
import {Color} from './src/Color';
import ColorPointer from './src/ColorPointer';
import {CELLWIDTH,CELLHEIGHT} from './src/Constants';
import GfxElementExtensions from './src/GfxElementExtensions';
import Layer from './src/LayerFactoryExtensions';
import PixElement from './src/PixElement';
import {PixPathTypes} from './src/PixPathTypes';
import PixRenderer from './src/PixRenderer';
import PixSprite from './src/PixSprite';
import PixSpriteFrame from './src/PixSpriteFrame';
import TextButton from './src/TextButton';
import TextElement from './src/TextElement';
import TextLayer from './src/TextLayer';
import TextLink from './src/TextLink';
import TextPrompt from './src/TextPrompt';

if (typeof self !== 'undefined' && self) {
  self.C64Style = self.C64Style || {};
  self.C64Style.Event = Event;
  self.C64Style.EventManager = EventManager;
  self.C64Style.EventNotifierMixin = EventNotifierMixin;
  self.C64Style.PriorityQueue = PriorityQueue;
  self.C64Style.Queue = Queue;
  self.C64Style.UniquePriorityQueue = UniquePriorityQueue;

  self.C64Style.BackgroundLayer = BackgroundLayer;
  self.C64Style.CanvasContextWrapper = CanvasContextWrapper;
  self.C64Style.EventType = EventType;
  self.C64Style.GfxElement = GfxElement;
  self.C64Style.GfxElementZIndexComparable = GfxElementZIndexComparable;
  self.C64Style.GfxLayer = GfxLayer;
  self.C64Style.ILayerFactory = ILayerFactory;
  self.C64Style.ImageElement = ImageElement;
  self.C64Style.ImageLoader = ImageLoader;
  self.C64Style.ImageRenderer = ImageRenderer;
  self.C64Style.ImageSprite = ImageSprite;
  self.C64Style.ImageSpriteFrame = ImageSpriteFrame;
  self.C64Style.Layer = Layer;
  self.C64Style.LayerFactory = LayerFactory;
  self.C64Style.MouseEvent = MouseEvent;
  self.C64Style.MoveOrder = MoveOrder;
  self.C64Style.Screen = Screen;
  self.C64Style.Sprite = Sprite;
  self.C64Style.SpriteAnimationFrame = SpriteAnimationFrame;
  self.C64Style.Utils = Utils;

  self.C64Style.C64Screen = C64Screen;
  self.C64Style.CharacterMap = CharacterMap;
  self.C64Style.CharacterRenderer = CharacterRenderer;
  self.C64Style.Color = Color;
  self.C64Style.ColorPointer = ColorPointer;
  self.C64Style.CELLWIDTH = CELLWIDTH;
  self.C64Style.CELLHEIGHT = CELLHEIGHT;
  self.C64Style.GfxElementExtensions = GfxElementExtensions;
  self.C64Style.PixElement = PixElement;
  self.C64Style.PixPathTypes = PixPathTypes;
  self.C64Style.PixRenderer = PixRenderer;
  self.C64Style.PixSprite = PixSprite;
  self.C64Style.PixSpriteFrame = PixSpriteFrame;
  self.C64Style.TextButton = TextButton;
  self.C64Style.TextElement = TextElement;
  self.C64Style.TextLayer = TextLayer;
  self.C64Style.TextLink = TextLink;
  self.C64Style.TextPrompt = TextPrompt;

  // also export everything to SL.  Just in case.
  self.SL = self.SL || {};
  self.SL = {...self.SL, ...self.C64Style};
}
