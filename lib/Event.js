var C64Style = C64Style || {};

C64Style.Event = function(type, data, time) {
  this.type = type;
  this.data = data;
  this.time = time || performance.now();
};
