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
  element.getZIndexComparable = function() {return {};};
  element.collidesWith = function() {return false;};
  element.collidesWith_LastPosition = function() {return false;};

  return element;
};
