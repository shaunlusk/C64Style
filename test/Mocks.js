var C64Style = C64Style || {};

C64Style.Mocks = {};

C64Style.Mocks.getMockGfxElement = function(props) {
  props = props || {};
  var element = {};
  element.id = props.id || 1;
  element.getId = function() {return this.id;};
  element.dirty = false;
  element.setDirty = function(boolean) {this.dirty = boolean;};
  element.isDirty = function() {return this.dirty;};
  element.getZIndexComparable = function() {return {};};

  return element;
};
