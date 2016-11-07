var C64Style = C64Style || {};
C64Style.Mocks = {};

C64Style.Mocks.getMockGfxElement = function(props) {
  props = props || {};
  var element = {};
  element.id = props.id || 1;
  element.getId = function() {return this.id;};
  element.dirty = props.dirty || false;
  element.setDirty = function(boolean) {this.dirty = boolean;};
  element.isDirty = function() {return this.dirty;};
  element.hidden = props.hidden || false;
  element.isHidden = function() {return this.hidden;};
  element.setHidden = function(val) {this.hidden = val;};
  element.getZIndexComparable = function() {
    return {
      getElement : function() {return element;},
      getKey : function() {return 0;}
    };
  };
  element.collidesWith = function() {return false;};
  element.collidesWithX = function() {return false;};
  element.collidesWithY = function() {return false;};
  element.setHasCollision = function(val) {this.collision = val;};
  element.collision = props.collision || false;
  element.hasCollision = function() {return this.collision;};
  element.clear = function() {};
  element.render = function() {};
  element.finalize = function() {};
  element.x = props.x || 0;
  element.y = props.y || 0;
  element.getX = function() {return this.x;};
  element.getY = function() {return this.y;};
  element.setX = function(x) {this.x = x;};
  element.setY = function(y) {this.y = y;};
  element.zIndex = props.zIndex || -1;
  element.getZIndex = function() {return this.zIndex;};
  element.setZIndex = function(zidx) {this.zIndex = zidx;};
  element.collidesWithCoordinates = function(x,y) {return false;};

  return element;
};

C64Style.Mocks.getMockScreen = function(props) {
  props = props || {};
  var screen = {};
  screen.scaleX = props.scaleX || 1;
  screen.scaleY = props.scaleY || 1;
  screen.getScaleX = function() {return this.scaleX;};
  screen.getScaleY = function() {return this.scaleY;};
  screen.addEventListener = function() {};
  return screen;
};

C64Style.Mocks.getMockLayer = function(props) {
  props = props || {};
  var layer = {};
  layer.getCanvasContext = function() {return {};};

  return layer;
};

C64Style.Mocks.getMockTextLayer = function(props) {
  props = props || {};
  var layer = {};
  layer.writeText = function() {};
  layer.clearLength = function() {};
  layer.drawSymbol = function() {};

  return layer;
};
