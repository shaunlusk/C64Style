var SL = SL || {};

/**
* SL Event.
* @constructor
* @param {SL.EventType} type The type of the event. Refer to {@link SL.EventType}
* @param {Object} data Data for the event.  Determined by event emitter
* @param {time} time Optional.  The time the event occurred. If not specified, uses performance.now()
*/
SL.Event = function(type, data, time) {
  this.type = type;
  this.data = data;
  this.time = time || performance.now();
};
