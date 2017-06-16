var C64Style = C64Style || {};

C64Style.Screen = function(targetDiv, layerFactory, config) {
  config = config || {};
  // set defaults
  config.cols = 40;
  config.rows = 25;
  config.backgroundColor = config.backgroundColor || C64Style.Color.BLUE;
  config.borderColor = config.borderColor || C64Style.Color.LIGHTBLUE;
  config.borderSize = config.borderSize || 20;

  SL.Screen.call(this, targetDiv, layerFactory, config);
};

C64Style.Screen.prototype = new SL.Screen();
C64Style.Screen.prototype.constructor = C64Style.Screen;
