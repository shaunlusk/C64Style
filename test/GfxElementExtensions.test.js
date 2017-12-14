describe("GfxElementExtensions", function() {
  var pixImage, mockScreen, mockLayer, mockPixRenderer;

  beforeEach(function() {
    mockScreen = C64Style.Mocks.getMockScreen();
    mockLayer = C64Style.Mocks.getMockLayer();
    mockPixRenderer = {
      renderPixPathArray : function() {}
    };
    pixImage = new C64Style.PixElement(mockScreen, mockLayer, {pixRenderer:mockPixRenderer});
  });

  function screenScale2Setup() {
    mockScreen = C64Style.Mocks.getMockScreen({scaleX:2,scaleY:2});
    mockLayer = C64Style.Mocks.getMockLayer();
    mockPixRenderer = {
      renderPixPathArray : function() {}
    };
    pixImage = new C64Style.PixElement(mockScreen, mockLayer, {pixRenderer:mockPixRenderer});
  }

  describe("#xToColumn", function() {
    it("should convert an x value to a column value", function(done) {
      var x = 16;
      var expected = 2;
      var result = pixImage.xToColumn(x);
      assert(result === expected, "expected " + expected + "; actual " + result);
      done();
    });
  });
  describe("#columnToX", function() {
    it("should convert a column value to an x coordinate", function(done) {
      var col = 3;
      var expected = 24;
      var result = pixImage.columnToX(col);
      assert(result === expected, "expected " + expected + "; actual " + result);
      done();
    });
  });
  describe("#yToRow", function() {
    it("should convert an x value to a column value", function(done) {
      var y = 16;
      var expected = 2;
      var result = pixImage.yToRow(y);
      assert(result === expected, "expected " + expected + "; actual " + result);
      done();
    });
  });
  describe("#rowToY", function() {
    it("should convert a column value to an x coordinate", function(done) {
      var row = 3;
      var expected = 24;
      var result = pixImage.rowToY(row);
      assert(result === expected, "expected " + expected + "; actual " + result);
      done();
    });
  });
});
