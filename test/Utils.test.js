describe("Utils", function() {
  describe("#linSearch()", function() {
    it("should return index when element is first in list", function(done) {
      var list = [];
      list.push(
        {key1:"some value",key2:"other value"},
        {key1:"diff value",key2:"another value"},
        {key1:"third value",key2:"key2 third value"}
      );
      var efn = function(a, b) { return a.key1 === b;};
      var result = C64Style.linSearch(list,"some value", efn);
      assert(result === 0, "should have returned 0 (returned " + result + ")");
      done();
    });
    it("should return index when element is last in list", function(done) {
      var list = [];
      list.push(
        {key1:"some value",key2:"other value"},
        {key1:"diff value",key2:"another value"},
        {key1:"third value",key2:"key2 third value"}
      );
      var efn = function(a, b) { return a.key2 === b;};
      var result = C64Style.linSearch(list,"key2 third value", efn);
      assert(result === 2, "should have returned 2 (returned " + result + ")");
      done();
    });
    it("should return index when element is somehwere in middle of list", function(done) {
      var list = [];
      list.push(
        {key1:"some value",key2:"other value"},
        {key1:3,key2:"another value"},
        {key1:"third value",key2:"key2 third value"}
      );
      var efn = function(a, b) { return a.key1 === b;};
      var result = C64Style.linSearch(list,3, efn);
      assert(result === 1, "should have returned 1 (returned " + result + ")");
      done();
    });
    it("should return -1 when element is not in list", function(done) {
      var list = [];
      list.push(
        {key1:"some value",key2:"other value"},
        {key1:"diff value",key2:"another value"},
        {key1:"third value",key2:"key2 third value"}
      );
      var efn = function(a, b) { return a.key1 === b;};
      var result = C64Style.linSearch(list,"some key not in list", efn);
      assert(result === -1, "should have returned -1 (returned " + result + ")");
      done();
    });
    it("should return -1 when key is not in list", function(done) {
      var list = [];
      list.push(
        {key1:"some value",key2:"other value"},
        {key1:"diff value",key2:"another value"},
        {key1:"third value",key2:"key2 third value"}
      );
      var efn = function(a, b) { return a.nonexistentkey === b;};
      var result = C64Style.linSearch(list,"some key not in list", efn);
      assert(result === -1, "should have returned -1 (returned " + result + ")");
      done();
    });
  });
});
