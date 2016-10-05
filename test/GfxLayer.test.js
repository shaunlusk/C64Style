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
      var mockElement = C64Style.Mocks.getMockGfxElement({id:"mockElement"});
      mockElement.update = function() {this.calledIt = true;};
      gfxLayer.addElement(mockElement);

      var removed = gfxLayer.update();

      assert(mockElement.calledIt === true, "should have called _checkForCollisions");
      done();
    });
    it("should call _checkForCollisions", function(done) {
      var gfxLayer = new C64Style.GfxLayer();
      gfxLayer._checkForCollisions = function() {this.calledIt = true;};

      var removed = gfxLayer.update();

      assert(gfxLayer.calledIt === true, "should have called _checkForCollisions");
      done();
    });
  });
});
