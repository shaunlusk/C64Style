var SL = SL || {};

SL.renderWithRotation = function (context, x, y, rotation, renderCallback) {
  context.save();
  SL.translateAndRotateCanvasContext(context, x, y, rotation);
  renderCallback();
  context.restore();
};

SL.translateAndRotateCanvasContext = function (context, x, y, rotation) {
  context.translate(x, y);
  context.rotate(rotation);
};

SL.clearCanvasContext = function (context) {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};
