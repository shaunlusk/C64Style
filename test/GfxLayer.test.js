describe("GfxLayer", function() {
  describe("#addElement()", function() {
    it("should add an element to _elements array.", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var element = {};

      gfxLayer.addElement(element);

      assert(gfxLayer._elements.length === 1, "should have added element");
      done();
    });
  });
  describe("#removeElementById()", function() {
    it("should return the element if it is in the list", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement = C64Style.Mocks.getMockGfxElement({id:"mockElement"});
      gfxLayer.addElement(mockElement);

      var removed = gfxLayer.removeElementById("mockElement");

      assert(removed.id === mockElement.id, "removed element should have been the mockElement");
      done();
    });
    it("should not immediately modify the element list", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement = C64Style.Mocks.getMockGfxElement({id:"mockElement"});
      gfxLayer.addElement(mockElement);

      var removed = gfxLayer.removeElementById("mockElement");

      assert(gfxLayer._elements.length === 1, "elements list should have been 1");
      done();
    });
    it("should mark element dirty", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement = C64Style.Mocks.getMockGfxElement({id:"mockElement"});
      gfxLayer.addElement(mockElement);

      var removed = gfxLayer.removeElementById("mockElement");

      assert(removed.isDirty(), "element should have been marked dirty");
      done();
    });
  });
  describe("#removeElement()", function() {
    it("should call removeElementById with element id", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement = C64Style.Mocks.getMockGfxElement({id:"mockElement"});
      gfxLayer.addElement(mockElement);
      gfxLayer.removeElementById = function(id) {this.calledItWith = id;};

      var removed = gfxLayer.removeElement(mockElement);

      assert(gfxLayer.calledItWith === "mockElement", "elements list should have been 1");
      done();
    });
  });
  describe("#update()", function() {
    it("should call update on each element", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      gfxLayer._handleCollisions = function() {};
      var mockElement = C64Style.Mocks.getMockGfxElement({id:"mockElement"});
      mockElement.update = function() {this.calledIt = true;};
      gfxLayer.addElement(mockElement);
      var mockElement2 = C64Style.Mocks.getMockGfxElement({id:"mockElement2"});
      mockElement2.update = function() {this.calledIt = true;};
      gfxLayer.addElement(mockElement2);

      var removed = gfxLayer.update();

      assert(mockElement.calledIt === true, "should have called update");
      assert(mockElement2.calledIt === true, "should have called update");
      done();
    });
    it("should add dirty elements to dirty elements list", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      gfxLayer._handleCollisions = function() {};
      var mockElement = C64Style.Mocks.getMockGfxElement({id:"mockElement"});
      mockElement.update = function() {return true;};
      gfxLayer.addElement(mockElement);

      var removed = gfxLayer.update();

      assert(gfxLayer._dirtyElements.size() === 1, "should have added element to dirtyElements");
      done();
    });
    it("should not add non-dirty elements to dirty elements list", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      gfxLayer._handleCollisions = function() {};
      var mockElement = C64Style.Mocks.getMockGfxElement({id:"mockElement"});
      mockElement.update = function() {return false;};
      gfxLayer.addElement(mockElement);

      var removed = gfxLayer.update();

      assert(gfxLayer._dirtyElements.size() === 0, "should not have added element to dirtyElements");
      done();
    });
    it("should call _handleCollisions", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      gfxLayer._handleCollisions = function() {this.calledIt = true;};

      var removed = gfxLayer.update();

      assert(gfxLayer.calledIt === true, "should have called _checkForCollisions");
      done();
    });
  });
  describe("#_collisionCheckElementsIfNeeded()", function() {
    it("should skip collision check if both elements dirty", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      gfxLayer._collisionCheck = function() {this.calledIt = true;};
      var mockElement1 = C64Style.Mocks.getMockGfxElement({dirty:true});
      var mockElement2 = C64Style.Mocks.getMockGfxElement({dirty:true});

      gfxLayer._collisionCheckElementsIfNeeded(mockElement1,mockElement2);

      assert(gfxLayer.calledIt === undefined, "should not have called _collisionCheck");
      done();
    });
    it("should skip collision check if both elements hidden", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      gfxLayer._collisionCheck = function() {this.calledIt = true;};
      var mockElement1 = C64Style.Mocks.getMockGfxElement({hidden:true});
      var mockElement2 = C64Style.Mocks.getMockGfxElement({hidden:true});

      gfxLayer._collisionCheckElementsIfNeeded(mockElement1,mockElement2);

      assert(gfxLayer.calledIt === undefined, "should not have called _collisionCheck");
      done();
    });
    it("should call collision check if either element is visible or not dirty", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      gfxLayer._collisionCheck = function() {this.calledIt = true; return false;};
      var mockElement1 = C64Style.Mocks.getMockGfxElement({dirty:true});
      var mockElement2 = C64Style.Mocks.getMockGfxElement({hidden:true});

      gfxLayer._collisionCheckElementsIfNeeded(mockElement1,mockElement2);

      assert(gfxLayer.calledIt === true, "should have called _collisionCheck");
      done();
    });
    it("should not call update on collision if collisionCheck is false", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      gfxLayer._collisionCheck = function() {return false;};
      gfxLayer._updateElementOnCollision = function() {this.calledIt = true;};
      var mockElement1 = C64Style.Mocks.getMockGfxElement();
      var mockElement2 = C64Style.Mocks.getMockGfxElement();

      gfxLayer._collisionCheckElementsIfNeeded(mockElement1,mockElement2);

      assert(gfxLayer.calledIt === undefined, "should not have called _updateElementOnCollision");
      done();
    });
    it("should call updateOnCollision for each element if collisionCheck is true", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      gfxLayer._collisionCheck = function() {return true;};
      gfxLayer.calledItCount = 0;
      gfxLayer._updateElementOnCollision = function() {this.calledItCount++;};
      var mockElement1 = C64Style.Mocks.getMockGfxElement();
      var mockElement2 = C64Style.Mocks.getMockGfxElement();

      gfxLayer._collisionCheckElementsIfNeeded(mockElement1,mockElement2);

      assert(gfxLayer.calledItCount === 2, "should have called _updateElementOnCollision");
      done();
    });
  });
  describe("#_collisionCheck()", function() {
    it("should return true if elements collide", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement1 = C64Style.Mocks.getMockGfxElement();
      mockElement1.collidesWith = function() {return true;};
      var mockElement2 = C64Style.Mocks.getMockGfxElement();
      mockElement2.collidesWith = function() {return true;};

      var result = gfxLayer._collisionCheck(mockElement1,mockElement2);

      assert(result === true, "should have returned true");
      done();
    });
  });
});
