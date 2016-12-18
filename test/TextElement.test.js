describe("TextElement", function() {
  var element, screenContext, parentLayer, props, canvasContext, characterRenderer;

  beforeEach(function() {
    screenContext = C64Style.Mocks.getMockScreen();
    canvasContext = {
      clearRect : function() {
        this.calledClearRect = true;
      }
    };
    parentLayer = {
      getCanvasContext : function() {
        return canvasContext;
      }
    };
    characterRenderer = C64Style.Mocks.getMockCharacterRenderer();
    props = {
      text : "text",
      characterRenderer : characterRenderer
    };
    element = new C64Style.TextElement(screenContext, parentLayer, props);
  });

  describe("#setText()", function() {
    it("should set text", function(done) {
      var expected = "newText";

      element.setText(expected);

      assert(element.getText() === expected, "should have set text");
      done();
    });
    it("should nullify symbol", function(done) {
      var expected = "newText";
      element._symbolName = "SYMBOL";

      element.setText(expected);

      assert(element.getSymbolName() === null, "should have nulled symbol");
      done();
    });
    it("should set width", function(done) {
      var calledIt = false;
      element._setWidth = function() {calledIt = true;};

      element.setText("testText");

      assert(calledIt === true, "should have called set width");
      done();
    });
    it("should set dirty", function(done) {
      element.setDirty(false);

      element.setText("testText");

      assert(element.isDirty() === true, "should have set dirty");
      done();
    });
  });
  describe("#setSymbolName()", function() {
    it("should set symbol name", function(done) {
      var expected = "newText";

      element.setSymbolName(expected);

      assert(element.getSymbolName() === expected, "should have set symbol name");
      done();
    });
    it("should nullify text", function(done) {
      var expected = "newText";

      element.setSymbolName(expected);

      assert(element.getText() === null, "should have nulled text");
      done();
    });
    it("should set width", function(done) {
      var calledIt = false;
      element._setWidth = function() {calledIt = true;};

      element.setSymbolName("testText");

      assert(calledIt === true, "should have called set width");
      done();
    });
    it("should set dirty", function(done) {
      element.setDirty(false);

      element.setSymbolName("testText");

      assert(element.isDirty() === true, "should have set dirty");
      done();
    });
  });
  describe("#setColor()", function() {
    it("should set color", function(done) {
      var expected = C64Style.Color.WHITE;

      element.setColor(expected);

      assert(element.getColor() === expected, "should have set color");
      done();
    });
    it("should set dirty", function(done) {
      element.setDirty(false);

      element.setColor(C64Style.Color.WHITE);

      assert(element.isDirty() === true, "should have set dirty");
      done();
    });
  });
  describe("#setBackgroundColor()", function() {
    it("should set backgroundColor", function(done) {
      var expected = C64Style.Color.WHITE;

      element.setBackgroundColor(expected);

      assert(element.getBackgroundColor() === expected, "should have set background color");
      done();
    });
    it("should set dirty", function(done) {
      element.setDirty(false);

      element.setBackgroundColor(C64Style.Color.WHITE);

      assert(element.isDirty() === true, "should have set dirty");
      done();
    });
  });
  describe("#setWidth()", function() {
    it("should set width for text", function(done) {
      var newText = "new text";
      element._text = newText;

      element._setWidth();

      assert(element._lastWidth === props.text.length * C64Style.CELLWIDTH, "should have updated last width");
      assert(element._width === newText.length * C64Style.CELLWIDTH, "should have set width");
      done();
    });
    it("should set width for symbol", function(done) {
      element._text = null;
      element._symbolName = "SYMBOL";

      element._setWidth();

      assert(element._lastWidth === props.text.length * C64Style.CELLWIDTH, "should have updated last width");
      assert(element._width === C64Style.CELLWIDTH, "should have set width");
      done();
    });
  });
  describe("#clear()", function() {
    it("should clear canvas", function(done) {
      element.clear(1,1);

      assert(canvasContext.calledClearRect === true, "should have called clear");
      done();
    });
    it("should clear lastWidth", function(done) {
      element.clear(1,1);

      assert(element._lastWidth === null,"should have cleared lastWidth");
      done();
    });
  });
  describe("#render()", function() {
    it("should return if hidden", function(done) {
      element.setHidden(true);

      element.render(1,1);

      assert("calledRenderString" in characterRenderer === false, "should have returned");
      assert("calledRenderSymbol" in characterRenderer === false, "should have returned");
      done();
    });
    it("should return if not dirty", function(done) {
      element.setDirty(false);

      element.render(1,1);

      assert("calledRenderString" in characterRenderer === false, "should have returned");
      assert("calledRenderSymbol" in characterRenderer === false, "should have returned");
      done();
    });
    it("should render text", function(done) {
      element.render(1,1);

      assert("calledRenderString" in characterRenderer === true, "should have called render string");
      assert("calledRenderSymbol" in characterRenderer === false, "should not have called render symbol");
      done();
    });
    it("should render symbol", function(done) {
      element.setSymbolName("SYMBOL");
      element.render(1,1);

      assert("calledRenderString" in characterRenderer === false, "should not have called render string");
      assert("calledRenderSymbol" in characterRenderer === true, "should have called render symbol");
      done();
    });
  });
});
