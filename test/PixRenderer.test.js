describe("PixRenderer", function() {
  var pixRenderer, context, pixPath, palette;

  beforeEach(function() {
    pixRenderer = new C64Style.PixRenderer(1,1);
    context = {
      fillRect : function(x, y, width, height)  {
        this.calledWithX = x;
        this.calledWithY = y;
        this.calledWithWidth = width;
        this.calledWithHeight = height;
      }
    };
    pixPath = {
      type: C64Style.PixPathTypes.PIXEL,
      x : 0,
      y : 0,
      width : 2,
      height : 2,
      color : C64Style.Color.BLACK
    };
    palette = [];
  });

  describe("#renderPixPath()", function() {
    it("throws error if color not in palette", function(done) {
      pixPath.color = 1;

      var result = throwsError(pixRenderer.renderPixPath.bind(pixRenderer, context, 0, 0, pixPath, palette, 1, 1));

      assert(result === true, "should have thrown error");
      done();
    });
    it("set context fillStyle to specified palette color", function(done) {
      pixPath.color = 1;
      palette = ["#000000", "#FFFFFF"];

      pixRenderer.renderPixPath(context, 0, 0, pixPath, palette, 1, 1);

      assert(context.fillStyle === palette[1], "should set fill style to palette color");
      done();
    });
    it("set context fillStyle to color pointer", function(done) {
      pixPath.color = new C64Style.ColorPointer("#AAAAAA");

      pixRenderer.renderPixPath(context, 0, 0, pixPath, palette, 1, 1);

      assert(context.fillStyle === pixPath.color.getColor(), "should set fill style to color pointer color");
      done();
    });
    it("set context fillStyle to color", function(done) {
      pixPath.color = "#123456";

      pixRenderer.renderPixPath(context, 0, 0, pixPath, palette, 1, 1);

      assert(context.fillStyle === pixPath.color, "should set fill style to color");
      done();
    });
    it("should throw error for unknown pix path type", function(done) {
      pixPath.type = "fake";

      var result = throwsError(pixRenderer.renderPixPath.bind(pixRenderer, context, 0, 0, pixPath, palette, 1, 1));

      assert(result === true, "should throw error");
      done();
    });
    it("should scale to screen", function(done) {
      pixRenderer = new C64Style.PixRenderer(2,2);
      pixPath.type = C64Style.PixPathTypes.RECTANGLE;
      pixPath.x = 3;
      pixPath.y = 3;

      pixRenderer.renderPixPath(context, 0, 0, pixPath, palette, 1, 1);

      var expectedX = 6;
      var expectedY = 6;
      var expectedWidth = 4;
      var expectedHeight = 4;
      assert(context.calledWithX === expectedX, "should call fill rect with x=" + expectedX);
      assert(context.calledWithY === expectedY, "should call fill rect with y=" + expectedY);
      assert(context.calledWithWidth === expectedWidth, "should call fill rect with width=" + expectedWidth);
      assert(context.calledWithHeight === expectedHeight, "should call fill rect with height=" + expectedHeight);
      done();
    });
    it("should scale to screen and element", function(done) {
      pixRenderer = new C64Style.PixRenderer(2,2);
      pixPath.type = C64Style.PixPathTypes.PIXEL;
      pixPath.x = 3;
      pixPath.y = 3;

      pixRenderer.renderPixPath(context, 5, 5, pixPath, palette, 2, 2);

      var expectedX = 22;
      var expectedY = 22;
      var expectedWidth = 4;
      var expectedHeight = 4;
      assert(context.calledWithX === expectedX, "should call fill rect with x=" + expectedX);
      assert(context.calledWithY === expectedY, "should call fill rect with y=" + expectedY);
      assert(context.calledWithWidth === expectedWidth, "should call fill rect with width=" + expectedWidth);
      assert(context.calledWithHeight === expectedHeight, "should call fill rect with height=" + expectedHeight);
      done();
    });
  });
});
