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
  });
});
