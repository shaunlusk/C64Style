describe("GfxLayer", function() {
  describe("#addElement()", function() {
    it("should add an element to _elements array.", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement = C64Style.Mocks.getMockGfxElement();

      gfxLayer.addElement(mockElement);

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
    it("should mark element hidden", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement = C64Style.Mocks.getMockGfxElement({id:"mockElement"});
      gfxLayer.addElement(mockElement);

      var removed = gfxLayer.removeElementById("mockElement");

      assert(removed.isHidden(), "element should have been marked dirty");
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
      gfxLayer._checkBorderCollision = function() {};
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
      gfxLayer._checkBorderCollision = function() {};
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
      gfxLayer._checkBorderCollision = function() {};
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
    it("should call collision check if either element is visible or not dirty", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement1 = C64Style.Mocks.getMockGfxElement({dirty:true});
      mockElement1.collidesWith = function() {this.calledIt = true;};
      var mockElement2 = C64Style.Mocks.getMockGfxElement({hidden:true});

      gfxLayer._collisionCheckElementsIfNeeded(mockElement1,mockElement2);

      assert(mockElement1.calledIt === true, "should have called _collisionCheck");
      done();
    });
    it("should not call update on collision if collisionCheck is false", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      gfxLayer._updateElementOnCollision = function() {this.calledIt = true;};
      var mockElement1 = C64Style.Mocks.getMockGfxElement();
      mockElement1.collidesWith = function() {return false;};
      var mockElement2 = C64Style.Mocks.getMockGfxElement();

      gfxLayer._collisionCheckElementsIfNeeded(mockElement1,mockElement2);

      assert(gfxLayer.calledIt === undefined, "should not have called _updateElementOnCollision");
      done();
    });
    it("should call updateOnCollision for each element if collisionCheck is true", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      gfxLayer.calledItCount = 0;
      gfxLayer._updateElementOnCollision = function() {this.calledItCount++;};
      var mockElement1 = C64Style.Mocks.getMockGfxElement();
      mockElement1.collidesWith = function() {return true;};
      var mockElement2 = C64Style.Mocks.getMockGfxElement();

      gfxLayer._collisionCheckElementsIfNeeded(mockElement1,mockElement2);

      assert(gfxLayer.calledItCount === 2, "should have called _updateElementOnCollision");
      done();
    });
  });
  describe("#_updateElementOnCollision()", function() {
    it("should set element hasCollision", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement1 = C64Style.Mocks.getMockGfxElement();

      gfxLayer._updateElementOnCollision(mockElement1);

      assert(mockElement1.collision === true, "should have called setHasCollision");
      done();
    });
    it("should set element dirty", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement1 = C64Style.Mocks.getMockGfxElement();

      gfxLayer._updateElementOnCollision(mockElement1);

      assert(mockElement1.dirty === true, "should have set dirty");
      done();
    });
    it("should add element to dirty elements list, if wasn't dirty", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement1 = C64Style.Mocks.getMockGfxElement();

      gfxLayer._updateElementOnCollision(mockElement1);

      assert(gfxLayer._dirtyElements.size() === 1, "should have added to dirty list");
      done();
    });
    it("should add element to dirty elements list, even if was dirty", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement1 = C64Style.Mocks.getMockGfxElement({dirty:true});

      gfxLayer._updateElementOnCollision(mockElement1);

      assert(gfxLayer._dirtyElements.size() === 1, "should not have added to dirty list");
      done();
    });
  });
  describe("#render()", function() {
    it("should call clear on dirtyElements", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement1 = C64Style.Mocks.getMockGfxElement();
      mockElement1.clear = function() {this.calledIt = true;};
      gfxLayer._dirtyElements.push(mockElement1.getZIndexComparable());

      gfxLayer.render();

      assert(mockElement1.calledIt === true, "should have called clear");
      done();
    });
    it("should call render on dirtyElements", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement1 = C64Style.Mocks.getMockGfxElement();
      mockElement1.render = function() {this.calledIt = true;};
      gfxLayer._dirtyElements.push(mockElement1.getZIndexComparable());

      gfxLayer.render();

      assert(mockElement1.calledIt === true, "should have called render");
      done();
    });
  });
  describe("#_cleanUp()", function() {
    it("should call finalize on each removed element.", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement1 = C64Style.Mocks.getMockGfxElement({id:"mockElement"});
      mockElement1.finalize = function() {this.calledIt = true;};
      gfxLayer._removedElements.mockElement = mockElement1;

      gfxLayer._cleanUp();

      assert(mockElement1.calledIt === true, "should have called finalize");
      done();
    });
    it("should remove elements from elements list.", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement1 = C64Style.Mocks.getMockGfxElement({id:"mockElement"});
      gfxLayer._removedElements.mockElement = mockElement1;
      gfxLayer._elements.push(mockElement1);

      gfxLayer._cleanUp();

      assert(gfxLayer._elements.length === 0, "should have removed element from list");
      done();
    });
    it("should clear removed elements.", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement1 = C64Style.Mocks.getMockGfxElement({id:"mockElement"});
      gfxLayer._removedElements.mockElement = mockElement1;

      gfxLayer._cleanUp();

      assert(gfxLayer._removedElements.mockElement === undefined, "should have cleared removed elements");
      done();
    });
    it("should clear dirty elements.", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      var mockElement1 = C64Style.Mocks.getMockGfxElement({id:"mockElement"});
      gfxLayer._dirtyElements.push(mockElement1.getZIndexComparable());

      gfxLayer._cleanUp();

      assert(gfxLayer._dirtyElements.size() === 0, "should have cleared dirty elements");
      done();
    });
  });
});
