describe("TextLayer", function() {
  var layer, screenContext, characterRenderer, textPromp, canvasContext, props;

  beforeEach(function() {
    screenContext = C64Style.Mocks.getMockScreen();
    canvasContext = C64Style.Mocks.getMockCanvasContext();
    var canvas = {
      getContext : function() {
        return canvasContext;
      }
    };
    characterRenderer = C64Style.Mocks.getMockCharacterRenderer();
    textPrompt = {
      update : function(time,diff) {
        this.calledUpdate = {time:time,diff:diff};
      },
      render : function() {this.calledRender = true;},
      prompt : function(prompt, x, y, color, maxLength, callback) {
        this.prompt = prompt;
      }
    };
    props = {
      text : "text",
      characterRenderer : characterRenderer,
      textPrompt : textPrompt
    };
    layer = new C64Style.TextLayer(screenContext, canvas, props);
  });

  describe("#update()", function() {
    it("should call textPrompt update", function(done) {
      layer.update(1,1);

      assert(textPrompt.calledUpdate.diff === 1, "should have called update");
      done();
    });
  });
  describe("#render()", function() {
    it("should call textprompt render", function(done) {
      layer.render();

      assert(textPrompt.calledRender === true, "should have called textPrompt render");
      done();
    });
    it("should clear pending string area", function(done) {
      var calledClearLength = {};
      layer.writeText("string", 0, 0, C64Style.Color.WHITE, C64Style.Color.BLACK);
      layer.clearLength = function(x,y, length) {calledClearLength = {x:x,y:y,length:length};};

      layer.render();

      assert(calledClearLength.length === 6, "should have cleared text length");
      done();
    });
    it("should render string", function(done) {
      layer.writeText("string", 0, 0, C64Style.Color.WHITE, C64Style.Color.BLACK);

      layer.render();

      assert(characterRenderer.calledRenderString.text === "string", "should have rendered text");
      done();
    });
    it("should clear pending symbol area", function(done) {
      var calledClearLength = {};
      layer.drawSymbol("string", 0, 0, C64Style.Color.WHITE, C64Style.Color.BLACK);
      layer.clearLength = function(x,y, length) {calledClearLength = {x:x,y:y,length:length};};

      layer.render();

      assert(calledClearLength !== null && calledClearLength.length === undefined, "should have cleared symbol length");
      done();
    });
    it("should render symbol", function(done) {
      layer.drawSymbol("string", 0, 0, C64Style.Color.WHITE, C64Style.Color.BLACK);

      layer.render();

      assert(characterRenderer.calledRenderSymbol.char === "string", "should have rendered symbol");
      done();
    });
    it("should clear pending stings", function(done) {
      layer.drawSymbol("string", 0, 0, C64Style.Color.WHITE, C64Style.Color.BLACK);

      layer.render();

      assert(layer._pendingTextStrings.length === 0, "should have cleared pending strings");
      done();
    });
  });
  describe("#clearLength()", function() {
    it("should clear specified length", function(done) {
      layer.clearLength(0,0,5);

      assert(characterRenderer.calledClearRect.length === 5, "should have called clear length with specified length");
      done();
    });
    it("should clear length", function(done) {
      layer.clearLength(0,0);

      assert(characterRenderer.calledClearRect.length === 1, "should have called clear length with 1 length");
      done();
    });
  });
  describe("#writeText()", function() {
    it("should add pending string", function(done) {
      layer.writeText("new text",0,0,C64Style.Color.BLACK, C64Style.Color.WHITE);

      assert(layer._pendingTextStrings.length === 1, "should have added pending string");
      assert(layer._pendingTextStrings[0].string === "new text", "should have added pending string");
      done();
    });
  });
  describe("#drawSymbol()", function() {
    it("should add pending string", function(done) {
      layer.drawSymbol("SYMBOL",0,0,C64Style.Color.BLACK, C64Style.Color.WHITE);

      assert(layer._pendingTextStrings.length === 1, "should have added pending string");
      assert(layer._pendingTextStrings[0].pixMapId === "SYMBOL", "should have added pending string");
      done();
    });
  });
  describe("#getTextPrompt()", function() {
    it("should return text prompt", function(done) {
      var result = layer.getTextPrompt();

      assert(result === textPrompt, "should have returned text prompt");
      done();
    });
  });
  describe("#prompt()", function() {
    it("should call prompt on text prompt", function(done) {
      layer.prompt("input?", 1,2, C64Style.Color.ORANGE, 5);

      assert(textPrompt.prompt === "input?", "should have called prompt on textPrompt");
      done();
    });
  });
});
