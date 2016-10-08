describe("PixImage", function() {
  describe("#setDimensions()", function() {
    it("should set dimensions to 0 if no pixPaths", function(done) {
      var mockScreen = C64Style.Mocks.getMockScreen();
      var mockLayer = C64Style.Mocks.getMockLayer();

      var pixImage = new C64Style.PixImage(mockScreen, mockLayer);

      assert(pixImage.getWidth() === 0, "should have set width = 0");
      assert(pixImage.getHeight() === 0, "should have set height = 0");
      done();
    });
    it("should calculate dimensions correctly", function(done) {
      var mockScreen = C64Style.Mocks.getMockScreen({scaleX:3, scaleY:4});
      var mockLayer = C64Style.Mocks.getMockLayer();
      var props = {
        scaleX:5,
        scaleY:6,
        pixPathArray : [
          {type:"RECTANGLE", x: 1, y: 1, width: 2, height: 3},
          {type:"RECTANGLE", x: 1, y: 2, width: 3, height: 4},
          {type:"RECTANGLE", x: 2, y: 2, width: 1, height: 1},
        ]
      };
      var pixImage = new C64Style.PixImage(mockScreen, mockLayer, props);

      assert(pixImage.getWidth() === 60, "should have set width = 60");
      assert(pixImage.getHeight() === 144, "should have set height = 144");
      done();
    });
  });
});
