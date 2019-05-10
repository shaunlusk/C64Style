import GfxElement from '../src/GfxElementExtensions';

describe("GfxElementExtensions", function() {
  describe("#xToColumn", function() {
    it("should convert an x value to a column value", function(done) {
      var x = 16;
      var expected = 2;
      var result = GfxElement.xToColumn(x);
      expect(result).toBe(expected);
      done();
    });
  });
  describe("#columnToX", function() {
    it("should convert a column value to an x coordinate", function(done) {
      var col = 3;
      var expected = 24;
      var result = GfxElement.columnToX(col);
      expect(result).toBe(expected);
      done();
    });
  });
  describe("#yToRow", function() {
    it("should convert an x value to a column value", function(done) {
      var y = 16;
      var expected = 2;
      var result = GfxElement.yToRow(y);
      expect(result).toBe(expected);
      done();
    });
  });
  describe("#rowToY", function() {
    it("should convert a column value to an x coordinate", function(done) {
      var row = 3;
      var expected = 24;
      var result = GfxElement.rowToY(row);
      expect(result).toBe(expected);
      done();
    });
  });
});

