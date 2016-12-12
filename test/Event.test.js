describe("Event", function() {
  describe("constructor", function() {
    it("should accept injected time", function(done) {
      var type = "TEST";
      var data = {};
      var time = 10;
      var event = new C64Style.Event(type, data, time);
      assert(event.time === time, "should have accepted time");
      done();
    });
    it("should provide default time", function(done) {
      var type = "TEST";
      var data = {};
      var event = new C64Style.Event(type, data);
      assert(event.time !== undefined && event.time !== null, "should have default time");
      done();
    });
  });
});
