describe("ImageSprite", function() {
  var imageSprite, calledRenderImage;
  beforeEach(function() {
    calledRenderImage = false;
    imageSprite = new C64Style.ImageSprite(
      C64Style.Mocks.getMockScreen(),
      C64Style.Mocks.getMockLayer(),
      {
        imageRenderer : {
          renderImage : function() {
            calledRenderImage = true;
          }
        },
        frames : [
          new C64Style.ImageSpriteFrame({
            sourceX : 10,
            sourceY : 100,
            sourceWidth : 16,
            sourceHeight : 16,
            duration : 1000,
          })
        ]
      }
    );
  });
  describe("#renderFrame()", function() {
    it("should call renderFrame", function(done) {
      imageSprite.render(1, 1);

      assert(calledRenderImage === true, "should have called renderImage");
      done();
    });
  });
});
