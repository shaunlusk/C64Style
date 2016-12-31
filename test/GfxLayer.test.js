describe("GfxLayer", function() {
  var gfxLayer, mockElement;
  beforeEach(function() {
    gfxLayer = new C64Style.GfxLayer();
    mockElement = C64Style.Mocks.getMockGfxElement({id:"mockElement"});
    gfxLayer.addElement(mockElement);
  });
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
      var removed = gfxLayer.removeElementById("mockElement");

      assert(removed.id === mockElement.id, "removed element should have been the mockElement");
      done();
    });
    it("should not immediately modify the element list", function(done) {
      var removed = gfxLayer.removeElementById("mockElement");

      assert(gfxLayer._elements.length === 1, "elements list should have been 1");
      done();
    });
    it("should mark element dirty", function(done) {
      var removed = gfxLayer.removeElementById("mockElement");

      assert(removed.isDirty(), "element should have been marked dirty");
      done();
    });
    it("should mark element hidden", function(done) {
      var removed = gfxLayer.removeElementById("mockElement");

      assert(removed.isHidden(), "element should have been marked dirty");
      done();
    });
    it("should return null if element not present", function(done) {
      var removed = gfxLayer.removeElementById("mockElement2");

      assert(removed === null, "should have returned null");
      done();
    });
  });
  describe("#removeElement()", function() {
    it("should call removeElementById with element id", function(done) {
      gfxLayer.removeElementById = function(id) {this.calledItWith = id;};

      var removed = gfxLayer.removeElement(mockElement);

      assert(gfxLayer.calledItWith === "mockElement", "elements list should have been 1");
      done();
    });
  });
  describe("#update()", function() {
    it("should call update on each element", function(done) {
      gfxLayer._handleCollisions = function() {};
      gfxLayer._checkBorderCollision = function() {};
      mockElement.update = function() {this.calledIt = true;};
      var mockElement2 = C64Style.Mocks.getMockGfxElement({id:"mockElement2"});
      mockElement2.update = function() {this.calledIt = true;};
      gfxLayer.addElement(mockElement2);

      var removed = gfxLayer.update();

      assert(mockElement.calledIt === true, "should have called update");
      assert(mockElement2.calledIt === true, "should have called update");
      done();
    });
    it("should call _checkBorderCollision on each element", function(done) {
      gfxLayer._handleCollisions = function() {};
      var calledItCount = 0;
      gfxLayer._checkBorderCollision = function() {calledItCount++;};
      mockElement.update = function() {};
      var mockElement2 = C64Style.Mocks.getMockGfxElement({id:"mockElement2"});
      gfxLayer._checkBorderCollision = function() {calledItCount++;};
      mockElement2.update = function() {};
      gfxLayer.addElement(mockElement2);

      var removed = gfxLayer.update();

      assert(calledItCount === 2, "should have called _checkBorderCollision on each element");
      done();
    });
    it("should add dirty elements to dirty elements list", function(done) {
      gfxLayer._handleCollisions = function() {};
      gfxLayer._checkBorderCollision = function() {};
      mockElement.update = function() {return true;};

      var removed = gfxLayer.update();

      assert(gfxLayer._dirtyElements.size() === 1, "should have added element to dirtyElements");
      done();
    });
    it("should not add non-dirty elements to dirty elements list", function(done) {
      gfxLayer._handleCollisions = function() {};
      gfxLayer._checkBorderCollision = function() {};
      mockElement.update = function() {return false;};

      var removed = gfxLayer.update();

      assert(gfxLayer._dirtyElements.size() === 0, "should not have added element to dirtyElements");
      done();
    });
    it("should call _handleCollisions", function(done) {
      gfxLayer._handleCollisions = function() {this.calledIt = true;};
      gfxLayer._checkBorderCollision = function() {};
      mockElement.update = function() {return false;};

      var removed = gfxLayer.update();

      assert(gfxLayer.calledIt === true, "should have called _handleCollisions");
      done();
    });
  });
  describe("#_collisionCheckElementsIfNeeded()", function() {
    it("should call collision check if either element is visible or not dirty", function(done) {
      var mockElement1 = C64Style.Mocks.getMockGfxElement({dirty:true});
      mockElement1.collidesWith = function() {this.calledIt = true;};
      var mockElement2 = C64Style.Mocks.getMockGfxElement({hidden:true});

      gfxLayer._collisionCheckElementsIfNeeded(mockElement1,mockElement2);

      assert(mockElement1.calledIt === true, "should have called _collisionCheck");
      done();
    });
    it("should not call update on collision if collisionCheck is false", function(done) {
      gfxLayer._updateElementOnCollision = function() {this.calledIt = true;};
      var mockElement1 = C64Style.Mocks.getMockGfxElement();
      mockElement1.collidesWith = function() {return false;};
      var mockElement2 = C64Style.Mocks.getMockGfxElement();

      gfxLayer._collisionCheckElementsIfNeeded(mockElement1,mockElement2);

      assert(gfxLayer.calledIt === undefined, "should not have called _updateElementOnCollision");
      done();
    });
    it("should call updateOnCollision for each element if collisionCheck is true", function(done) {
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
      var mockElement1 = C64Style.Mocks.getMockGfxElement();

      gfxLayer._updateElementOnCollision(mockElement1);

      assert(mockElement1.collision === true, "should have called setHasCollision");
      done();
    });
    it("should set element dirty", function(done) {
      var mockElement1 = C64Style.Mocks.getMockGfxElement();

      gfxLayer._updateElementOnCollision(mockElement1);

      assert(mockElement1.dirty === true, "should have set dirty");
      done();
    });
    it("should add element to dirty elements list, if wasn't dirty", function(done) {
      var mockElement1 = C64Style.Mocks.getMockGfxElement();

      gfxLayer._updateElementOnCollision(mockElement1);

      assert(gfxLayer._dirtyElements.size() === 1, "should have added to dirty list");
      done();
    });
    it("should add element to dirty elements list, even if was dirty", function(done) {
      var mockElement1 = C64Style.Mocks.getMockGfxElement({dirty:true});

      gfxLayer._updateElementOnCollision(mockElement1);

      assert(gfxLayer._dirtyElements.size() === 1, "should not have added to dirty list");
      done();
    });
  });
  describe("#render()", function() {
    it("should call clear on dirtyElements", function(done) {
      var mockElement1 = C64Style.Mocks.getMockGfxElement();
      mockElement1.clear = function() {this.calledIt = true;};
      gfxLayer._dirtyElements.push(mockElement1.getZIndexComparable());

      gfxLayer.render();

      assert(mockElement1.calledIt === true, "should have called clear");
      done();
    });
    it("should call render on dirtyElements", function(done) {
      var mockElement1 = C64Style.Mocks.getMockGfxElement();
      mockElement1.render = function() {this.calledIt = true;};
      gfxLayer._dirtyElements.push(mockElement1.getZIndexComparable());

      gfxLayer.render();

      assert(mockElement1.calledIt === true, "should have called render");
      done();
    });
  });
  describe("#_cleanUp()", function() {
    it("should remove elements from elements list.", function(done) {
      gfxLayer._removedElements.mockElement = mockElement;

      gfxLayer._cleanUp();

      assert(gfxLayer._elements.length === 0, "should have removed element from list");
      done();
    });
    it("should clear removed elements.", function(done) {
      gfxLayer._removedElements.mockElement = mockElement;

      gfxLayer._cleanUp();

      assert(gfxLayer._removedElements.mockElement === undefined, "should have cleared removed elements");
      done();
    });
    it("should clear dirty elements.", function(done) {
      gfxLayer._dirtyElements.push(mockElement.getZIndexComparable());

      gfxLayer._cleanUp();

      assert(gfxLayer._dirtyElements.size() === 0, "should have cleared dirty elements");
      done();
    });
  });
  describe("#_checkBorderCollision()", function() {
    var notifiedWith = null;
    var time = 1;
    beforeEach(function() {
      gfxLayer.getCanvas = function() {return {width:320, height:200};};
      mockElement.getCollisionBoxWidth = function() {return 10;};
      mockElement.getCollisionBoxHeight = function() {return 10;};
      mockElement.notify = function(event) {notifiedWith = event.type;};
    });
    it("should notify screen when ELEMENT_HIT_LEFT_EDGE", function(done) {
      mockElement.getCollisionBoxX = function() {return 0;};
      mockElement.getCollisionBoxY = function() {return 5;};

      gfxLayer._checkBorderCollision(mockElement,time);

      assert(notifiedWith === C64Style.EventType.ELEMENT_HIT_LEFT_EDGE);
      done();
    });
    it("should notify screen when ELEMENT_HIT_RIGHT_EDGE", function(done) {
      mockElement.getCollisionBoxX = function() {return 318;};
      mockElement.getCollisionBoxY = function() {return 5;};

      gfxLayer._checkBorderCollision(mockElement,time);

      assert(notifiedWith === C64Style.EventType.ELEMENT_HIT_RIGHT_EDGE);
      done();
    });
    it("should notify screen when ELEMENT_HIT_TOP_EDGE", function(done) {
      mockElement.getCollisionBoxX = function() {return 5;};
      mockElement.getCollisionBoxY = function() {return 0;};

      gfxLayer._checkBorderCollision(mockElement,time);

      assert(notifiedWith === C64Style.EventType.ELEMENT_HIT_TOP_EDGE);
      done();
    });
    it("should notify screen when ELEMENT_HIT_BOTTOM_EDGE", function(done) {
      mockElement.getCollisionBoxX = function() {return 0;};
      mockElement.getCollisionBoxY = function() {return 198;};

      gfxLayer._checkBorderCollision(mockElement,time);

      assert(notifiedWith === C64Style.EventType.ELEMENT_HIT_BOTTOM_EDGE);
      done();
    });
  });
  describe("#_handleCollisions()", function() {
    var mockElement2;
    beforeEach(function() {
      mockElement2 = C64Style.Mocks.getMockGfxElement({id:"mockElement2"});
      gfxLayer.addElement(mockElement2);
    });
    it("should call _collisionCheckElementsIfNeeded on element pairs", function(done) {
      var calledIt = false;
      gfxLayer._collisionCheckElementsIfNeeded = function() {calledIt = true;};

      gfxLayer._handleCollisions();

      assert(calledIt === true, "should have called _collisionCheckElementsIfNeeded");
      done();
    });
  });
  describe("#handleMouseEvent()", function() {
    it("should call handleMouseEvent on elements", function(done) {
      mockElement.handleMouseEvent = function() {this.calledIt = true;};

      gfxLayer.handleMouseEvent({});

      assert(mockElement.calledIt === true, "should have called handleMouseEvent on element");
      done();
    });
  });
});
