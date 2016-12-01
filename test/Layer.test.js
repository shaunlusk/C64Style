describe("Layer", function() {
  describe("clearLayer", function() {
    it("should clear canvas context", function(done) {
      var layer = new C64Style.Layer(null, null, null);
      var calledWithX = null,
        calledWidthY = null,
        calledWithWidth = null,
        calledWithHeight = null;
      layer._canvasContext = {
        clearRect : function(x, y, width, height) {
          calledWithX = x;
          calledWithY = y;
          calledWithWidth = width;
          calledWithHeight = height;
        }
      };

      layer.clearLayer();

      assert(calledWithX === 0, "should have called with x=0");
      assert(calledWithY === 0, "should have called with y=0");
      assert(calledWithWidth === layer.getWidth(), "should have called with width=layer.getWidth()");
      assert(calledWithHeight === layer.getHeight(), "should have called with height=layer.getHeight()");
      done();
    });
  });
});
