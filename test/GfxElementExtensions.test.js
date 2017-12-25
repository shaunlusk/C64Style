describe("GfxElementExtensions", function() {
  describe("#xToColumn", function() {
    it("should convert an x value to a column value", function(done) {
      var x = 16;
      var expected = 2;
      var result = SL.GfxElement.xToColumn(x);
      assert(result === expected, "expected " + expected + "; actual " + result);
      done();
    });
  });
  describe("#columnToX", function() {
    it("should convert a column value to an x coordinate", function(done) {
      var col = 3;
      var expected = 24;
      var result = SL.GfxElement.columnToX(col);
      assert(result === expected, "expected " + expected + "; actual " + result);
      done();
    });
  });
  describe("#yToRow", function() {
    it("should convert an x value to a column value", function(done) {
      var y = 16;
      var expected = 2;
      var result = SL.GfxElement.yToRow(y);
      assert(result === expected, "expected " + expected + "; actual " + result);
      done();
    });
  });
  describe("#rowToY", function() {
    it("should convert a column value to an x coordinate", function(done) {
      var row = 3;
      var expected = 24;
      var result = SL.GfxElement.rowToY(row);
      assert(result === expected, "expected " + expected + "; actual " + result);
      done();
    });
  });
});
