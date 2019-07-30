import CharacterRenderer from '../src/CharacterRenderer';
import {Mocks} from './Mocks';
import {CELLWIDTH, CELLHEIGHT} from '../src/Constants';
import {Color} from '../src/Color';
import ColorPointer from '../src/ColorPointer';
import {CharacterMap} from '../src/CharacterMap';

describe("CharacterRenderer", function() {
  var renderer;

  beforeEach(function() {
    renderer = new CharacterRenderer();
  });

  describe("#clearRect()", function() {
    it("should clear a rectangle of specified length at specified cell coordinates", function(done) {
      var mockContext = Mocks.getMockCanvasContext();
      var x = 2, y = 2, length = 3;
      var expected = {
        x : x,
        y : y,
        width : length * CELLWIDTH,
        height : CELLHEIGHT
      };
      renderer.clearRect(mockContext, x, y, length);
      expect(mockContext.clearedX).toBe(expected.x);
      expect(mockContext.clearedY).toBe(expected.y);
      expect(mockContext.clearedWidth).toBe(expected.width);
      expect(mockContext.clearedHeight).toBe(expected.height);
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
      expect(actual.x).toBe(expected.x);
      expect(actual.y).toBe(expected.y);
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
        width : length * CELLWIDTH * 2,
        height : CELLHEIGHT * 2
      };
      renderer.clearRect(mockContext, x, y, length, 2, 2);
      expect(mockContext.x).toBe(expected.x);
      expect(mockContext.y).toBe(expected.y);
      expect(mockContext.width).toBe(expected.width);
      expect(mockContext.height).toBe(expected.height);
      done();
    });
    it("should setCursorLocation (2x2)", function(done) {
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
      renderer.clearRect(mockContext, x, y, length, 2, 2);
      expect(actual.x).toBe(expected.x);
      expect(actual.y).toBe(expected.y);
      renderer.setCursorLocation = savedFn;
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

      expect(calledSetCursorLocation).toBeTruthy();
      expect(calledSetColor).toBeTruthy();
      expect(calledSetBackgroundColor).toBeTruthy();
      expect(calledSet_rendCharacter).toBeTruthy();
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

      expect(calledSetCursorLocation).toBeTruthy();
      expect(calledSetColor).toBeTruthy();
      expect(calledSetBackgroundColor).toBeTruthy();
      expect(renderCharacterCount).toBe(expectedCount);
      expect(advanceCursorCount).toBe(expectedCount);
      renderer.setCursorLocation = setCursorLocationSaved;
      renderer.setColor = setColorSaved;
      renderer.setBackgroundColor = setBackgroundColorSaved;
      renderer._renderCharacter = _renderCharacterSaved;
      renderer.advanceCursor = advanceCursorSaved;
      done();
    });
  });
  describe("#_renderCharacter()", function() {
    var context = {
      fillRect : function() {},
      setFillStyle : function() {}
    };
    it("should call setFillStyle", function(done) {
      var _renderPixPathSaved = renderer._renderPixPath;
      renderer._renderPixPath = function() {};
      renderer.setBackgroundColor(Color.BLUE);
      context.setFillStyle = function() {this.calledIt = true;};
      var char = "a";

      renderer._renderCharacter(context, char);

      expect(context.calledIt).toBeTruthy();
      renderer._renderPixPath = _renderPixPathSaved;
      done();
    });
    it("should fill background", function(done) {
      var _renderPixPathSaved = renderer._renderPixPath;
      renderer._renderPixPath = function() {};
      renderer.setBackgroundColor(Color.BLUE);
      context.fillRect = function() {this.calledIt = true;};
      var char = "a";

      renderer._renderCharacter(context, char);

      expect(context.calledIt).toBeTruthy();
      renderer._renderPixPath = _renderPixPathSaved;
      done();
    });
    it("should return if character is space", function(done) {
      var _renderPixPathSaved = renderer._renderPixPath;
      var calledRenderPixPath = false;
      renderer._renderPixPath = function() {calledRenderPixPath = true;};
      var char = " ";

      renderer._renderCharacter(context, char);

      expect(calledRenderPixPath).toBeFalsy();
      renderer._renderPixPath = _renderPixPathSaved;
      done();
    });
    it("should return if pixPathArrayNot found", function(done) {
      var _renderPixPathSaved = renderer._renderPixPath;
      var calledRenderPixPath = false;
      renderer._renderPixPath = function() {calledRenderPixPath = true;};
      var char = "¼";

      renderer._renderCharacter(context, char);

      expect(calledRenderPixPath).toBeFalsy();
      renderer._renderPixPath = _renderPixPathSaved;
      done();
    });
    it("should return if render pix array", function(done) {
      var _renderPixPathSaved = renderer._renderPixPath;
      var calledRenderPixPathCount = 0;
      renderer._renderPixPath = function() {calledRenderPixPathCount++;};
      var char = "a";
      var expectedCount = CharacterMap[char].length;

      renderer._renderCharacter(context, char);

      expect(calledRenderPixPathCount).toBe(expectedCount);
      renderer._renderPixPath = _renderPixPathSaved;
      done();
    });
  });
  describe("#_renderPixPath()", function() {
    it("should render pixel", function(done) {
      var context = Mocks.getMockCanvasContext();
      renderer.setColor(Color.LIGHTBLUE);
      var pixPath = {type:"PIXEL", x:1,y:2};
      var expectedX = pixPath.x;
      var expectedY = pixPath.y;
      var expectedWidth = 1;
      var expectedHeight = 1;

      renderer._renderPixPath(context, pixPath, 1, 1);

      expect(context.filledX).toBe(expectedX);
      expect(context.filledY).toBe(expectedY);
      expect(context.filledWidth).toBe(expectedWidth);
      expect(context.filledHeight).toBe(expectedHeight);
      done();
    });
    it("should render rectangle", function(done) {
      var context = Mocks.getMockCanvasContext();
      renderer.setColor(Color.LIGHTBLUE);
      var pixPath = {type:"RECTANGLE", x:2,y:3, width:4, height:6};
      var expectedX = pixPath.x;
      var expectedY = pixPath.y;
      var expectedWidth = pixPath.width;
      var expectedHeight = pixPath.height;

      renderer._renderPixPath(context, pixPath, 1, 1);

      expect(context.filledX).toBe(expectedX);
      expect(context.filledY).toBe(expectedY);
      expect(context.filledWidth).toBe(expectedWidth);
      expect(context.filledHeight).toBe(expectedHeight);
      done();
    });
    it("should render pixel (2x2)", function(done) {
      var context = Mocks.getMockCanvasContext();
      renderer.setColor(Color.LIGHTBLUE);
      var scale = 2;
      var pixPath = {type:"PIXEL", x:1,y:2};
      var expectedX = pixPath.x * scale;
      var expectedY = pixPath.y * scale;
      var expectedWidth = scale;
      var expectedHeight = scale;

      renderer._renderPixPath(context, pixPath, scale, scale);

      expect(context.filledX).toBe(expectedX);
      expect(context.filledY).toBe(expectedY);
      expect(context.filledWidth).toBe(expectedWidth);
      expect(context.filledHeight).toBe(expectedHeight);
      done();
    });
    it("should render rectangle (2x2)", function(done) {
      var context = Mocks.getMockCanvasContext();
      renderer.setColor(Color.LIGHTBLUE);
      var scale = 2;
      var pixPath = {type:"RECTANGLE", x:2,y:3, width:4, height:6};
      var expectedX = pixPath.x * scale;
      var expectedY = pixPath.y * scale;
      var expectedWidth = pixPath.width * scale;
      var expectedHeight = pixPath.height * scale;

      renderer._renderPixPath(context, pixPath, scale, scale);

      expect(context.filledX).toBe(expectedX);
      expect(context.filledY).toBe(expectedY);
      expect(context.filledWidth).toBe(expectedWidth);
      expect(context.filledHeight).toBe(expectedHeight);
      done();
    });
    it("should handle pixPath with color", function(done) {
      var context = Mocks.getMockCanvasContext();
      context.setFillStyle = function(style) {this.fillStyle = style};
      renderer.setColor(Color.LIGHTBLUE);
      var expectedColor = Color.BLACK;
      var pixPath = {type:"PIXEL", x:1,y:2, color:expectedColor};

      renderer._renderPixPath(context, pixPath);

      expect(context.fillStyle).toBe(expectedColor);
      done();
    });
    it("should handle pixPath with colorPointer", function(done) {
      var context = Mocks.getMockCanvasContext();
      context.setFillStyle = function(style) {this.fillStyle = style};
      renderer.setColor(Color.LIGHTBLUE);
      var expectedColor = Color.ORANGE;
      var pixPath = {type:"PIXEL", x:1,y:2, color:new ColorPointer(expectedColor)};

      renderer._renderPixPath(context, pixPath);

      expect(context.fillStyle).toBe(expectedColor);
      done();
    });
    it("should throw error on unrecognized pix path type", function(done) {
      var context = Mocks.getMockCanvasContext();
      var pixPath = {type:"VOXEL", x:1,y:2};

      expect (() => {renderer._renderPixPath(context, pixPath);}).toThrowError();

      done();
    });
  });
  describe("#setCursorLocation()", function() {
    it("should set internal coords", function(done) {
      var x = 5, y = 9;
      renderer.setCursorLocation(x, y);

      expect(renderer._cx).toBe(x);
      expect(renderer._cy).toBe(y);
      done();
    });
  });
  describe("#advanceCursor()", function() {
    it("should increment internal x coord", function(done) {
      var x = 5, y = 9;
      renderer.setCursorLocation(x, y);
      var expected = x + CELLWIDTH;
      renderer.advanceCursor(1);

      expect(renderer._cx).toBe(expected);
      done();
    });
    it("should increment internal x coord (2x2)", function(done) {
      var x = 5, y = 9;
      renderer.setCursorLocation(x, y);
      var expected = x + CELLWIDTH * 2;
      renderer.advanceCursor(2);

      expect(renderer._cx).toBe(expected);
      done();
    });
  });
  describe("#setColor()", function() {
    it("should set internal color", function(done) {
      var expected = Color.YELLOW;
      renderer.setColor(expected);
      expect(renderer._color).toBe(expected);
      done();
    });
  });
  describe("#setBackgroundColor()", function() {
    it("should set internal bg color", function(done) {
      var expected = Color.YELLOW;
      renderer.setBackgroundColor(expected);
      expect(renderer._backgroundColor).toBe(expected);
      done();
    });
  });
});
