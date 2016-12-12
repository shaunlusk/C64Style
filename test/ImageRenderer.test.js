describe("ImageRenderer", function() {
  describe("#renderImage()", function() {
    it("should call drawImage on context", function(done) {
      var screenScaleX = 2, screenScaleY = 2;
      var renderer = new C64Style.ImageRenderer(screenScaleX, screenScaleY);
      var context = {
        drawImage : function(image, sx, sy, sWidth, sHeight, tx, ty, tWidth, tHeight) {
          this.sx = sx;
          this.sy = sy;
          this.sWidth = sWidth;
          this.sHeight = sHeight;
          this.tx = tx;
          this.ty = ty;
          this.tWidth = tWidth;
          this.tHeight = tHeight;
        }
      };
      var image = null;
      var sx = 10, sy = 12, sWidth = 8, sHeight = 16;
      var tx = 50, ty = 72, tWidth = 8, tHeight = 16;
      var imageScaleX = 2, imageScaleY = 3;

      renderer.renderImage(context, image, sx, sy, sWidth, sHeight, tx, ty, tWidth, tHeight, imageScaleX, imageScaleY);

      assert(context.sx === sx, "should have called drawImage sx with " + sx);
      assert(context.sy === sy, "should have called drawImage sy with " + sy);
      assert(context.sWidth === sWidth, "should have called drawImage sWidth with " + sWidth);
      assert(context.sHeight === sHeight, "should have called drawImage sHeight with " + sHeight);
      assert(context.tx === tx * screenScaleX, "should have called drawImage tx with " + tx * screenScaleX);
      assert(context.ty === ty * screenScaleY, "should have called drawImage ty with " + ty * screenScaleY);
      assert(context.tWidth === tWidth * screenScaleX * imageScaleX, "should have called drawImage tWidth with " + tWidth);
      assert(context.tHeight === tHeight * screenScaleY * imageScaleY, "should have called drawImage tHeight with " + tHeight * screenScaleY * imageScaleY);
      done();
    });
  });
});
