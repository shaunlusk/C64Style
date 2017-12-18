var C64Style = C64Style || {};

SL.BaseLayerFactory = SL.LayerFactory;

C64Style.LayerFactory = function(registeredTypes) {
  registeredTypes = registeredTypes || {};
  registeredTypes.TextLayer = function(parentScreen, canvasContextWrapper, props) {
    return new C64Style.TextLayer(parentScreen, canvasContextWrapper, props);
  };
  SL.BaseLayerFactory.call(this,registeredTypes);
};

C64Style.LayerFactory.prototype = new SL.BaseLayerFactory();
C64Style.LayerFactory.prototype.constructor = C64Style.LayerFactory;
