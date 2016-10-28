describe("MoveOrder", function(){
  describe("#update()", function(){
    it("should return if not started", function(done){
      var time = 0;
      var diff = 16;
      var move = new C64Style.MoveOrder(C64Style.Mocks.getMockGfxElement(),5, 5, 100);

      move.update(time,diff);

      assert(move._startTime === -1, "start time should not have been changed");
      done();
    });
    it("should return if ended", function(done){
      var time = 0;
      var diff = 16;
      var move = new C64Style.MoveOrder(C64Style.Mocks.getMockGfxElement(),5, 5, 100);
      move._end = true;

      move.update(time,diff);

      assert(move._startTime === -1, "start time should not have been changed");
      done();
    });
    it("should set start time if start time is -1", function(done){
      var time = 0;
      var diff = 16;
      var move = new C64Style.MoveOrder(C64Style.Mocks.getMockGfxElement(),5, 5, 100);
      move.start();

      move.update(time,diff);

      assert(move._startTime === 0, "start time should have been updated");
      done();
    });
    it("should not set start time if start time is not -1", function(done){
      var time = 0;
      var diff = 16;
      var move = new C64Style.MoveOrder(C64Style.Mocks.getMockGfxElement(),5, 5, 100);
      move.start();
      move.update(time,diff);
      time = 8;

      move.update(time,diff);

      assert(move._startTime === 0, "start time should not have been changed on second update");
      done();
    });
    it("should end if time percent is >=1", function(done){
      var time = 0;
      var diff = 16;
      var move = new C64Style.MoveOrder(C64Style.Mocks.getMockGfxElement(),5, 5, 100);
      move.start();
      move.update(time,diff);
      time = 100;

      move.update(time,diff);

      assert(move._end === true, "should have ended");
      done();
    });
    it("should update element coords if time percent is < 1", function(done){
      var time = 0;
      var diff = 16;
      var element = C64Style.Mocks.getMockGfxElement();
      var move = new C64Style.MoveOrder(element,5, 5, 100);

      move.start();
      move.update(time,diff);
      time = 50;
      move.update(time,diff);

      assert(element.getX() > 2, "should have updated element x (actual value:" + element.getX() + ")");
      assert(element.getY() > 2, "should have updated element y (actual value:" + element.getY() + ")");
      done();
    });
  });
  describe("#_end()", function(){
    it("should set end true", function(done){
      var move = new C64Style.MoveOrder(C64Style.Mocks.getMockGfxElement(),5, 5, 100);

      move.end();

      assert(move._end === true, "move.end should have been true");
      done();
    });
    it("should set element coords to move target coords", function(done){
      var move = new C64Style.MoveOrder(C64Style.Mocks.getMockGfxElement(),5, 5, 100);

      move.end();

      assert(move._element.x === 5, "move._element.x should have been 5");
      assert(move._element.y === 5, "move._element.y should have been 5");
      done();
    });
    it("should call elementCallback", function(done){
      var a = {};
      var move = new C64Style.MoveOrder(C64Style.Mocks.getMockGfxElement(),5, 5, 100, function() {
        a.calledIt = true;
      });

      move.end();
      assert(a.calledIt === true, "element call back was not called");
      done();
    });
  });
  describe("#_timePercent()", function() {
    it("it should return proper time percent", function(done){
      var move = new C64Style.MoveOrder(C64Style.Mocks.getMockGfxElement(), null, null, 100);
      move._startTime = 0;
      var result, time;
      time = 0;
      result = move._timePercent(time);
      assert(result === 0,"should have been 0");
      time = 45;
      result = move._timePercent(time);
      assert(result === 0.45,"should have been .45");
      time = 99;
      result = move._timePercent(time);
      assert(result === 0.99,"should have been .99");
      time = 100;
      result = move._timePercent(time);
      assert(result === 1,"should have been 1");
      done();
    });
  });
});
