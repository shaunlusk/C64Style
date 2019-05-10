import LayerFactory from '../src/LayerFactoryExtensions';
import Utils from 'slcommon/src/Utils';

describe("LayerFactory", function() {
  describe("#constructor", function() {
    it("should setup default layer type creator functions", function(done) {
      var lf = new LayerFactory();

      assert(lf._registeredTypes !== null, "_registeredTypes was not created");
      assert(Utils.isFunction(lf._registeredTypes.GfxLayer), "_registeredTypes does not contain function for GfxLayer");
      assert(Utils.isFunction(lf._registeredTypes.BackgroundLayer), "_registeredTypes does not contain function for BackgroundLayer");
      assert(Utils.isFunction(lf._registeredTypes.TextLayer), "_registeredTypes does not contain function for TextLayer");
      done();
    });
    it("should setup default layer type creator functions and those passed in", function(done) {
      var lf = new LayerFactory({
        "BogusLayer":function() {}
      });

      assert(lf._registeredTypes !== null, "_registeredTypes was not created");
      assert(Utils.isFunction(lf._registeredTypes.GfxLayer), "_registeredTypes does not contain function for GfxLayer");
      assert(Utils.isFunction(lf._registeredTypes.BackgroundLayer), "_registeredTypes does not contain function for BackgroundLayer");
      assert(Utils.isFunction(lf._registeredTypes.TextLayer), "_registeredTypes does not contain function for TextLayer");
      assert(Utils.isFunction(lf._registeredTypes.BogusLayer), "_registeredTypes does not contain function for BogusLayer");
      done();
    });
  });
  describe("#getLayer", function() {
    it("should create TextLayer", function(done) {
      var lf = new LayerFactory();

      var result = lf.getLayer({
        getScaleX: function() {return 1;},
        getScaleY: function() {return 1;}
      }, "TextLayer", null, {textPrompt:{}});

      assert(result !== null, "should have created layer");
      assert(result instanceof TextLayer, "should have created TextLayer type");
      done();
    });
  });
});
