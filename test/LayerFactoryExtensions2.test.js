import LayerFactory from '../src/LayerFactoryExtensions';
import Utils from 'slcommon/src/Utils';

describe("LayerFactory", function() {
  describe("#constructor", function() {
    it("should setup default layer type creator functions", function(done) {
      var lf = new LayerFactory();

      expect(lf._registeredTypes !== null).toBeTruthy();
      expect(Utils.isFunction(lf._registeredTypes.GfxLayer)).toBeTruthy();
      expect(Utils.isFunction(lf._registeredTypes.BackgroundLayer)).toBeTruthy();
      expect(Utils.isFunction(lf._registeredTypes.TextLayer)).toBeTruthy();
      done();
    });
    it("should setup default layer type creator functions and those passed in", function(done) {
      var lf = new LayerFactory({
        "BogusLayer":function() {}
      });

      expect(lf._registeredTypes !== null).toBeTruthy();
      expect(Utils.isFunction(lf._registeredTypes.GfxLayer)).toBeTruthy();
      expect(Utils.isFunction(lf._registeredTypes.BackgroundLayer)).toBeTruthy();
      expect(Utils.isFunction(lf._registeredTypes.TextLayer)).toBeTruthy();
      expect(Utils.isFunction(lf._registeredTypes.BogusLayer)).toBeTruthy();
      done();
    });
  });
  describe("#getLayer", function() {
    it("should create TextLayer", function(done) {
      var lf = new LayerFactory();

      var result = lf.getLayer("TextLayer", {
        getScaleX: function() {return 1;},
        getScaleY: function() {return 1;},
        textPrompt:{}
      });

      expect(result !== null).toBeTruthy();
      expect(result).toBeInstanceOf(TextLayer);
      done();
    });
  });
});
