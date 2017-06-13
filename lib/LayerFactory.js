var C64Style = C64Style || {};

C64Style.LayerFactory = function() {};

C64Style.LayerFactory.prototype.getLayer = function(parentScreen, type, canvasContextWrapper, props) {
  var layer = null;
  switch (type) {
    case "GfxLayer":
      layer = new SL.GfxLayer(parentScreen, canvasContextWrapper, props);
      break;
    case "TextLayer":
      layer = new C64Style.TextLayer(parentScreen, canvasContextWrapper, props);
      break;
    default:
      throw new Error("Unsupported Layer Type: " + type);
  }
  return layer;
};
