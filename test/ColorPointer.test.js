describe("ColorPointer", function() {
  describe("constructor", function() {
    it("should accept injected color", function(done){
      var expected = C64Style.Color.ORANGE;
      var cpointer = new C64Style.ColorPointer(expected);
      assert(cpointer.currentColor === expected, "should have set current color");
      done();
    });
    it("should provide default color", function(done){
      var cpointer = new C64Style.ColorPointer();
      assert(cpointer.currentColor !== undefined && cpointer.currentColor !== null, "should have set current color");
      done();
    });
  });
  describe("#getColor()", function() {
    it("should get current color", function(done){
      var expected = C64Style.Color.YELLOW;
      var cpointer = new C64Style.ColorPointer(expected);
      var result = cpointer.getColor();
      assert(result === expected, "should have returned current color");
      done();
    });
  });
  describe("#setColor()", function() {
    it("should get current color", function(done){
      var expected = C64Style.Color.GREEN;
      var cpointer = new C64Style.ColorPointer(C64Style.Color.GREY);
      cpointer.setColor(expected);
      var result = cpointer.getColor();
      assert(result === expected, "should have returned current color");
      done();
    });
  });
});
