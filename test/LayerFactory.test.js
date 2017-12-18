describe("LayerFactory", function() {
  describe("#constructor", function() {
    it("should setup default layer type creator functions", function(done) {
      var lf = new C64Style.LayerFactory();

      assert(lf._registeredTypes !== null, "_registeredTypes was not created");
      assert(SL.isFunction(lf._registeredTypes.GfxLayer), "_registeredTypes does not contain function for GfxLayer");
      assert(SL.isFunction(lf._registeredTypes.BackgroundLayer), "_registeredTypes does not contain function for BackgroundLayer");
      assert(SL.isFunction(lf._registeredTypes.TextLayer), "_registeredTypes does not contain function for TextLayer");
      done();
    });
    it("should setup default layer type creator functions and those passed in", function(done) {
      var lf = new C64Style.LayerFactory({
        "BogusLayer":function() {}
      });

      assert(lf._registeredTypes !== null, "_registeredTypes was not created");
      assert(SL.isFunction(lf._registeredTypes.GfxLayer), "_registeredTypes does not contain function for GfxLayer");
      assert(SL.isFunction(lf._registeredTypes.BackgroundLayer), "_registeredTypes does not contain function for BackgroundLayer");
      assert(SL.isFunction(lf._registeredTypes.TextLayer), "_registeredTypes does not contain function for TextLayer");
      assert(SL.isFunction(lf._registeredTypes.BogusLayer), "_registeredTypes does not contain function for BogusLayer");
      done();
    });
  });
  describe("#getLayer", function() {
    it("should create TextLayer", function(done) {
      var lf = new C64Style.LayerFactory();

      var result = lf.getLayer({
        getScaleX: function() {return 1;},
        getScaleY: function() {return 1;}
      }, "TextLayer", null, {textPrompt:{}});

      assert(result !== null, "should have created layer");
      assert(result instanceof C64Style.TextLayer, "should have created TextLayer type");
      done();
    });
  });
});
