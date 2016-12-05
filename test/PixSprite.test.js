describe("PixSprite", function() {
  var pixSprite, mockScreen, mockLayer;

  beforeEach(function() {
    mockScreen = C64Style.Mocks.getMockScreen();
    mockLayer = C64Style.Mocks.getMockLayer();
    pixSprite = new C64Style.PixSprite(mockScreen, mockLayer);
  });

  describe("#_setDimensions()", function() {
    it("should set dimensions to 0 if no pixPaths", function(done) {
      assert(pixSprite.getWidth() === 0, "should have set width = 0");
      assert(pixSprite.getHeight() === 0, "should have set height = 0");
      done();
    });
    it("should calculate dimensions correctly", function(done) {
      var pixSprite = new C64Style.PixSprite(mockScreen, mockLayer, {
          frames:[
            new C64Style.PixSpriteFrame({
              duraton:100, pixArray:[
                {type:C64Style.PixPathTypes.PIXEL, x:1, y:1, color:C64Style.Color.BLACK},
                {type:C64Style.PixPathTypes.PIXEL, x:2, y:2, color:C64Style.Color.BLACK}
              ]
            })
          ]
      });

      var exectedWidth = 3, expectedHeight = 3;
      assert(pixSprite.getWidth() === exectedWidth, "should have set width = " + exectedWidth + ", actual:" + pixSprite.getWidth());
      assert(pixSprite.getHeight() === expectedHeight, "should have set height = " + expectedHeight + ", actual:" + pixSprite.getHeight());
      done();
    });
    it("should calculate dimensions correctly", function(done) {
      var mockScreen = C64Style.Mocks.getMockScreen({scaleX:3, scaleY:4});
      var props = {
        scaleX:5,
        scaleY:6,
        frames : [
          new C64Style.PixSpriteFrame({
            duration:100,
            pixArray:[
              {type:C64Style.PixPathTypes.RECTANGLE, x: 1, y: 1, width: 2, height: 3},
              {type:C64Style.PixPathTypes.RECTANGLE, x: 1, y: 2, width: 3, height: 4}
            ]
          }),
          new C64Style.PixSpriteFrame({
            duration:100,
            pixArray:[
              {type:C64Style.PixPathTypes.RECTANGLE, x: 2, y: 2, width: 1, height: 1}
            ]
          })
        ]
      };
      var pixSprite = new C64Style.PixSprite(mockScreen, mockLayer, props);

      assert(pixSprite.getWidth() === 4, "should have set width = 4");
      assert(pixSprite.getHeight() === 6, "should have set height = 6");
      done();
    });
  });
  describe("#setPaletteColor()", function() {
    it("should set color and dirty", function (done) {
      var expected = "#564321";
      pixSprite.setPaletteColor(0, expected);

      assert(pixSprite._palette[0] === expected, "should have set color");
      assert(pixSprite.isDirty() === true, "should have set color");
      done();
    });
  });
  describe("#setPalette()", function() {
    it("should set palette and dirty", function (done) {
      var expected = ["#564321"];
      pixSprite.setPalette(expected);

      assert(pixSprite._palette[0] === expected[0], "should have set color");
      assert(pixSprite.isDirty() === true, "should have set color");
      done();
    });
  });
  describe("#renderFrame()", function() {
    it("should call _renderPixPath on each pixPath", function (done) {
      var frame = {
        getPixArray : function() {
          return [
            {type:C64Style.PixPathTypes.PIXEL, x:0, y:0, color:C64Style.Color.BLACK},
            {type:C64Style.PixPathTypes.PIXEL, x:0, y:0, color:C64Style.Color.BLACK}
          ];
        }
      };
      var callCount = 0;
      pixSprite._renderPixPath = function() {callCount++;};

      pixSprite.renderFrame(1,1,frame);

      assert(callCount === 2, "should have called renderPixPath twice");
      done();
    });
  });
  describe("_renderPixPath", function() {
    it("should call pixRenderer.renderPixPath", function(done) {
      var calledIt = false;
      var pixRenderer = {
        renderPixPath : function(context, x, y, pixPath, palette, elementScaleX, elementScaleY) {calledIt = true;}
      };
      pixSprite._pixRenderer = pixRenderer;

      pixSprite._renderPixPath({});

      assert(calledIt === true, "should have called renderPixPath");
      done();
    });
  });
});
