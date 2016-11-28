describe("GfxElementZIndexComparable", function() {
  var zIndexComparable;
  beforeEach(function(){
    zIndexComparable = new C64Style.GfxElementZIndexComparable();
  });
  describe("#getElement()", function() {
    it("should return element", function(done) {
      zIndexComparable._parentElement = 1;

      var result = zIndexComparable.getElement();

      assert(result === zIndexComparable._parentElement, "should have returned parent element");
      done();
    });
  });
  describe("#compareTo()", function() {
    it("should return -1", function(done) {
      zIndexComparable._parentElement = {
        getZIndex : function() {return 0;}
      };
      var other = new C64Style.GfxElementZIndexComparable({
        getZIndex : function() {return 1;}
      });
      var expected = -1;
      var result = zIndexComparable.compareTo(other);

      assert(result === expected, "compareTo Failed. expected " + expected + ", actual " + result);
      done();
    });
    it("should return 0", function(done) {
      zIndexComparable._parentElement = {
        getZIndex : function() {return 0;}
      };
      var other = new C64Style.GfxElementZIndexComparable({
        getZIndex : function() {return 0;}
      });
      var expected = 0;
      var result = zIndexComparable.compareTo(other);

      assert(result === expected, "compareTo Failed. expected " + expected + ", actual " + result);
      done();
    });
    it("should return 1", function(done) {
      zIndexComparable._parentElement = {
        getZIndex : function() {return 2;}
      };
      var other = new C64Style.GfxElementZIndexComparable({
        getZIndex : function() {return 1;}
      });
      var expected = 1;
      var result = zIndexComparable.compareTo(other);

      assert(result === expected, "compareTo Failed. expected " + expected + ", actual " + result);
      done();
    });
  });
  describe("#equals()", function() {
    it("should return true", function(done) {
      zIndexComparable._parentElement = {
        getZIndex : function() {return 1;}
      };
      var other = new C64Style.GfxElementZIndexComparable({
        getZIndex : function() {return 1;}
      });
      var expected = true;
      var result = zIndexComparable.equals(other);

      assert(result === expected, "equals Failed. expected " + expected + ", actual " + result);
      done();
    });
    it("should return false", function(done) {
      zIndexComparable._parentElement = {
        getZIndex : function() {return 1;}
      };
      var other = new C64Style.GfxElementZIndexComparable({
        getZIndex : function() {return 2;}
      });
      var expected = false;
      var result = zIndexComparable.equals(other);

      assert(result === expected, "equals Failed. expected " + expected + ", actual " + result);
      done();
    });
  });
  describe("#getKey()", function() {
    it("should return id", function(done) {
      zIndexComparable._parentElement = {
        getId:function() {return 3;}
      };

      var expected = 3;
      var result = zIndexComparable.getKey();

      assert(result === expected, "getKey Failed. expected " + expected + ", actual " + result);
      done();
    });
  });
});
