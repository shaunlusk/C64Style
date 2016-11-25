describe("CharacterRenderer", function() {
  var renderer = new C64Style.CharacterRenderer(1,1);
  var renderer_2x2 = new C64Style.CharacterRenderer(2,2);

  describe("#getScaleX()", function() {
    it("should return scaleX", function(done) {
      var expected = 1;
      var result = renderer.getScaleX();
      assert(result === expected, "should have returned scaleX (expected: " + expected + ", actual:" + result + ")");
      done();
    });
    it("should return scaleX (2)", function(done) {
      var expected = 2;
      var result = renderer_2x2.getScaleX();
      assert(result === expected, "should have returned scaleX (expected: " + expected + ", actual:" + result + ")");
      done();
    });
  });
  describe("#getScaleY()", function() {
    it("should return scaleY", function(done) {
      var expected = 1;
      var result = renderer.getScaleY();
      assert(result === expected, "should have returned scaleY (expected: " + expected + ", actual:" + result + ")");
      done();
    });
    it("should return scaleY (2)", function(done) {
      var expected = 2;
      var result = renderer_2x2.getScaleY();
      assert(result === expected, "should have returned scaleY (expected: " + expected + ", actual:" + result + ")");
      done();
    });
  });
  describe("#clearRect()", function() {
    it("should clear a rectangle of specified length at specified cell coordinates", function(done) {
      var mockContext = C64Style.Mocks.getMockCanvasContext();
      var x = 2, y = 2, length = 3;
      var expected = {
        x : x,
        y : y,
        width : length * C64Style.CELLWIDTH,
        height : C64Style.CELLHEIGHT
      };
      renderer.clearRect(mockContext, x, y, length);
      assert(mockContext.clearedX === expected.x, "should have specified proper x (expected: " + expected.x + ", actual:" + mockContext.clearedX + ")");
      assert(mockContext.clearedY === expected.y, "should have specified proper y (expected: " + expected.y + ", actual:" + mockContext.clearedY + ")");
      assert(mockContext.clearedWidth === expected.width, "should have specified proper width (expected: " + expected.width + ", actual:" + mockContext.clearedWidth + ")");
      assert(mockContext.clearedHeight === expected.height, "should have specified proper x (expected: " + expected.height + ", actual:" + mockContext.clearedHeight + ")");
      done();
    });
    it("should setCursorLocation", function(done) {
      var mockContext = {
        clearRect : function(x, y, width, height) {}
      };
      var savedFn = renderer.setCursorLocation;
      var actual = {};
      renderer.setCursorLocation = function(x,y) {
        actual.x = x;
        actual.y = y;
      };
      var x = 2, y = 2, length = 3;

      var expected = {
        x : x,
        y : y
      };
      renderer.clearRect(mockContext, x, y, length);
      assert(actual.x === expected.x, "should have set proper x cursor (expected: " + expected.x + ", actual:" + mockContext.x + ")");
      assert(actual.y === expected.y, "should have set proper y cursor (expected: " + expected.y + ", actual:" + mockContext.y + ")");
      renderer.setCursorLocation = savedFn;
      done();
    });
    it("should clear a rectangle of specified length at specified cell coordinates", function(done) {
      var mockContext = {
        clearRect : function(x, y, width, height) {
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
        }
      };
      var x = 2, y = 2, length = 3;

      var expected = {
        x : x,
        y : y,
        width : length * C64Style.CELLWIDTH * 2,
        height : C64Style.CELLHEIGHT * 2
      };
      renderer_2x2.clearRect(mockContext, x, y, length);
      assert(mockContext.x === expected.x, "should have specified proper x (expected: " + expected.x + ", actual:" + mockContext.x + ")");
      assert(mockContext.y === expected.y, "should have specified proper y (expected: " + expected.y + ", actual:" + mockContext.y + ")");
      assert(mockContext.width === expected.width, "should have specified proper width (expected: " + expected.width + ", actual:" + mockContext.width + ")");
      assert(mockContext.height === expected.height, "should have specified proper x (expected: " + expected.height + ", actual:" + mockContext.height + ")");
      done();
    });
    it("should setCursorLocation", function(done) {
      var mockContext = {
        clearRect : function(x, y, width, height) {}
      };
      var savedFn = renderer_2x2.setCursorLocation;
      var actual = {};
      renderer_2x2.setCursorLocation = function(x,y) {
        actual.x = x;
        actual.y = y;
      };
      var x = 2, y = 2, length = 3;

      var expected = {
        x : x,
        y : y
      };
      renderer_2x2.clearRect(mockContext, x, y, length);
      assert(actual.x === expected.x, "should have set proper x cursor (expected: " + expected.x + ", actual:" + mockContext.x + ")");
      assert(actual.y === expected.y, "should have set proper y cursor (expected: " + expected.y + ", actual:" + mockContext.y + ")");
      renderer_2x2.setCursorLocation = savedFn;
      done();
    });
  });
  describe("#renderSymbol()", function() {
    it("should call some other functions", function(done) {
      var setCursorLocationSaved = renderer.setCursorLocation;
      var setColorSaved = renderer.setColor;
      var setBackgroundColorSaved = renderer.setBackgroundColor;
      var _renderCharacterSaved = renderer._renderCharacter;
      var calledSetCursorLocation = false;
      var calledSetColor = false;
      var calledSetBackgroundColor = false;
      var calledSet_rendCharacter = false;
      renderer.setCursorLocation = function(x,y) {calledSetCursorLocation = true;};
      renderer.setColor = function(color) {calledSetColor = true;};
      renderer.setBackgroundColor = function(backgroundColor) {calledSetBackgroundColor = true;};
      renderer._renderCharacter = function(context,char) {calledSet_rendCharacter = true;};
      var context = null;
      var char = null;
      var x = null, y = null,
      color = null, backgroundColor = null;

      renderer.renderSymbol(context, char, x, y, color, backgroundColor);

      assert(calledSetCursorLocation, "should have called setCursorLocation");
      assert(calledSetColor, "should have called setColor");
      assert(calledSetBackgroundColor, "should have called setBackgroundColor");
      assert(calledSet_rendCharacter, "should have called _renderCharacter");
      renderer.setCursorLocation = setBackgroundColorSaved;
      renderer.setColor = setColorSaved;
      renderer.setBackgroundColor = setBackgroundColorSaved;
      renderer._renderCharacter = _renderCharacterSaved;
      done();
    });
  });
});
