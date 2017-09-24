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


});
