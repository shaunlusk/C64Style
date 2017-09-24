describe("PixElement", function() {
  var pixImage, mockScreen, mockLayer, mockPixRenderer;

  beforeEach(function() {
    mockScreen = C64Style.Mocks.getMockScreen();
    mockLayer = C64Style.Mocks.getMockLayer();
    mockPixRenderer = {
      renderPixPathArray : function() {}
    };
    pixImage = new C64Style.PixElement(mockScreen, mockLayer, {pixRenderer:mockPixRenderer});
  });

  describe("#setDimensions()", function() {
    it("should set dimensions to 0 if no pixPaths", function(done) {
      assert(pixImage.getWidth() === 0, "should have set width = 0");
      assert(pixImage.getHeight() === 0, "should have set height = 0");
      done();
    });
    it("should calculate dimensions correctly", function(done) {
      var pixImage = new C64Style.PixElement(mockScreen, mockLayer, {
          pixPathArray:[
            {type:C64Style.PixPathTypes.PIXEL, x:1, y:1, color:C64Style.Color.BLACK},
            {type:C64Style.PixPathTypes.PIXEL, x:2, y:2, color:C64Style.Color.BLACK}
          ]
      });

      var exectedWidth = 3, expectedHeight = 3;
      assert(pixImage.getWidth() === exectedWidth, "should have set width = " + exectedWidth + ", actual:" + pixImage.getWidth());
      assert(pixImage.getHeight() === expectedHeight, "should have set height = " + expectedHeight + ", actual:" + pixImage.getHeight());
      done();
    });
    it("should calculate dimensions correctly", function(done) {
      var mockScreen = C64Style.Mocks.getMockScreen({scaleX:3, scaleY:4});
      var props = {
        scaleX:5,
        scaleY:6,
        pixPathArray : [
          {type:C64Style.PixPathTypes.RECTANGLE, x: 1, y: 1, width: 2, height: 3},
          {type:C64Style.PixPathTypes.RECTANGLE, x: 1, y: 2, width: 3, height: 4},
          {type:C64Style.PixPathTypes.RECTANGLE, x: 2, y: 2, width: 1, height: 1},
        ]
      };
      var pixImage = new C64Style.PixElement(mockScreen, mockLayer, props);

      assert(pixImage.getWidth() === 4, "should have set width = 4");
      assert(pixImage.getHeight() === 6, "should have set height = 6");
      done();
    });
  });
  describe("#setPalette()", function() {
    it("should set palette", function(done) {
      pixImage.setPalette(["#1234AA", "#FFBB00"]);

      assert(pixImage.getPalette().length === 2, "should have set palette");
      done();
    });
  });
  describe("#setPalette()", function() {
    it("should set palette", function(done) {
      var expected = "#1234AA";
      pixImage.setPaletteColor(0, expected);

      assert(pixImage.getPaletteColor(0) === expected, "should have set palette color");
      done();
    });
  });
  describe("#render()", function() {
    it("should call renderPixPathArray", function(done) {
      var calledRenderPixPathArray = false;
      mockPixRenderer.renderPixPathArray = function() {
        calledRenderPixPathArray = true;
      };

      pixImage.render(1, 1);

      assert(calledRenderPixPathArray === true, "should have called renderPixPathArray");
      done();
    });
  });
});
