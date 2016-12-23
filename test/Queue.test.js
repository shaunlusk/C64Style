describe("Queue", function() {
  var q;

  beforeEach(function() {
    q = new C64Style.Queue();
  });

  describe("#push()", function() {
    it("should set element as head", function(done) {
      q.push("item");

      assert(q.head && q.head.elem === "item", "should have set element as head");
      done();
    });
    it("should add item", function(done) {
      q.push("item1");
      q.push("item2");

      assert(q.size() === 2, "should have added element");
      done();
    });
  });
  describe("#pop()", function() {
    it("should return null", function(done) {
      var result = q.pop();

      assert(result === null, "should have returned null");
      done();
    });
    it("should return elements in fifo order", function(done) {
      q.push("item1");
      q.push("item2");
      var result;

      result = q.pop();
      assert(result === "item1", "should have returned item1");
      result = q.pop();
      assert(result === "item2", "should have returned item2");
      done();
    });
  });
  describe("#clear()", function() {
    it("should clear the queue", function(done) {
      q.push("item1");

      q.clear();

      assert(q.size() === 0, "should have cleared");
      done();
    });
  });
  describe("#newIterator()", function() {
    it("should return new iterator", function(done) {
      var result = q.newIterator();

      assert(result instanceof C64Style.QueueIterator, "should have returned queue iterator");
      done();
    });
  });
  describe("#contains()", function() {
    it("should return false (empty queue)", function(done) {
      var result = q.contains("item2");

      assert(result === false, "should have returned false");
      done();
    });
    it("should return false (non-empty queue)", function(done) {
      q.push("item1");

      var result = q.contains("item2");

      assert(result === false, "should have returned false");
      done();
    });
    it("should return false (equals function)", function(done) {
      var item = {
        equals : function() {
          return false;
        }
      };
      q.push(item);

      var result = q.contains("item2");

      assert(result === false, "should have returned false");
      done();
    });
    it("should return true", function(done) {
      q.push("item1");

      var result = q.contains("item1");

      assert(result === true, "should have returned true");
      done();
    });
    it("should return true (equals function)", function(done) {
      var item = {
        equals : function() {
          return true;
        }
      };
      q.push(item);

      var result = q.contains(item);

      assert(result === true, "should have returned true");
      done();
    });
  });
  describe("#getByEquality()", function() {
    it("should return null (empty queue)", function(done) {
      var result = q.getByEquality("item2");

      assert(result === null, "should have returned null");
      done();
    });
    it("should return null (non-empty queue)", function(done) {
      q.push("item1");

      var result = q.getByEquality("item2");

      assert(result === null, "should have returned null");
      done();
    });
    it("should return null (equals function)", function(done) {
      var item = {
        equals : function() {
          return false;
        }
      };
      q.push(item);

      var result = q.getByEquality("item2");

      assert(result === null, "should have returned null");
      done();
    });
    it("should return item", function(done) {
      q.push("item1");

      var result = q.getByEquality("item1");

      assert(result === "item1", "should have returned item1");
      done();
    });
    it("should return item (equals function)", function(done) {
      var item = {
        equals : function() {
          return true;
        }
      };
      q.push(item);

      var result = q.getByEquality(item);

      assert(result === item, "should have returned item");
      done();
    });
  });
});
describe("QueueIterator", function() {
  var item1, item2, qi;
  beforeEach(function() {
    var item1 = {
      elem:"item1",
      next:null
    };
    var item2 = {
      elem:"item2",
      next:item1
    };
    qi = new C64Style.QueueIterator(item2);
  });
  describe("#getCurrent()", function() {
    it("should return null", function(done) {
      qi = new C64Style.QueueIterator(null);
      var result = qi.getCurrent();
      assert(result === null, "should have returned null");
      done();
    });
    it("should return item", function(done) {
      var result = qi.getCurrent();
      assert(result === "item2", "should have returned item2");
      done();
    });
  });
  describe("#next()", function() {
    it("should advance iterator", function(done) {
      qi.next();
      var result = qi.getCurrent();
      assert(result === "item1", "should have returned item1");
      done();
    });
  });
});
