describe("TextButton", function() {
  var button, screenContext, parentLayer, props;

  beforeEach(function() {
    screenContext = C64Style.Mocks.getMockScreen();
    parentLayer = {
      getCanvasContext : function() {
        return {};
      }
    };
    props = {
      text : "text",
      characterRenderer : C64Style.Mocks.getMockCharacterRenderer()
    };
    button = new C64Style.TextButton(screenContext, parentLayer, props);
  });

  describe("#_setWidth()", function() {
    it("should set lastWidth and width", function(done) {
      button._text = "test text";

      button._setWidth();

      var expected = (button._text.length + 2) * C64Style.CELLWIDTH;
      assert(button.getWidth() === expected, "should have set width. actual: " + button.getWidth() + ", expected: " + expected);
      expected = (props.text.length + 2) * C64Style.CELLWIDTH;
      assert(button.getLastWidth() === expected, "should have set width. actual: " + button.getLastWidth() + ", expected: " + expected);
      done();
    });
    it("should set lastWidth and for symbol", function(done) {
      button._text = null;

      button._setWidth();

      var expected = 3 * C64Style.CELLWIDTH;
      assert(button.getWidth() === expected, "should have set width. actual: " + button.getWidth() + ", expected: " + expected);
      expected = (props.text.length + 2) * C64Style.CELLWIDTH;
      assert(button.getLastWidth() === expected, "should have set width. actual: " + button.getLastWidth() + ", expected: " + expected);
      done();
    });
  });
  describe("#render()", function() {
    it("should return if hidden", function(done) {
      var calledIt = false;
      button.drawTextButton = function() {calledIt = true;};
      button.setHidden(true);

      button.render(1,1);

      assert(calledIt === false, "should have returned");
      done();
    });
    it("should return if not dirty", function(done) {
      var calledIt = false;
      button.drawTextButton = function() {calledIt = true;};
      button.setDirty(false);

      button.render(1,1);

      assert(calledIt === false, "should have returned");
      done();
    });
    it("should call drawTextButton", function(done) {
      var calledIt = false;
      button.drawTextButton = function() {calledIt = true;};

      button.render(1,1);

      assert(calledIt === true, "should called drawTextButton");
      done();
    });
  });
  describe("#drawTextButton()", function() {
    it("should draw when mouse is over", function(done) {
      button._mouseIsOver = true;

      button.drawTextButton();

      assert(button._characterRenderer.calledRenderSymbol !== undefined && button._characterRenderer.calledRenderSymbol !== null, "should have called render symbol");
      done();
    });
    it("should draw", function(done) {
      button.drawTextButton();

      assert(button._characterRenderer.calledRenderSymbol !== undefined && button._characterRenderer.calledRenderSymbol !== null, "should have called render symbol");
      done();
    });
  });
});
