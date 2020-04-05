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

if (typeof window !== 'undefined' && window) {
  window.C64Style = window.C64Style || {};
  window.C64Style.Event = Event;
  window.C64Style.EventManager = EventManager;
  window.C64Style.EventNotifierMixin = EventNotifierMixin;
  window.C64Style.PriorityQueue = PriorityQueue;
  window.C64Style.Queue = Queue;
  window.C64Style.UniquePriorityQueue = UniquePriorityQueue;

  window.C64Style.BackgroundLayer = BackgroundLayer;
  window.C64Style.CanvasContextWrapper = CanvasContextWrapper;
  window.C64Style.EventType = EventType;
  window.C64Style.GfxElement = GfxElement;
  window.C64Style.GfxElementZIndexComparable = GfxElementZIndexComparable;
  window.C64Style.GfxLayer = GfxLayer;
  window.C64Style.ILayerFactory = ILayerFactory;
  window.C64Style.ImageElement = ImageElement;
  window.C64Style.ImageLoader = ImageLoader;
  window.C64Style.ImageRenderer = ImageRenderer;
  window.C64Style.ImageSprite = ImageSprite;
  window.C64Style.ImageSpriteFrame = ImageSpriteFrame;
  window.C64Style.Layer = Layer;
  window.C64Style.LayerFactory = LayerFactory;
  window.C64Style.MouseEvent = MouseEvent;
  window.C64Style.MoveOrder = MoveOrder;
  window.C64Style.Screen = Screen;
  window.C64Style.Sprite = Sprite;
  window.C64Style.SpriteAnimationFrame = SpriteAnimationFrame;
  window.C64Style.Utils = Utils;

  window.C64Style.C64Screen = C64Screen;
  window.C64Style.CharacterMap = CharacterMap;
  window.C64Style.CharacterRenderer = CharacterRenderer;
  window.C64Style.Color = Color;
  window.C64Style.ColorPointer = ColorPointer;
  window.C64Style.CELLWIDTH = CELLWIDTH;
  window.C64Style.CELLHEIGHT = CELLHEIGHT;
  window.C64Style.GfxElementExtensions = GfxElementExtensions;
  window.C64Style.PixElement = PixElement;
  window.C64Style.PixPathTypes = PixPathTypes;
  window.C64Style.PixRenderer = PixRenderer;
  window.C64Style.PixSprite = PixSprite;
  window.C64Style.PixSpriteFrame = PixSpriteFrame;
  window.C64Style.TextButton = TextButton;
  window.C64Style.TextElement = TextElement;
  window.C64Style.TextLayer = TextLayer;
  window.C64Style.TextLink = TextLink;
  window.C64Style.TextPrompt = TextPrompt;

  // also export everything to SL.  Just in case.
  window.SL = window.SL || {};
  window.SL = {...window.SL, ...window.C64Style};
}
