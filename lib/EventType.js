var C64Style = C64Style || {};

/**
* C64Style.Event Types
* @static
* @enum
*/
C64Style.EventType = {
  /** Emitted by an C64Style.GfxElement when it moves */
  "ELEMENT_MOVED" : "ELEMENT_MOVED",
  /** Emitted by a C64Style.Screen before a render cycle */
  "BEFORE_RENDER" : "BEFORE_RENDER",
  /** Emitted by a C64Style.Screen after a render cycle */
  "AFTER_RENDER" : "AFTER_RENDER",
  /** Emitted when an C64Style.GfxElement starts moving */
  "ELEMENT_STARTED_MOVING" : "ELEMENT_STARTED_MOVING",
  /** Emitted by a moving C64Style.GfxElement when it stops moving */
  "ELEMENT_STOPPED_MOVING" : "ELEMENT_STOPPED_MOVING",
  /** Emitted by an C64Style.GfxElement when two elements collide */
  "ELEMENT_COLLISION" : "ELEMENT_COLLISION",
  /** Emitted by a C64Style.GfxLayer when an element hits its left edge */
  "ELEMENT_HIT_LEFT_EDGE" : "ELEMENT_HIT_LEFT_EDGE",
  /** Emitted by a C64Style.GfxLayer when an element hits its right edge */
  "ELEMENT_HIT_RIGHT_EDGE" : "ELEMENT_HIT_RIGHT_EDGE",
  /** Emitted by a C64Style.GfxLayer when an element hits its top edge */
  "ELEMENT_HIT_TOP_EDGE" : "ELEMENT_HIT_TOP_EDGE",
  /** Emitted by a C64Style.GfxLayer when an element hits its bottom edge */
  "ELEMENT_HIT_BOTTOM_EDGE" : "ELEMENT_HIT_BOTTOM_EDGE",
  /** Emmited by a C64Style.Screen when it is paused */
  "SCREEN_PAUSED" : "SCREEN_PAUSED",
  /** Emmited by a C64Style.Screen when it is unpaused */
  "SCREEN_RESUMED" : "SCREEN_RESUMED",
  /** Emmited by a C64Style.Screen when the mouse moves somewhere inside its boundaries */
  "MOUSE_MOVE" : "MOUSE_MOVE",
  /** Emmited by a C64Style.Screen when a mouse down event occurs on it */
  "MOUSE_DOWN" : "MOUSE_DOWN",
  /** Emmited by a C64Style.Screen when a mouse down event occurs on it */
  "MOUSE_UP" : "MOUSE_UP",
  /** Emmited by a C64Style.GfxElement when the mouse enters its bounding box */
  "MOUSE_ENTER_ELEMENT" : "MOUSE_ENTER_ELEMENT",
  /** Emmited by a C64Style.GfxElement when the mouse leaves its bounding box */
  "MOUSE_EXIT_ELEMENT" : "MOUSE_EXIT_ELEMENT",
  /** Emmited by a C64Style.GfxElement when the mouse moves inside its bounding box */
  "MOUSE_MOVE_OVER_ELEMENT" : "MOUSE_MOVE_OVER_ELEMENT",
  /** Emmited by a C64Style.GfxElement when a mouse down event occurs on it */
  "MOUSE_DOWN_ON_ELEMENT" : "MOUSE_DOWN_ON_ELEMENT",
  /** Emmited by a C64Style.GfxElement when a mouse up event occurs on it */
  "MOUSE_UP_ON_ELEMENT" : "MOUSE_UP_ON_ELEMENT",
  /** Emmited by a C64Style.Sprite when its animation cycle completes (only for non-looping sprites) */
  "SPRITE_ANIMATION_DONE" : "SPRITE_ANIMATION_DONE"
};
