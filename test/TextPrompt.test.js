describe("TextPrompt", function() {
  describe("#reset()", function() {
    it("should reset things", function(done) {
      var prompt = getTextPrompt();
      prompt._input.push("a");

      prompt.reset();

      assert(prompt._input.length === 0, "should have reset input");
      done();
    });
  });
  describe("#prompt()", function() {
    it("should set cursorXOrigin", function(done) {
      var prompt = getTextPrompt();
      var inputPrompt = "Input Prompt:";
      var x = 0;
      var y = 5;
      expected = inputPrompt.length + x;

      prompt.prompt(inputPrompt, x, y);

      assert(prompt._cursorXOrigin === expected, "should have set cursorXOrigin (actual:" + prompt._cursorXOrigin + ", expected: " + expected +")");
      done();
    });
    it("should set cursorX", function(done) {
      var prompt = getTextPrompt();
      var inputPrompt = "Input Prompt:";
      var x = 3;
      var y = 5;
      expected = inputPrompt.length + x;

      prompt.prompt(inputPrompt, x, y);

      assert(prompt._cursorX === expected, "should have set cursorXOrigin (actual:" + prompt._cursorXOrigin + ", expected: " + expected +")");
      done();
    });
    it("should call writeText on parentLayer", function(done) {
      var prompt = getTextPrompt();
      var inputPrompt = "Input Prompt:";
      var x = 3;
      var y = 5;
      prompt._parentLayer.writeText = function(text) {
        this.text = text;
      };

      prompt.prompt(inputPrompt, x, y);

      assert(prompt._parentLayer.text === inputPrompt, "should have written text (actual:" + prompt._parentLayer.text + ", expected: \"" + inputPrompt +"\")");
      done();
    });
    it("should call render", function(done) {
      var prompt = getTextPrompt();
      var inputPrompt = "Input Prompt:";
      var x = 3;
      var y = 5;
      prompt.render = function() {
        this.calledIt = true;
      };

      prompt.prompt(inputPrompt, x, y);

      assert(prompt.calledIt === true, "should have called render");
      done();
    });
    it("should return prompt", function(done) {
      var prompt = getTextPrompt();
      var inputPrompt = "Input Prompt:";
      var x = 3;
      var y = 5;

      var p = prompt.prompt(inputPrompt, x, y);

      assert(p === prompt, "should have returned prompt");
      done();
    });
  });
  describe("#update()", function() {
    it("should not increase elapsed if not on", function(done) {
      var prompt = getTextPrompt();

      prompt.update(10,10);

      assert(prompt._elapsed === 0, "should not have increased elapsed");
      done();
    });
    it("should increase elapsed if on", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;

      prompt.update(10,10);

      assert(prompt._elapsed === 10, "should have increased elapsed");
      done();
    });
    it("should subtract flash interval from elapsed", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      var diff = 2001;
      var expected = diff % prompt._flashInterval;

      prompt.update(10000,diff);

      assert(prompt._elapsed === expected, "should have subtracted flash interval from elapsed");
      done();
    });
    it("should turn cursor on when elapsed = flash interval and cursor off", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      var diff = prompt._flashInterval;

      prompt.update(10000,diff);

      assert(prompt._cursorOn === true, "should turn cursor on");
      done();
    });
    it("should turn cursor on when elapsed > flash interval and cursor off", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      var diff = prompt._flashInterval + 1;

      prompt.update(10000,diff);

      assert(prompt._cursorOn === true, "should turn cursor on");
      done();
    });
    it("should turn cursor off when elapsed = flash interval and cursor on", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      prompt._cursorOn = true;
      var diff = prompt._flashInterval;

      prompt.update(10000,diff);

      assert(prompt._cursorOn === false, "should turn cursor off");
      done();
    });
  });
  describe("#render()", function() {
    it("should return when not on", function(done) {
      var prompt = getTextPrompt();
      prompt._on = false;
      prompt.drawCursor = function() {this.calledDrawCursor = true;};
      prompt.clearCursor = function() {this.calledClearCursor = true;};

      prompt.render();

      assert(prompt.calledDrawCursor === undefined, "should not call drawCursor");
      assert(prompt.calledClearCursor === undefined, "should not call clearcursor");
      done();
    });
    it("should call draw cursor if cursor on", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      prompt._cursorOn = true;
      prompt.drawCursor = function() {this.calledDrawCursor = true;};
      prompt.clearCursor = function() {this.calledClearCursor = true;};

      prompt.render();

      assert(prompt.calledDrawCursor === true, "should call drawCursor");
      assert(prompt.calledClearCursor === undefined, "should not call clearcursor");
      done();
    });
    it("should call clear cursor if cursor on", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      prompt._cursorOn = false;
      prompt.drawCursor = function() {this.calledDrawCursor = true;};
      prompt.clearCursor = function() {this.calledClearCursor = true;};

      prompt.render();

      assert(prompt.calledDrawCursor === undefined, "should not call drawCursor");
      assert(prompt.calledClearCursor === true, "should call clearcursor");
      done();
    });
  });
  describe("#getInput()", function() {
    it("should return string of input characters", function(done) {
      var prompt = getTextPrompt();
      prompt._input = ['c','h','e','c','k'];
      var expected = "check";

      var input = prompt.getInput();

      assert(input === expected, "should return input (actual: " + input + ", expected: "+ expected +")");
      done();
    });
    it("should return empty string", function(done) {
      var prompt = getTextPrompt();
      prompt._input = [];
      var expected = "";

      var input = prompt.getInput();

      assert(input === expected, "should return input (actual: " + input + ", expected: "+ expected +")");
      done();
    });
  });
  describe("#clearInput()", function() {
    it("should call clearLength", function(done) {
      var prompt = getTextPrompt();
      prompt._parentLayer.clearLength = function() {
        this.calledIt = true;
      };

      prompt.clearInput();

      assert(prompt._parentLayer.calledIt === true, "should return call clear length");
      done();
    });
  });
});

function getTextPrompt(props) {
  props = props || {};
  var prompt = new C64Style.TextPrompt(C64Style.Mocks.getMockScreen(), C64Style.Mocks.getMockTextLayer(), props);
  return prompt;
}
