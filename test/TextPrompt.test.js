import TextPrompt from '../src/TextPrompt';
import {Mocks} from './Mocks';

describe("TextPrompt", function() {
  describe("#reset()", function() {
    it("should reset things", function(done) {
      var prompt = getTextPrompt();
      prompt._input.push("a");

      prompt.reset();

      expect(prompt._input.length).toBe(0);
      done();
    });
  });
  describe("#prompt()", function() {
    it("should set cursorXOrigin", function(done) {
      var prompt = getTextPrompt();
      var inputPrompt = "Input Prompt:";
      var x = 0;
      var y = 5;
      var expected = inputPrompt.length + x;

      prompt.prompt(inputPrompt, x, y);

      expect(prompt._cursorXOrigin).toBe(expected);
      done();
    });
    it("should set cursorX", function(done) {
      var prompt = getTextPrompt();
      var inputPrompt = "Input Prompt:";
      var x = 3;
      var y = 5;
      var expected = inputPrompt.length + x;

      prompt.prompt(inputPrompt, x, y);

      expect(prompt._cursorX).toBe(expected);
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

      expect(prompt._parentLayer.text).toBe(inputPrompt);
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

      expect(prompt.calledIt).toBeTruthy();
      done();
    });
    it("should return prompt", function(done) {
      var prompt = getTextPrompt();
      var inputPrompt = "Input Prompt:";
      var x = 3;
      var y = 5;

      var p = prompt.prompt(inputPrompt, x, y);

      expect(p).toBe(prompt);
      done();
    });
  });
  describe("#update()", function() {
    it("should not increase elapsed if not on", function(done) {
      var prompt = getTextPrompt();

      prompt.update(10,10);

      expect(prompt._elapsed).toBe(0);
      done();
    });
    it("should increase elapsed if on", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;

      prompt.update(10,10);

      expect(prompt._elapsed).toBe(10);
      done();
    });
    it("should subtract flash interval from elapsed", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      var diff = 2001;
      var expected = diff % prompt._flashInterval;

      prompt.update(10000,diff);

      expect(prompt._elapsed).toBe(expected);
      done();
    });
    it("should turn cursor on when elapsed = flash interval and cursor off", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      var diff = prompt._flashInterval;

      prompt.update(10000,diff);

      expect(prompt._cursorOn).toBeTruthy();
      done();
    });
    it("should turn cursor on when elapsed > flash interval and cursor off", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      var diff = prompt._flashInterval + 1;

      prompt.update(10000,diff);

      expect(prompt._cursorOn).toBeTruthy();
      done();
    });
    it("should turn cursor off when elapsed = flash interval and cursor on", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      prompt._cursorOn = true;
      var diff = prompt._flashInterval;

      prompt.update(10000,diff);

      expect(prompt._cursorOn).toBeFalsy();
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

      expect(prompt.calledDrawCursor).toBe(undefined);
      expect(prompt.calledClearCursor).toBe(undefined);
      done();
    });
    it("should call draw cursor if cursor on", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      prompt._cursorOn = true;
      prompt.drawCursor = function() {this.calledDrawCursor = true;};
      prompt.clearCursor = function() {this.calledClearCursor = true;};

      prompt.render();

      expect(prompt.calledDrawCursor).toBeTruthy();
      expect(prompt.calledClearCursor).toBe(undefined);
      done();
    });
    it("should call clear cursor if cursor on", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      prompt._cursorOn = false;
      prompt.drawCursor = function() {this.calledDrawCursor = true;};
      prompt.clearCursor = function() {this.calledClearCursor = true;};

      prompt.render();

      expect(prompt.calledDrawCursor).toBe(undefined);
      expect(prompt.calledClearCursor).toBeTruthy();
      done();
    });
  });
  describe("#getInput()", function() {
    it("should return string of input characters", function(done) {
      var prompt = getTextPrompt();
      prompt._input = ['c','h','e','c','k'];
      var expected = "check";

      var input = prompt.getInput();

      expect(input).toBe(expected);
      done();
    });
    it("should return empty string", function(done) {
      var prompt = getTextPrompt();
      prompt._input = [];
      var expected = "";

      var input = prompt.getInput();

      expect(input).toBe(expected);
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

      expect(prompt._parentLayer.calledIt).toBeTruthy();
      done();
    });
    it("should clear input", function(done) {
      var prompt = getTextPrompt();
      prompt._input.push('a');

      prompt.clearInput();

      expect(prompt._input.length).toBe(0);
      done();
    });
  });
  describe("#clearPrompt()", function() {
    it("should call clearLength", function(done) {
      var prompt = getTextPrompt();
      prompt._x = 10;
      prompt._y = 12;
      prompt._text = "check";
      prompt._cursorXOrigin = prompt._x + prompt._text.length;
      prompt._input = ["i","n","p","u","t"];
      prompt._parentLayer.callCount = 0;
      prompt._parentLayer.callArgs = [];
      prompt._parentLayer.clearLength = function(x, y, length) {
        this.callCount++;
        this.callArgs.push({x:x, y:y, length:length});
      };

      prompt.clearPrompt();

      expect(prompt._parentLayer.callCount).toBe(2);
      expect(prompt._parentLayer.callArgs[0].x).toBe(prompt._x);
      expect(prompt._parentLayer.callArgs[0].y).toBe(prompt._y);
      expect(prompt._parentLayer.callArgs[0].length).toBe(prompt._text.length);
      expect(prompt._parentLayer.callArgs[1].x).toBe(prompt._cursorXOrigin);
      expect(prompt._parentLayer.callArgs[1].y).toBe(prompt._y);
      expect(prompt._parentLayer.callArgs[1].length).toBe(prompt._input.length + 1);

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

      expect(prompt._parentLayer.callCount).toBe(1);
      expect(prompt._parentLayer.callArgs[0].x).toBe(prompt._cursorX);
      expect(prompt._parentLayer.callArgs[0].y).toBe(prompt._y);
      expect(prompt._parentLayer.callArgs[0].length).toBe(1);
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

      expect(prompt._parentLayer.callCount).toBe(1);
      expect(prompt._parentLayer.callArgs[0].id).toBe("BLOCK");
      expect(prompt._parentLayer.callArgs[0].x).toBe(prompt._cursorX);
      expect(prompt._parentLayer.callArgs[0].y).toBe(prompt._y);
      expect(prompt._parentLayer.callArgs[0].color).toBe(prompt._color);
      done();
    });
  });
  describe("#_handleEnterKey()", function() {
    it("should return false if not enter key", function(done) {
      var prompt = getTextPrompt();
      var event = {key:"Any"};

      var result = prompt._handleEnterKey(event);

      expect(result).toBeFalsy();
      done();
    });
    it("should return true if enter key", function(done) {
      var prompt = getTextPrompt();
      var event = {key:"Enter"};

      var result = prompt._handleEnterKey(event);

      expect(result).toBeTruthy();
      done();
    });
    it("should call callback if enter key", function(done) {
      var prompt = getTextPrompt();
      prompt._callback = function() {
        this.calledIt = true;
      };
      var event = {key:"Enter"};

      var result = prompt._handleEnterKey(event);

      expect(prompt.calledIt).toBeTruthy();
      done();
    });
  });
  describe("#_handleBackspaceKey()", function() {
    it("should return false if not backspace key", function(done) {
      var prompt = getTextPrompt();
      var event = {key:"Any"};

      var result = prompt._handleBackspaceKey(event);

      expect(result).toBeFalsy();
      done();
    });
    it("should return true if backspace key", function(done) {
      var prompt = getTextPrompt();
      var event = {key:"Backspace"};

      var result = prompt._handleBackspaceKey(event);

      expect(result).toBeTruthy();
      done();
    });
    it("should return remove last input char", function(done) {
      var prompt = getTextPrompt();
      prompt._input = ['c','h'];
      var event = {key:"Backspace"};

      var result = prompt._handleBackspaceKey(event);

      expect(prompt._input.length).toBe(1);
      done();
    });
    it("should decrement cursorx", function(done) {
      var prompt = getTextPrompt();
      prompt._cursorX = 5;
      prompt._input = ["i","n","p","u","t"];
      var event = {key:"Backspace"};

      var result = prompt._handleBackspaceKey(event);

      expect(prompt._cursorX).toBe(4);
      done();
    });
  });
  describe("#_handleSpaceKey()", function() {
    it("should return false if not space key", function(done) {
      var prompt = getTextPrompt();
      var event = {key:"Any"};

      var result = prompt._handleSpaceKey(event);

      expect(result).toBeFalsy();
      done();
    });
    it("should return true if space key", function(done) {
      var prompt = getTextPrompt();
      var event = {key:" "};

      var result = prompt._handleSpaceKey(event);

      expect(result).toBeTruthy();
      done();
    });
    it("should add space to char input", function(done) {
      var prompt = getTextPrompt();
      prompt._input = ['c','h'];
      var event = {key:" "};

      var result = prompt._handleSpaceKey(event);

      expect(prompt._input.length).toBe(3);
      expect(prompt._input[2]).toBe(" ");
      done();
    });
    it("should increment cursorx", function(done) {
      var prompt = getTextPrompt();
      prompt._cursorX = 5;
      var event = {key:" "};

      var result = prompt._handleSpaceKey(event);

      expect(prompt._cursorX).toBe(6);
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

      expect(prompt._input.length).toBe(1);
      done();
    });
    it("should not add key if input length === maxlength", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      prompt._input = ['a'];
      prompt._maxLength = 1;
      var event = {key:"b", preventDefault:function(){}};

      prompt.handleKeyboardEvent(event);

      expect(prompt._input.length).toBe(1);
      done();
    });
    it("should not add key if char not found in map", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      var event = {key:"œ", preventDefault:function(){}};

      prompt.handleKeyboardEvent(event);

      expect(prompt._input.length).toBe(0);
      done();
    });
    it("should add key", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      var event = {key:"a", preventDefault:function(){}};

      prompt.handleKeyboardEvent(event);

      expect(prompt._input.length).toBe(1);
      done();
    });
    it("should increment cursorx", function(done) {
      var prompt = getTextPrompt();
      prompt._on = true;
      prompt._cursorX = 3;
      var event = {key:"a", preventDefault:function(){}};

      prompt.handleKeyboardEvent(event);

      expect(prompt._cursorX).toBe(4);
      done();
    });
  });
});

function getTextPrompt(props) {
  props = props || {
    parentLayer: Mocks.getMockTextLayer(),
    registerKeyHandler : function() {}
  };
  var prompt = new TextPrompt(props);
  return prompt;
}
