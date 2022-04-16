import { MouseEventData, SLGfxMouseEvent } from '@shaunlusk/slgfx';

/**
* MouseEvent - mouseup, mousedown, mousemove
* @constructor
* @param {EventType} type The type of the event. Refer to EventType (in slcommon).
* @param {Object} data Data for the event.  Determined by event emitter.
* @param {time} [time] Optional.  The time the event occurred. If not specified, uses performance.now()
*/
export class C64MouseEvent extends SLGfxMouseEvent {
  constructor(type: string, data: C64MouseEventData, time?: number) {
    super(type, data, time);
    this.endEventPropagation = false; 
  }

  public endEventPropagation: boolean;
}

export interface C64MouseEventData extends MouseEventData {
  row: number;
  col: number;
}