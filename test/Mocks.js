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
      getElement : function() {return element;}};
  };
  element.collidesWith = function() {return false;};
  element.setHasCollision = function(val) {this.collision = val;};
  element.collision = props.collision || false;
  element.hasCollision = function() {return this.collision;};
  element.clear = function() {};
  element.render = function() {};
  element.finalize = function() {};

  return element;
};

C64Style.Mocks.getMockScreen = function(props) {
  props = props || {};
  var screen = {};
  screen.getScaleX = function() {return 1;};
  screen.getScaleY = function() {return 1;};
  return screen;
};


C64Style.Mocks.getMockLayer = function(props) {
  props = props || {};
  var layer = {};
  layer.getCanvasContext = function() {return {};};

  return layer;
};
