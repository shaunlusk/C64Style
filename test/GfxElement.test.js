describe("GfxElement", function() {
  describe("#collidesWithCoordinates()", function() {
    it("should return false if coord x < element x", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithCoordinates(-2,0);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return false if coord x > element x + element width", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithCoordinates(12,0);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return false if coord y < element y", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithCoordinates(0,-2);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return false if coord y > element y + element height", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithCoordinates(0,12);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return true if coords inside element bounds", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithCoordinates(3,3);

      assert(result === true, "should have returned true.");
      done();
    });
    it("should return true if coords touch element bounds", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithCoordinates(11,11);

      assert(result === true, "should have returned true.");
      done();
    });
  });
  describe("#collidesWithX()", function(){
    it("should return false if coord x < element x", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithX(-2);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return false if coord x > element x + element width", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithX(12);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return true if coords x is inside element bounds", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithX(3);

      assert(result === true, "should have returned true.");
      done();
    });
    it("should return true if coord x touches element bounds", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithX(11);

      assert(result === true, "should have returned true.");
      done();
    });
  });
  describe("#collidesWithY()", function(){
    it("should return false if coord y < element y", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithY(-2);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return false if coord y > element y + element height", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithY(12);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return true if coord is inside element bounds", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithY(10);

      assert(result === true, "should have returned true.");
      done();
    });
    it("should return true if coord y touches element bounds", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithY(11);

      assert(result === true, "should have returned true.");
      done();
    });
  });
});

function getGfxElement(props) {
  var element = new C64Style.GfxElement(C64Style.Mocks.getMockScreen(), C64Style.Mocks.getMockLayer(), props);
  return element;
}
