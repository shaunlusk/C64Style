describe("PixElement", function() {
  var pixImage, mockScreen, mockLayer;

  beforeEach(function() {
    mockScreen = C64Style.Mocks.getMockScreen();
    mockLayer = C64Style.Mocks.getMockLayer();
    pixImage = new C64Style.PixElement(mockScreen, mockLayer);
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
  describe("#_renderPixPath()", function() {
    it("should call renderPixPath", function(done) {
      var calledWithX = null, calledWithY = null,
        calledWithPixPath = null, calledWithPalette = null,
        calledWithElementScaleX = null, calledWithElementScaleY = null;
      pixImage = new C64Style.PixElement(mockScreen, mockLayer, {
        pixRenderer : {
          renderPixPath : function(context, x, y, pixPath, palette, elementScaleX, elementScaleY) {
            calledWithX = x;
            calledWithY = y;
            calledWithPixPath = pixPath;
            calledWithPalette = palette;
            calledWithElementScaleX = elementScaleX;
            calledWithElementScaleY = elementScaleY;
          }
        }
      });

      pixImage._renderPixPath({type:C64Style.PixPathTypes.PIXEL, x:1, y:1, color: C64Style.Color.BLACK});

      assert(calledWithX === 0, "should have called with pix element x");
      assert(calledWithY === 0, "should have called with pix element y");
      assert(calledWithPixPath.type === C64Style.PixPathTypes.PIXEL, "should have called with pixPath");
      assert(calledWithPixPath.x === 1, "should have called with pixPath");
      assert(calledWithPixPath.y === 1, "should have called with pixPath");
      assert(calledWithPixPath.color === C64Style.Color.BLACK, "should have called with pixPath");
      assert(calledWithPalette.length === 0, "should have called with palette");
      assert(calledWithElementScaleX === 1, "should have called with element x scale");
      assert(calledWithElementScaleY === 1, "should have called with element y scale");
      done();
    });
  });
  describe("#render()", function() {
    var calledRenderPixPath;

    beforeEach(function() {
      calledRenderPixPath = false;
      pixImage._renderPixPath = function(pixPath) {
        calledRenderPixPath = true;
      };
    });

    it("should return if hidden", function(done) {
      pixImage.hide();

      pixImage.render(1, 1);

      assert(calledRenderPixPath === false, "should not have called renderImage");
      done();
    });
    it("should return if not dirty", function(done) {
      pixImage.setDirty(false);

      pixImage.render(1, 1);

      assert(calledRenderPixPath === false, "should not have called renderImage");
      done();
    });
    it("should call renderImage", function(done) {
      pixImage._pixPathArray = [{}];

      pixImage.render(1, 1);

      assert(calledRenderPixPath === true, "should have called renderImage");
      done();
    });
    it("should call base class render", function(done) {
      var calledBaseRender = false;
      var savedFn = C64Style.GfxElement.prototype.render;
      C64Style.GfxElement.prototype.render = function() {
        calledBaseRender = true;
      };
      pixImage.render(1, 1);

      assert(calledBaseRender === true, "should have called base render");
      C64Style.GfxElement.prototype.render = savedFn;
      done();
    });
  });
});
