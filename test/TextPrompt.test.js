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
    it("should clear input", function(done) {
      var prompt = getTextPrompt();
      prompt._input.push('a');

      prompt.clearInput();

      assert(prompt._input.length === 0, "should clear input");
      done();
    });
  });
  describe("#clearPrompt()", function() {
    it("should call clearLength", function(done) {
      var prompt = getTextPrompt();
      prompt._x = 10;
      prompt._y = 12;
      prompt._prompt = "check";
      prompt._cursorXOrigin = prompt._x + prompt._prompt.length;
      prompt._input = "input";
      prompt._parentLayer.callCount = 0;
      prompt._parentLayer.callArgs = [];
      prompt._parentLayer.clearLength = function(x, y, length) {
        this.callCount++;
        this.callArgs.push({x:x, y:y, length:length});
      };

      prompt.clearPrompt();

      assert(prompt._parentLayer.callCount === 2, "should call clearLength");
      assert(prompt._parentLayer.callArgs[0].x === prompt._x, "should call clearLength with proper x value");
      assert(prompt._parentLayer.callArgs[0].y === prompt._y, "should call clearLength with proper y value");
      assert(prompt._parentLayer.callArgs[0].length === prompt._prompt.length, "should call clearLength with proper length value");
      assert(prompt._parentLayer.callArgs[1].x === prompt._cursorXOrigin, "should call clearLength with proper x value");
      assert(prompt._parentLayer.callArgs[1].y === prompt._y, "should call clearLength with proper y value");
      assert(prompt._parentLayer.callArgs[1].length === prompt._input.length + 1, "should call clearLength with proper length value");
      done();
    });
  });
  describe("#clearCursor()", function() {
    it("should call clearLength", function(done) {
      var prompt = getTextPrompt();
      prompt._y = 12;
      prompt._cursorX = 5;
      prompt._parentLayer.callCount = 0;
      prompt._parentLayer.callArgs = [];
      prompt._parentLayer.clearLength = function(x, y, length) {
        this.callCount++;
        this.callArgs.push({x:x, y:y, length:length});
      };

      prompt.clearCursor();

      assert(prompt._parentLayer.callCount === 1, "should call clearLength");
      assert(prompt._parentLayer.callArgs[0].x === prompt._cursorX, "should call clearLength with proper x value");
      assert(prompt._parentLayer.callArgs[0].y === prompt._y, "should call clearLength with proper y value");
      assert(prompt._parentLayer.callArgs[0].length === 1, "should call clearLength with proper length value");
      done();
    });
  });
  describe("#drawCursor()", function() {
    it("should call drawSymbol", function(done) {
      var prompt = getTextPrompt();
      prompt._y = 12;
      prompt._cursorX = 2;
      prompt._color = "WHITE";
      prompt._parentLayer.callCount = 0;
      prompt._parentLayer.callArgs = [];
      prompt._parentLayer.drawSymbol = function(id, x, y, color) {
        this.callCount++;
        this.callArgs.push({id:id, x:x, y:y, color:color});
      };

      prompt.drawCursor();

      assert(prompt._parentLayer.callCount === 1, "should call clearLength");
      assert(prompt._parentLayer.callArgs[0].id === "BLOCK", "should call clearLength with \"BLOCK\" symbol id");
      assert(prompt._parentLayer.callArgs[0].x === prompt._cursorX, "should call clearLength with proper x value");
      assert(prompt._parentLayer.callArgs[0].y === prompt._y, "should call clearLength with proper y value");
      assert(prompt._parentLayer.callArgs[0].color === prompt._color, "should call clearLength with proper length value");
      done();
    });
  });
  describe("#_handleEnterKey()", function() {
    it("should return false if not enter key", function(done) {
      var prompt = getTextPrompt();
      var event = {key:"Any"};

      var result = prompt._handleEnterKey(event);

      assert(result === false, "should have returned false");
      done();
    });
    it("should return true if enter key", function(done) {
      var prompt = getTextPrompt();
      var event = {key:"Enter"};

      var result = prompt._handleEnterKey(event);

      assert(result === true, "should have returned true");
      done();
    });
    it("should call callback if enter key", function(done) {
      var prompt = getTextPrompt();
      prompt._callback = function() {
        this.calledIt = true;
      };
      var event = {key:"Enter"};

      var result = prompt._handleEnterKey(event);

      assert(prompt.calledIt === true, "should have called callback");
      done();
    });
  });
  describe("#_handleBackspaceKey()", function() {
    it("should return false if not backspace key", function(done) {
      var prompt = getTextPrompt();
      var event = {key:"Any"};

      var result = prompt._handleBackspaceKey(event);

      assert(result === false, "should have returned false");
      done();
    });
    it("should return true if backspace key", function(done) {
      var prompt = getTextPrompt();
      var event = {key:"Backspace"};

      var result = prompt._handleBackspaceKey(event);

      assert(result === true, "should have returned true");
      done();
    });
    it("should return remove last input char", function(done) {
      var prompt = getTextPrompt();
      prompt._input = ['c','h'];
      var event = {key:"Backspace"};

      var result = prompt._handleBackspaceKey(event);

      assert(prompt._input.length === 1, "should have removed last char");
      done();
    });
    it("should decrement cursorx", function(done) {
      var prompt = getTextPrompt();
      prompt._cursorX = 5;
      var event = {key:"Backspace"};

      var result = prompt._handleBackspaceKey(event);

      assert(prompt._cursorX === 4, "should have decremented cursorx");
      done();
    });
  });
  describe("#_handleSpaceKey()", function() {
    it("should return false if not space key", function(done) {
      var prompt = getTextPrompt();
      var event = {key:"Any"};

      var result = prompt._handleSpaceKey(event);

      assert(result === false, "should have returned false");
      done();
    });
    it("should return true if space key", function(done) {
      var prompt = getTextPrompt();
      var event = {key:" "};

      var result = prompt._handleSpaceKey(event);

      assert(result === true, "should have returned true");
      done();
    });
    it("should add space to char input", function(done) {
      var prompt = getTextPrompt();
      prompt._input = ['c','h'];
      var event = {key:" "};

      var result = prompt._handleSpaceKey(event);

      assert(prompt._input.length === 3, "should have added space char");
      assert(prompt._input[2] === " ", "should have added space char");
      done();
    });
    it("should increment cursorx", function(done) {
      var prompt = getTextPrompt();
      prompt._cursorX = 5;
      var event = {key:" "};

      var result = prompt._handleSpaceKey(event);

      assert(prompt._cursorX === 6, "should have incremented cursorx");
      done();
    });
  });
  describe("#handleKeyboardEvent()", function() {
    it("should not add key if prompt not on", function(done) {
      var prompt = getTextPrompt();
      prompt._on = false;
      prompt._input = ['a'];
      var event = {key:"b"};

      prompt.handleKeyboardEvent(event);

      assert(prompt._input.length === 1, "should not have added key to input");
      done();
    });
    it("should not add key if input length === maxlength", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      prompt._input = ['a'];
      prompt._maxLength = 1;
      var event = {key:"b"};

      prompt.handleKeyboardEvent(event);

      assert(prompt._input.length === 1, "should not have added key to input");
      done();
    });
    it("should not add key if char not found in map", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      var event = {key:"œ"};

      prompt.handleKeyboardEvent(event);

      assert(prompt._input.length === 0, "should not have added key to input");
      done();
    });
    it("should add key", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      var event = {key:"a"};

      prompt.handleKeyboardEvent(event);

      assert(prompt._input.length === 1, "should have added key to input");
      done();
    });
    it("should increment cursorx", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      prompt._cursorX = 3;
      var event = {key:"a"};

      prompt.handleKeyboardEvent(event);

      assert(prompt._cursorX === 4, "should have incremented cursorx");
      done();
    });
  });
});

function getTextPrompt(props) {
  props = props || {};
  var prompt = new C64Style.TextPrompt(C64Style.Mocks.getMockScreen(), C64Style.Mocks.getMockTextLayer(), props);
  return prompt;
}
