describe("UniquePriorityQueue", function() {
  var q, element1;
  beforeEach(function() {
    element1 = {
      getKey : function() {return "key1";},
      value : 0,
      compareTo : function(other) {return this.value > other.value ? 1 : this.value === other.value ? 0 : -1;},
      equals : function(other) {return this.value === other.value;}
    };
    element2 = {
      getKey : function() {return "key2";},
      value : 1,
      compareTo : function(other) {return this.value > other.value ? 1 : this.value === other.value ? 0 : -1;},
      equals : function(other) {return this.value === other.value;}
    };
    element3 = {
      getKey : function() {return "key3";},
      value : 1,
      compareTo : function(other) {return this.value > other.value ? 1 : this.value === other.value ? 0 : -1;},
      equals : function(other) {return this.value === other.value;}
    };
    q = new UniquePriorityQueue();
  });
  describe("#insert()", function() {
    it("should add element to queue", function(done) {
      q.insert(element1);

      assert(q.size() === 1, "should have added element to queue");
      done();
    });
    it("should add element to queue", function(done) {
      q.insert(element1);
      q.insert(element2);

      assert(q.size() === 2, "should have added element to queue");
      done();
    });
    it("should not add non-unique element to queue", function(done) {
      q.insert(element1);
      q.insert(element1);

      assert(q.size() === 1, "should have added element to queue");
      done();
    });
  });
  describe("#clear()", function() {
    it("should clear", function(done) {
      q.insert(element1);
      q.insert(element2);

      q.clear();
      assert(q.size() === 0, "should have cleared queue");

      q.insert(element1);
      assert(q.size() === 1, "clearing should have permitted element to be added to queue");
      done();
    });
  });
  describe("#extractMax()", function() {
    it("should remove max element", function(done) {
      q.insert(element1);
      q.insert(element2);

      var result = q.extractMax();

      assert(q.size() === 1, "should have removed one element");
      assert(result.getKey() === "key1", "should have removed top element");

      q.insert(element1);
      assert(q.size() === 2, "clearing should have permitted element to be added to queue");

      done();
    });
    it("should do nothing with empty queue", function(done) {
      var result = q.extractMax();

      assert(q.size() === 0, "should not have altered queue");
      assert(result === null, "should have returned null");

      done();
    });
  });
  describe("#contains()", function() {
    it("should return true", function(done) {
      q.insert(element1);

      var result = q.contains(element1);

      assert(result === true, "should have returned true");
      done();
    });
    it("should return false", function(done) {
      q.insert(element1);

      var result = q.contains(element2);

      assert(result === false, "should have returned false");
      done();
    });
  });
  describe("#remove()", function() {
    it("should remove element", function(done) {
      q.insert(element1);

      q.remove(element1);

      assert(q.contains(element1) === false, "should have removed element");
      done();
    });
    it("should do nothing if element not in queue", function(done) {
      q.insert(element2);

      q.remove(element1);

      assert(q.size() === 1, "queue size should have remained 1");
      done();
    });
  });
});
