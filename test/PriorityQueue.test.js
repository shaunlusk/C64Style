describe("PriorityQueue",function(){
  describe("push pop", function() {
    it("should pop in ascending order", function(done){
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(50) );
      q.push( getPriorityQueueElement(20) );
      q.push( getPriorityQueueElement(10) );
      q.push( getPriorityQueueElement(70) );
      q.push( getPriorityQueueElement(30) );
      q.push( getPriorityQueueElement(40) );
      q.push( getPriorityQueueElement(60) );

      var popCount = 0;
      assert( q.pop().value === 10, "pop should have returned 10 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 20, "pop should have returned 20 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 30, "pop should have returned 30 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 40, "pop should have returned 40 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 50, "pop should have returned 50 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 60, "pop should have returned 60 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 70, "pop should have returned 70 (pop " + (++popCount) + ")" );

      done();
    });
    it("should pop in descending order when invertPriority is set.", function(done){
      var q = new PriorityQueue();
      q.setInvertPriority(true);
      q.push( getPriorityQueueElement(50) );
      q.push( getPriorityQueueElement(20) );
      q.push( getPriorityQueueElement(10) );
      q.push( getPriorityQueueElement(70) );
      q.push( getPriorityQueueElement(30) );
      q.push( getPriorityQueueElement(40) );
      q.push( getPriorityQueueElement(60) );

      var popCount = 0;
      assert( q.pop().value === 70, "pop should have returned 70 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 60, "pop should have returned 60 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 50, "pop should have returned 50 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 40, "pop should have returned 40 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 30, "pop should have returned 30 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 20, "pop should have returned 20 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 10, "pop should have returned 10 (pop " + (++popCount) + ")" );

      done();
    });
    it("should return null when queue is empty.", function(done){
      var q = new PriorityQueue();
      assert( q.pop() === null, "should have returned null.");
      done();
    });
  });
  describe("#sort()",function(){
    it("should sort a tiny list ascending", function(done){
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(2) );
      q.push( getPriorityQueueElement(1) );
      //q.sort();
      assert( q.getByIndex(0).value === 1, "sort didn't work. idx[0]: " + q.getByIndex(0) + ", expected 1");
      assert( q.getByIndex(1).value === 2, "sort didn't work. idx[1]: " + q.getByIndex(1) + ", expected 2");
      done();
    });
    it("should sort a tiny list descending", function(done){
      var q = new PriorityQueue();
      q.setInvertPriority(true);
      q.push( getPriorityQueueElement(1) );
      q.push( getPriorityQueueElement(2) );
      //q.sort();
      assert( q.getByIndex(0).value === 2, "sort didn't work. idx[0]: " + q.getByIndex(0) + ", expected 2");
      assert( q.getByIndex(1).value === 1, "sort didn't work. idx[1]: " + q.getByIndex(1) + ", expected 1");
      done();
    });
    it("should sort a larger list ascending", function(done){
      var i;
      var q = new PriorityQueue();
      var arr = [40,48,81,26,67,66,38,76,38,97,45,89,83,40,64,24,75,9,68,84,2,40,89,43,89,95,70,6,2,96,9,80,41,84,78,73,78,18,16,52,90,96,69,30,62,65,69,20,50,73,33,84,57,46,73,22,22,46,97,74,32,8,8,61,76,93,96,90,94,25,85,23,50,85,25,66,3,89,27,26,76,40,74,58,100,39,9,76,38,48,23,56,86,32,21,68,93,62,86,73];
      var sorted = [2,2,3,6,8,8,9,9,9,16,18,20,21,22,22,23,23,24,25,25,26,26,27,30,32,32,33,38,38,38,39,40,40,40,40,41,43,45,46,46,48,48,50,50,52,56,57,58,61,62,62,64,65,66,66,67,68,68,69,69,70,73,73,73,73,74,74,75,76,76,76,76,78,78,80,81,83,84,84,84,85,85,86,86,89,89,89,89,90,90,93,93,94,95,96,96,96,97,97,100];
      for (i = 0; i < arr.length; i++) {
        q.push( getPriorityQueueElement(arr[i]) );
      }

      q.sort();
      for (i = 0; i < sorted.length; i++) {
        assert( q.getByIndex(i).value === sorted[i], "sort didn't work. idx[" + i + "]: " + q.getByIndex(i).value + ", expected " + sorted[i]);
      }

      done();
    });
    it("should sort a list ascending", function(done){
      var i;
      var q = new PriorityQueue();
      var arr = [9,4,8,8,10];
      var sorted = [4,8,8,9,10];
      for (i = 0; i < arr.length; i++) {
        q.push( getPriorityQueueElement(arr[i]) );
      }

      var str = "";
      for (i = 0; i < sorted.length; i++) {
        str +=q.getByIndex(i).value + ",";
      }
      console.log("before " + str);

      q.sort();

      str = "";
      for (i = 0; i < sorted.length; i++) {
        str +=q.getByIndex(i).value + ",";
      }
      console.log("after " + str);

      for (i = 0; i < sorted.length; i++) {
        assert( q.getByIndex(i).value === sorted[i], "sort didn't work. idx[" + i + "]: " + q.getByIndex(i).value + ", expected " + sorted[i]);
      }

      done();
    });
    it("should sort a larger list descending", function(done){
      var q = new PriorityQueue();
      q.setInvertPriority(true);
      var arr = [57,7,88,74,34,97,84,34,57,39,11,41,13,48,41,60,84,89,16,71,100,25,63,12,44,56,68,72,99,74,4,44,38,30,32,28,8,84,22,15,38,65,93,53,54,90,51,28,10,34,13,19,4,95,70,19,82,30,77,43,56,14,63,18,48,23,26,5,23,6,38,70,43,48,100,57,59,12,65,61,44,24,49,42,60,68,72,20,55,3,75,78,59,83,94,76,29,99,95,79];
      var sorted = [100,100,99,99,97,95,95,94,93,90,89,88,84,84,84,83,82,79,78,77,76,75,74,74,72,72,71,70,70,68,68,65,65,63,63,61,60,60,59,59,57,57,57,56,56,55,54,53,51,49,48,48,48,44,44,44,43,43,42,41,41,39,38,38,38,34,34,34,32,30,30,29,28,28,26,25,24,23,23,22,20,19,19,18,16,15,14,13,13,12,12,11,10,8,7,6,5,4,4,3];
      for (var i = 0; i < arr.length; i++) {
        q.push( getPriorityQueueElement(arr[i]) );
      }

      q.sort();
      for (i = 0; i < arr.length; i++) {
        assert( q.getByIndex(i).value === sorted[i], "sort didn't work. idx[" + i + "]: " + q.getByIndex(i).value + ", expected " + sorted[i]);
      }
      done();
    });
  });
  describe("#setInvertPriority()", function(){
    it("should reorder queue descending when set true.", function(done){
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(1) );
      q.push( getPriorityQueueElement(2) );
      q.push( getPriorityQueueElement(3) );
      q.setInvertPriority(true);
      var e = q.peek();
      assert( e.value === 3, "queue did not reorder. peek: " + e + ", expected 3");
      done();
    });
    it("should reorder queue ascending when set false.", function(done){
      var q = new PriorityQueue();
      q.setInvertPriority(true);
      q.push( getPriorityQueueElement(3) );
      q.push( getPriorityQueueElement(2) );
      q.push( getPriorityQueueElement(1) );

      q.setInvertPriority(false);
      var e = q.peek();
      assert( e.value === 1, "queue did not reorder. peek: " + e + ", expected 1");
      done();
    });
  });
  describe("#increaseKey()", function() {
    it("it should increase the priority of the element", function(done) {
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(1) );
      var e = getPriorityQueueElement(8);
      q.push( e );
      q.push( getPriorityQueueElement(3) );
      q.push( getPriorityQueueElement(4) );
      q.push( getPriorityQueueElement(5) );

      assert( q._a[0].value === 1, "queue had bad order. expected a[0]=1; actual:" + q._a[0].value);
      assert( q._a[1].value === 4, "queue had bad order. expected a[1]=3; actual:" + q._a[1].value);
      assert( q._a[2].value === 3, "queue had bad order. expected a[2]=4; actual:" + q._a[2].value);

      e.value = 2;
      var idx = q.indexOf(e);
      q.increaseKey(idx);
      q.pop();
      assert( q.peek().value === 2, "queue had bad order");
      done();
    });
    it("it should increase the priority of the element when the priority is inverted", function(done){
      var q = new PriorityQueue();
      q.setInvertPriority(true);
      q.push( getPriorityQueueElement(1) );
      var e = getPriorityQueueElement(2);
      q.push( e );
      q.push( getPriorityQueueElement(3) );
      q.push( getPriorityQueueElement(4) );
      q.push( getPriorityQueueElement(8) );

      assert( q._a[0].value === 8, "queue had bad order. expected a[0]=8; actual:" + q._a[0].value);

      e.value = 5;
      var idx = q.indexOf(e);
      q.increaseKey(idx);
      q.pop();
      assert( q.peek().value === 5, "queue had bad order");
      done();
    });
  });
  describe("#decreaseKey()", function(){
    it("it should decrease the priority of the element", function(done) {
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(1) );
      var e = getPriorityQueueElement(2);
      q.push( e );
      q.push( getPriorityQueueElement(3) );
      q.push( getPriorityQueueElement(4) );
      q.push( getPriorityQueueElement(5) );

      assert( q._a[0].value === 1, "queue had bad order. expected a[0]=1; actual:" + q._a[0].value);
      assert( q._a[1].value === 2, "queue had bad order. expected a[1]=2; actual:" + q._a[1].value);
      assert( q._a[2].value === 3, "queue had bad order. expected a[2]=3; actual:" + q._a[2].value);

      e.value = 8;
      var idx = q.indexOf(e);
      q.decreaseKey(idx);
      assert( q._a[3].value === 8, "queue had bad order");
      done();
    });
    it("it should decrease the priority of the element when the priority is inverted", function(done){
      var q = new PriorityQueue();
      q.setInvertPriority(true);
      q.push( getPriorityQueueElement(2) );
      var e = getPriorityQueueElement(5);
      q.push( e );
      q.push( getPriorityQueueElement(3) );
      q.push( getPriorityQueueElement(4) );
      q.push( getPriorityQueueElement(8) );

      assert( q._a[0].value === 8, "queue had bad order. expected a[0]=8; actual:" + q._a[0].value);

      e.value = 1;
      var idx = q.indexOf(e);
      q.decreaseKey(idx);
      assert( q._a[4].value === 1, "queue had bad order");
      done();
    });
  });
  describe("#getByIndex()", function() {
    it("should return the element at the specified index.", function(done){
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(1) );
      q.push( getPriorityQueueElement(2) );
      q.push( getPriorityQueueElement(3) );

      var e = q.getByIndex(1);

      assert( e.value === 2 , "wrong element retrieved." );
      done();
    });
    it("should throw exception when index is out of bounds", function(done){
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(1) );
      q.push( getPriorityQueueElement(2) );
      q.push( getPriorityQueueElement(3) );

      var e = null;
      var threwIt = throwsError(function() {
        e = q.getByIndex(4);
      });
      assert( threwIt === true , "didn't throw exception." );
      assert( e === null , "retrieved an element??" );
      done();
    });
    it("should throw exception when index is < 0", function(done){
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(1) );
      q.push( getPriorityQueueElement(2) );
      q.push( getPriorityQueueElement(3) );

      var e = null;
      var threwIt = throwsError(function() {
        e = q.getByIndex(-1);
      });
      assert( threwIt === true , "didn't throw exception." );
      assert( e === null , "retrieved an element??" );
      done();
    });
  });
  describe("#getByEquality()", function() {
    it("should return the element when it is found", function(done){
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(1) );
      q.push( getPriorityQueueElement(2) );
      var e = getPriorityQueueElement(3);
      q.push( e );
      q.push( getPriorityQueueElement(4) );
      q.push( getPriorityQueueElement(5) );

      var f = q.getByEquality(e);

      assert( e.equals(f) , "wrong element retrieved" );
      done();
    });
    it("should return null when element is not found", function(done){
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(1) );
      q.push( getPriorityQueueElement(2) );
      var e = getPriorityQueueElement(3);
      q.push( getPriorityQueueElement(4) );
      q.push( getPriorityQueueElement(5) );

      var f = q.getByEquality(e);

      assert( f === null , "wrong element retrieved" );
      done();
    });
  });
  describe("#contains()", function() {
    it("should return true when the element is found", function(done){
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(1) );
      q.push( getPriorityQueueElement(2) );
      var e = getPriorityQueueElement(3);
      q.push( e );
      q.push( getPriorityQueueElement(4) );
      q.push( getPriorityQueueElement(5) );

      var f = q.contains(e);

      assert( f === true , "wrong element retrieved" );
      done();
    });
    it("should return false when the element is not found", function(done){
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(1) );
      q.push( getPriorityQueueElement(2) );
      var e = getPriorityQueueElement(3);
      q.push( getPriorityQueueElement(4) );
      q.push( getPriorityQueueElement(5) );

      var f = q.contains(e);

      assert( f === false , "wrong element retrieved" );
      done();
    });
  });
  describe("#_verifyHeap()", function() {
    it("should return true when heap is valid", function(done){
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(1) );
      q.push( getPriorityQueueElement(2) );
      q.push( getPriorityQueueElement(3) );
      q.push( getPriorityQueueElement(4) );
      q.push( getPriorityQueueElement(5) );

      var f = q._verifyHeap();

      assert( f === true , "heap isn't valid.  Or the function didn't work." );
      done();
    });
    it("should return true when heap is valid and priority has been inverted", function(done){
      var q = new PriorityQueue();
      q.setInvertPriority(true);
      q.push( getPriorityQueueElement(1) );
      q.push( getPriorityQueueElement(2) );
      q.push( getPriorityQueueElement(3) );
      q.push( getPriorityQueueElement(4) );
      q.push( getPriorityQueueElement(5) );

      var f = q._verifyHeap();

      assert( f === true , "heap isn't valid.  Or the function didn't work." );
      done();
    });
    it("should return false when heap has been manually tampered with in such a way that it is no longer valid.", function(done){
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(1) );
      q.push( getPriorityQueueElement(2) );
      q.push( getPriorityQueueElement(3) );
      q.push( getPriorityQueueElement(4) );
      q.push( getPriorityQueueElement(5) );

      q._swap(1,4);
      var f = q._verifyHeap();

      assert( f === false , "heap isn't valid.  Or the function didn't work." );
      done();
    });
  });
  describe("#remove()", function() {
    it("should remove the specified element.", function(done){
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(1) );
      q.push( getPriorityQueueElement(2) );
      var e = getPriorityQueueElement(3);
      q.push( e );
      q.push( getPriorityQueueElement(4) );
      q.push( getPriorityQueueElement(5) );

      q.remove(e);
      var f = q.contains(e);

      assert( f === false , "should have returned false (element no longer in queue)" );
      assert( 4 === q.size() , "queue size should not have changed" );
      assert( q._verifyHeap() === true, "heap was not valid after remove.");
      done();
    });
    it("should do nothing if the specified element is not found.", function(done){
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(1) );
      q.push( getPriorityQueueElement(2) );
      var e = getPriorityQueueElement(3);
      q.push( getPriorityQueueElement(4) );
      q.push( getPriorityQueueElement(5) );
      var size = q.size();
      q.remove(e);
      var f = q.contains(e);

      assert( f === false , "should have returned false" );
      assert( size === q.size() , "queue size should not have changed" );
      assert( q._verifyHeap() === true, "heap was not valid after remove.");
      done();
    });
    it("should do nothing no elements in queue.", function(done){
      var q = new PriorityQueue();
      var e = getPriorityQueueElement(3);
      var size = q.size();
      q.remove(e);

      assert( size === q.size() , "queue size should not have changed" );
      assert( q._verifyHeap() === true, "heap was not valid after remove.");
      done();
    });
  });
  describe("#clear()", function() {
    it("should set heap size to 0", function(done) {
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(50) );
      q.push( getPriorityQueueElement(20) );
      q.push( getPriorityQueueElement(10) );
      q.push( getPriorityQueueElement(70) );
      q.push( getPriorityQueueElement(30) );
      q.push( getPriorityQueueElement(40) );
      q.push( getPriorityQueueElement(60) );

      q.clear();

      assert(q.size() === 0, "size should have been 0");

      done();
    });
    it("after clear, peek should return null", function(done) {
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(50) );
      q.push( getPriorityQueueElement(20) );
      q.push( getPriorityQueueElement(10) );
      q.push( getPriorityQueueElement(70) );
      q.push( getPriorityQueueElement(30) );
      q.push( getPriorityQueueElement(40) );
      q.push( getPriorityQueueElement(60) );

      q.clear();

      assert(q.peek() === null, "should have been null");

      done();
    });
    it("after clear, pop should return null", function(done) {
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(50) );
      q.push( getPriorityQueueElement(20) );
      q.push( getPriorityQueueElement(10) );
      q.push( getPriorityQueueElement(70) );
      q.push( getPriorityQueueElement(30) );
      q.push( getPriorityQueueElement(40) );
      q.push( getPriorityQueueElement(60) );

      q.clear();

      assert(q.pop() === null, "should have been null");

      done();
    });
    it("after clear, then push, size should be 1, peek should return newly added element", function(done) {
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(50) );
      q.push( getPriorityQueueElement(20) );
      q.push( getPriorityQueueElement(10) );
      q.push( getPriorityQueueElement(70) );
      q.push( getPriorityQueueElement(30) );
      q.push( getPriorityQueueElement(40) );
      q.push( getPriorityQueueElement(60) );

      q.clear();
      q.push( getPriorityQueueElement(5) );

      assert(q.size() === 1, "size should have been 1");

      done();
    });
    it("after clear, multiple pushes should be ordered properly", function(done) {
      var q = new PriorityQueue();
      q.push( getPriorityQueueElement(50) );
      q.push( getPriorityQueueElement(20) );
      q.push( getPriorityQueueElement(10) );
      q.push( getPriorityQueueElement(70) );
      q.push( getPriorityQueueElement(30) );
      q.push( getPriorityQueueElement(40) );
      q.push( getPriorityQueueElement(60) );

      q.clear();

      q.push( getPriorityQueueElement(50) );
      q.push( getPriorityQueueElement(20) );
      q.push( getPriorityQueueElement(10) );
      q.push( getPriorityQueueElement(70) );
      q.push( getPriorityQueueElement(30) );
      q.push( getPriorityQueueElement(40) );
      q.push( getPriorityQueueElement(60) );

      var popCount = 0;
      assert( q.pop().value === 10, "pop should have returned 10 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 20, "pop should have returned 20 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 30, "pop should have returned 30 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 40, "pop should have returned 40 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 50, "pop should have returned 50 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 60, "pop should have returned 60 (pop " + (++popCount) + ")" );
      assert( q.pop().value === 70, "pop should have returned 70 (pop " + (++popCount) + ")" );

      done();
    });
  });
});

function getPriorityQueueElement(val) {
  var element = {
    value : val,
    compareTo : function(other) {
      if (this.value < other.value) return -1;
      if (this.value === other.value) return 0;
      return 1;
    },
    equals : function(other) {
      return this.value === other.value;
    },
    toString : function() {
      return this.value.toString();
    }
  };
  return element;
}

var dumpToConsole = function (q) {
  for (var i = 0; i < q.a.length; i++) {
    console.log(q.a[i].value);
  }
};
