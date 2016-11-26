describe("GfxElement", function() {
  var element;

  before(function() {
    element = getGfxElement();
  });

  describe("#getId()", function() {
    it("should return element id", function() {
      var id = element.getId();
      assert(id);
    });
  });
  describe("#isDirty()", function() {
    it("should true if dirty", function() {
      element.setDirty(true);
      var dirty = element.isDirty();
      assert(dirty, "should have been dirty");
    });
    it("should true if hasCollision", function() {
      element.setHasCollision(true);
      var dirty = element.isDirty();
      assert(dirty, "should have been dirty");
    });
    it("should true if hadCollisionPreviousFrame", function() {
      element._hadCollisionPreviousFrame = true;
      var dirty = element.isDirty();
      assert(dirty, "should have been dirty");
    });
  });
  describe("#setDirty()", function() {
    it("should set dirty", function() {
      element.setDirty(true);
      var dirty = element._dirty;
      assert(dirty, "should have been dirty");
    });
  });
  describe("#isHidden()", function() {
    it("should return isHidden", function() {
      element.setHidden(false);
      var hidden = element.isHidden();
      assert(!hidden, "should not have been hidden");
    });
  });
  describe("#setHidden()", function() {
    it("should return isHidden", function() {
      element.setHidden(true);
      var hidden = element.isHidden();
      assert(hidden, "should have been hidden");
    });
  });
  describe("#hasCollision()", function() {
    it("should return hasCollision", function() {
      element.setHasCollision(true);
      var hasCollision = element.hasCollision();
      assert(hasCollision, "should have had collision");
    });
  });
  describe("#setHasCollision()", function() {
    it("should set has collision", function() {
      element.setHasCollision(true);
      element.setHasCollision(false);
      var hasCollision = element.hasCollision();
      assert(!hasCollision, "should have had collision");
    });
  });
  describe("#getZIndex()", function() {
    it("should return zindex", function() {
      var expected = 50;
      element.setZIndex(expected);
      var zindex = element.getZIndex();
      assert(zindex, "should have returned zindex");
    });
  });
  describe("#setZIndex()", function() {
    it("should set zindex", function() {
      var expected = 250;
      element.setZIndex(50);
      element.setZIndex(expected);
      var zindex = element.getZIndex();
      assert(zindex, "should have set zindex");
    });
  });
  describe("#getParentLayer()", function() {
    it("should return parentLayer", function() {
      var layer = element.getParentLayer();
      assert(layer);
    });
  });
  describe("#getCanvasContext()", function() {
    it("should return canvas context", function() {
      var context = element.getCanvasContext();
      assert(context);
    });
  });
  describe("#getScreenContext()", function() {
    it("should return screen context", function() {
      var context = element.getScreenContext();
      assert(context);
    });
  });
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
