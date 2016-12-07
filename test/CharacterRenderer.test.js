describe("CharacterRenderer", function() {
  var renderer;
  var renderer_2x2;

  before(function() {
    renderer = new C64Style.CharacterRenderer(1,1);
    renderer_2x2 = new C64Style.CharacterRenderer(2,2);
  });

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
    it("should clear a rectangle of specified length at specified cell coordinates (2x2)", function(done) {
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
    it("should setCursorLocation (2x2)", function(done) {
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
      renderer.setCursorLocation = setCursorLocationSaved;
      renderer.setColor = setColorSaved;
      renderer.setBackgroundColor = setBackgroundColorSaved;
      renderer._renderCharacter = _renderCharacterSaved;
      done();
    });
  });
  describe("#renderString()", function() {
    it("should call some other functions", function(done) {
      var setCursorLocationSaved = renderer.setCursorLocation;
      var setColorSaved = renderer.setColor;
      var setBackgroundColorSaved = renderer.setBackgroundColor;
      var _renderCharacterSaved = renderer._renderCharacter;
      var advanceCursorSaved = renderer.advanceCursor;
      var calledSetCursorLocation = false;
      var calledSetColor = false;
      var calledSetBackgroundColor = false;
      var renderCharacterCount = 0;
      var advanceCursorCount = 0;
      renderer.setCursorLocation = function(x,y) {calledSetCursorLocation = true;};
      renderer.setColor = function(color) {calledSetColor = true;};
      renderer.setBackgroundColor = function(backgroundColor) {calledSetBackgroundColor = true;};
      renderer._renderCharacter = function(context,char) {renderCharacterCount++;};
      renderer.advanceCursor = function() {advanceCursorCount++;};

      var context = null;
      var text = "check";
      var x = null, y = null,
      color = null, backgroundColor = null;

      var expectedCount = text.length;
      renderer.renderString(context, text, x, y, color, backgroundColor);

      assert(calledSetCursorLocation, "should have called setCursorLocation");
      assert(calledSetColor, "should have called setColor");
      assert(calledSetBackgroundColor, "should have called setBackgroundColor");
      assert(renderCharacterCount === expectedCount, "should have called _renderCharacter " + expectedCount + " times.");
      assert(advanceCursorCount === expectedCount, "should have called advanceCursor " + expectedCount + " times.");
      renderer.setCursorLocation = setCursorLocationSaved;
      renderer.setColor = setColorSaved;
      renderer.setBackgroundColor = setBackgroundColorSaved;
      renderer._renderCharacter = _renderCharacterSaved;
      renderer.advanceCursor = advanceCursorSaved;
      done();
    });
  });
  describe("#_renderCharacter()", function() {
    it("should fill background", function(done) {
      var _renderPixPathSaved = renderer._renderPixPath;
      renderer._renderPixPath = function() {};
      renderer.setBackgroundColor(C64Style.Color.BLUE);
      var context = {
        fillRect : function() {this.calledIt = true;}
      };
      var char = "a";

      renderer._renderCharacter(context, char);

      assert(context.fillStyle !== undefined, "should have set context fillStyle");
      assert(context.calledIt === true, "should have called fillRect");
      renderer._renderPixPath = _renderPixPathSaved;
      done();
    });
    it("should return if character is space", function(done) {
      var _renderPixPathSaved = renderer._renderPixPath;
      var calledRenderPixPath = false;
      renderer._renderPixPath = function() {calledRenderPixPath = true;};
      var context = {
        fillRect : function() {}
      };
      var char = " ";

      renderer._renderCharacter(context, char);

      assert(calledRenderPixPath === false, "should have returned");
      renderer._renderPixPath = _renderPixPathSaved;
      done();
    });
    it("should return if pixPathArrayNot found", function(done) {
      var _renderPixPathSaved = renderer._renderPixPath;
      var calledRenderPixPath = false;
      renderer._renderPixPath = function() {calledRenderPixPath = true;};
      var context = {
        fillRect : function() {}
      };
      var char = "¼";

      renderer._renderCharacter(context, char);

      assert(calledRenderPixPath === false, "should have returned");
      renderer._renderPixPath = _renderPixPathSaved;
      done();
    });
    it("should return if render pix array", function(done) {
      var _renderPixPathSaved = renderer._renderPixPath;
      var calledRenderPixPathCount = 0;
      renderer._renderPixPath = function() {calledRenderPixPathCount++;};
      var context = {
        fillRect : function() {}
      };
      var char = "a";
      var expectedCount = C64Style.CharacterMap[char].length;

      renderer._renderCharacter(context, char);

      assert(calledRenderPixPathCount === expectedCount, "should have called _renderPixPath " + expectedCount + " times.");
      renderer._renderPixPath = _renderPixPathSaved;
      done();
    });
  });
  describe("#_renderPixPath()", function() {
    it("should render pixel", function(done) {
      var context = C64Style.Mocks.getMockCanvasContext();
      renderer.setColor(C64Style.Color.LIGHTBLUE);
      var pixPath = {type:"PIXEL", x:1,y:2};
      var expectedX = pixPath.x;
      var expectedY = pixPath.y;
      var expectedWidth = renderer.scaleX;
      var expectedHeight = renderer.scaleY;

      renderer._renderPixPath(context, pixPath);

      assert(context.filledX !== expectedX, "should have filled starting at x=" + expectedX + " (actual: " + context.filledX + ")");
      assert(context.filledY !== expectedY, "should have filled starting at y=" + expectedY + " (actual: " + context.filledY + ")");
      assert(context.filledWidth !== expectedWidth, "should have filled width=" + expectedWidth + " (actual: " + context.filledWidth + ")");
      assert(context.filledHeight !== expectedHeight, "should have filled height=" + expectedHeight + " (actual: " + context.filledHeight + ")");
      done();
    });
    it("should render rectangle", function(done) {
      var context = C64Style.Mocks.getMockCanvasContext();
      renderer.setColor(C64Style.Color.LIGHTBLUE);
      var pixPath = {type:"RECTANGLE", x:2,y:3, width:4, height:6};
      var expectedX = pixPath.x;
      var expectedY = pixPath.y;
      var expectedWidth = pixPath.x * renderer.scaleX;
      var expectedHeight = pixPath.y * renderer.scaleY;

      renderer._renderPixPath(context, pixPath);

      assert(context.filledX !== expectedX, "should have filled starting at x=" + expectedX + " (actual: " + context.filledX + ")");
      assert(context.filledY !== expectedY, "should have filled starting at y=" + expectedY + " (actual: " + context.filledY + ")");
      assert(context.filledWidth !== expectedWidth, "should have filled width=" + expectedWidth + " (actual: " + context.filledWidth + ")");
      assert(context.filledHeight !== expectedHeight, "should have filled height=" + expectedHeight + " (actual: " + context.filledHeight + ")");
      done();
    });
    it("should render pixel (2x2)", function(done) {
      var context = C64Style.Mocks.getMockCanvasContext();
      renderer_2x2.setColor(C64Style.Color.LIGHTBLUE);
      var pixPath = {type:"PIXEL", x:1,y:2};
      var expectedX = pixPath.x;
      var expectedY = pixPath.y;
      var expectedWidth = renderer.scaleX;
      var expectedHeight = renderer.scaleY;

      renderer_2x2._renderPixPath(context, pixPath);

      assert(context.filledX !== expectedX, "should have filled starting at x=" + expectedX + " (actual: " + context.filledX + ")");
      assert(context.filledY !== expectedY, "should have filled starting at y=" + expectedY + " (actual: " + context.filledY + ")");
      assert(context.filledWidth !== expectedWidth, "should have filled width=" + expectedWidth + " (actual: " + context.filledWidth + ")");
      assert(context.filledHeight !== expectedHeight, "should have filled height=" + expectedHeight + " (actual: " + context.filledHeight + ")");
      done();
    });
    it("should render rectangle (2x2)", function(done) {
      var context = C64Style.Mocks.getMockCanvasContext();
      renderer_2x2.setColor(C64Style.Color.LIGHTBLUE);
      var pixPath = {type:"RECTANGLE", x:2,y:3, width:4, height:6};
      var expectedX = pixPath.x;
      var expectedY = pixPath.y;
      var expectedWidth = pixPath.x * renderer.scaleX;
      var expectedHeight = pixPath.y * renderer.scaleY;

      renderer_2x2._renderPixPath(context, pixPath);

      assert(context.filledX !== expectedX, "should have filled starting at x=" + expectedX + " (actual: " + context.filledX + ")");
      assert(context.filledY !== expectedY, "should have filled starting at y=" + expectedY + " (actual: " + context.filledY + ")");
      assert(context.filledWidth !== expectedWidth, "should have filled width=" + expectedWidth + " (actual: " + context.filledWidth + ")");
      assert(context.filledHeight !== expectedHeight, "should have filled height=" + expectedHeight + " (actual: " + context.filledHeight + ")");
      done();
    });
    it("should handle pixPath with color", function(done) {
      var context = C64Style.Mocks.getMockCanvasContext();
      renderer.setColor(C64Style.Color.LIGHTBLUE);
      var expectedColor = C64Style.Color.BLACK;
      var pixPath = {type:"PIXEL", x:1,y:2, color:expectedColor};

      renderer._renderPixPath(context, pixPath);

      assert(context.fillStyle === expectedColor, "should have set color=" + expectedColor + " (actual: " + context.fillStyle + ")");
      done();
    });
    it("should handle pixPath with colorPointer", function(done) {
      var context = C64Style.Mocks.getMockCanvasContext();
      renderer.setColor(C64Style.Color.LIGHTBLUE);
      var expectedColor = C64Style.Color.ORANGE;
      var pixPath = {type:"PIXEL", x:1,y:2, color:new C64Style.ColorPointer(expectedColor)};

      renderer._renderPixPath(context, pixPath);

      assert(context.fillStyle === expectedColor, "should have set color=" + expectedColor + " (actual: " + context.fillStyle + ")");
      done();
    });
    it("should throw error on unrecognized pix path type", function(done) {
      var context = C64Style.Mocks.getMockCanvasContext();
      var pixPath = {type:"VOXEL", x:1,y:2};

      var result = throwsError(function() {
        renderer._renderPixPath(context, pixPath);
      });

      assert(result === true, "should have thrown exception.");
      done();
    });
  });
  describe("#setCursorLocation()", function() {
    it("should set internal coords", function(done) {
      var x = 5, y = 9;
      renderer.setCursorLocation(x, y);

      assert(renderer._cx === x, "should have set x (expected:" + x + ", actual: " + renderer._cx + ")");
      assert(renderer._cy === y, "should have set y (expected:" + y + ", actual: " + renderer._cy + ")");
      done();
    });
  });
  describe("#advanceCursor()", function() {
    it("should increment internal x coord", function(done) {
      var x = 5, y = 9;
      renderer.setCursorLocation(x, y);
      var expected = x + C64Style.CELLWIDTH * renderer.getScaleX();
      renderer.advanceCursor();

      assert(renderer._cx === expected, "should have set x (expected:" + x + ", actual: " + renderer._cx + ")");
      done();
    });
    it("should increment internal x coord (2x2)", function(done) {
      var x = 5, y = 9;
      renderer_2x2.setCursorLocation(x, y);
      var expected = x + C64Style.CELLWIDTH * renderer.getScaleX();
      renderer_2x2.advanceCursor();

      assert(renderer._cx === expected, "should have set x (expected:" + x + ", actual: " + renderer._cx + ")");
      done();
    });
  });
  describe("#setColor()", function() {
    it("should set internal color", function(done) {
      var expected = C64Style.Color.YELLOW;
      renderer.setColor(expected);
      assert(renderer._color === expected, "should have set color (expected: " + expected + ", actual: " + renderer._color +")");
      done();
    });
  });
  describe("#setBackgroundColor()", function() {
    it("should set internal bg color", function(done) {
      var expected = C64Style.Color.YELLOW;
      renderer.setBackgroundColor(expected);
      assert(renderer._color === expected, "should have set color (expected: " + expected + ", actual: " + renderer._color +")");
      done();
    });
  });
});
