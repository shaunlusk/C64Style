var SL = SL || {};

/**
* @interface
*/
SL.LayerFactory = function() {

};

/** abstract */
SL.LayerFactory.prototype.getLayer = function(parentScreen, type, canvas, props) {
  throw new Error("getLayer() Not Implemented.");
};
