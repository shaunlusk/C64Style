var C64Style = C64Style || {};

C64Style.TextLayer = function(screenContext, canvas, config) {
  config = config || {};
  C64Style.Layer.call(this, screenContext, canvas, config);
  this._cx = 0;
  this._cy = 0;
  this._color = C64Style.Color.LIGHTBLUE;
  this._backgroundColor = C64Style.Color.BLUE;
  this._characterRenderer = new C64Style.CharacterRenderer(this._scaleX, this._scaleY);
  this._pendingTextStrings = new RArray();
};

C64Style.TextLayer.prototype = new C64Style.Layer();
C64Style.TextLayer.prototype.constructor = C64Style.TextLayer;

/**
* @override
*/
C64Style.TextLayer.prototype.render = function() {
  var i, pendingString;
  // Clear pending string bounding boxes
  for (i = 0; i < this._pendingTextStrings.length; i++) {
    pendingString = this._pendingTextStrings.get(i);

    if (pendingString.string) {
      this._characterRenderer.clearRect(
        this._canvasContext,
        pendingString.string.length,
        pendingString.cellX,
        pendingString.cellY
      );
    } else {
      this._characterRenderer.clearRect(
        this._canvasContext,
        1,
        pendingString.cellX,
        pendingString.cellY
      );
    }
  }

  // write pending strings
  for (i = 0; i < this._pendingTextStrings.length; i++) {
    pendingString = this._pendingTextStrings.get(i);
    if (pendingString.string) {
      this._characterRenderer.renderString(
        this._canvasContext,
        pendingString.string,
        pendingString.cellX,
        pendingString.cellY,
        pendingString.color,
        pendingString.backgroundColor
      );
    } else {
      this._characterRenderer.renderSymbol(
        this._canvasContext,
        pendingString.pixMapId,
        pendingString.cellX,
        pendingString.cellY,
        pendingString.color,
        pendingString.backgroundColor
      );
    }
  }

  this._pendingTextStrings.clear();
};

C64Style.TextLayer.prototype.writeText = function(string, cellX, cellY, color, backgroundColor) {
  this._pendingTextStrings.push({
    string:string,
    cellX:cellX,
    cellY:cellY,
    color:color,
    backgroundColor:backgroundColor
  });
};

C64Style.TextLayer.prototype.drawSymbol = function(pixMapId, cellX, cellY, color, backgroundColor) {
  this._pendingTextStrings.push({
    pixMapId:pixMapId,
    cellX:cellX,
    cellY:cellY,
    color:color,
    backgroundColor:backgroundColor
  });
};
