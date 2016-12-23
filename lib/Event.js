var C64Style = C64Style || {};

/**
* C64Style Event.
* @constructor
* @param {C64Style.EventType} type The type of the event. Refer to {@link C64Style.EventType}
* @param {Object} data Data for the event.  Determined by event emitter
* @param {time} time Optional.  The time the event occurred. If not specified, uses performance.now()
*/
C64Style.Event = function(type, data, time) {
  this.type = type;
  this.data = data;
  this.time = time || performance.now();
};
