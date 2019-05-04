import ColorPointer from '../src/ColorPointer';
import {Color} from '../src/Color';

describe("ColorPointer", function() {
  describe("constructor", function() {
    it("should accept injected color", function(done){
      var expected = Color.ORANGE;
      var cpointer = new ColorPointer(expected);
      expect(cpointer.currentColor).toBe(expected);
      done();
    });
    it("should provide default color", function(done){
      var cpointer = new ColorPointer();
      expect(cpointer.currentColor !== undefined && cpointer.currentColor !== null).toBeTruthy();
      done();
    });
  });
  describe("#getColor()", function() {
    it("should get current color", function(done){
      var expected = Color.YELLOW;
      var cpointer = new ColorPointer(expected);
      var result = cpointer.getColor();
      expect(result).toBe(expected);
      done();
    });
  });
  describe("#setColor()", function() {
    it("should get current color", function(done){
      var expected = Color.GREEN;
      var cpointer = new ColorPointer(Color.GREY);
      cpointer.setColor(expected);
      var result = cpointer.getColor();
      expect(result).toBe(expected);
      done();
    });
  });
});
