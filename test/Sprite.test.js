describe("Sprite", function() {
  var sprite, screenContext, parentLayer, props;

  beforeEach(function() {
    screenContext = {
      notify : function() {
        
      }
    };
    parentLayer = {
      getCanvasContext : function() {
        return {};
      }
    };
    props = {
      frames:[
        {
          getDuration : function() {
            return 10;
          }
        },
        {
          getDuration : function() {
            return 10;
          }
        }
      ]
    };
    sprite = new C64Style.Sprite(screenContext, parentLayer, props);
  });

  describe("#update()", function() {
    it("should not update if no frames", function(done){
      sprite.setFrames([]);
      sprite.update();

      assert(sprite._currentFrameElapsed === 0, "should not have updated _currentFrameElapsed");
      done();
    });
    it("should not update if done", function(done){
      sprite.setDone(true);
      sprite.update();

      assert(sprite._currentFrameElapsed === 0, "should not have updated _currentFrameElapsed");
      done();
    });
    it("should update elapsed", function(done){
      sprite.setTtl(10);
      sprite.update(5,5);

      assert(sprite._elapsed === 5, "should have updated elapsed");
      done();
    });
    it("should set done if surpassed ttl", function(done){
      sprite.setTtl(10);
      sprite.update(15,15);

      assert(sprite.isDone() === true, "should have set done");
      done();
    });
    it("should update _currentFrameElapsed", function(done){
      sprite.update(5,5);

      assert(sprite._currentFrameElapsed === 5, "should have updated _currentFrameElapsed");
      done();
    });
    it("should update increment fidx", function(done){
      sprite.update(15,15);

      assert(sprite.getCurrentFrameIndex() === 1, "should have updated fidx");
      done();
    });
    it("should update reset fidx ", function(done){
      sprite.update(20,20);

      assert(sprite.getCurrentFrameIndex() === 0, "should have updated fidx");
      done();
    });
    it("should update loop count ", function(done){
      sprite.update(20,20);

      assert(sprite.getLoopCount() === 1, "should have updated loop count");
      done();
    });
    it("should set done if no loop", function(done){
      sprite.setDoLoop(false);
      sprite.update(20,20);

      assert(sprite.isDone() === true, "should have set done");
      done();
    });
    it("should update to freezeframe", function(done){
      sprite.setFreezeFrameIndex(1);
      sprite.setDoLoop(false);
      sprite.update(20,20);

      assert(sprite.getCurrentFrameIndex() === 1, "should have updated fidx");
      done();
    });
    it("should set done when loops to live has been exceeded", function(done){
      sprite.setLoopsToLive(2);
      sprite.update(40,40);

      assert(sprite.isDone() === true, "should have set done");
      done();
    });
    it("should set dirty", function(done){
      sprite.update(10,10);

      assert(sprite.isDirty() === true, "should have set dirty");
      done();
    });
    it("should not set dirty", function(done){
      sprite.setDirty(false);

      sprite.update(1,1);

      assert(sprite.isDirty() === false, "should not have set dirty");
      done();
    });
    it("should call doEndOfAnimation", function(done){
      var calledIt = false;
      sprite.doEndOfAnimation = function() {calledIt = true;};
      sprite.setLoopsToLive(1);

      sprite.update(20,20);

      assert(calledIt === true, "should should have called do end of animation");
      done();
    });
    it("should return sprite", function(done){
      var result = sprite.update(10,10);

      assert(result === sprite, "should have returned sprite");
      done();
    });
    it("should return null", function(done){
      sprite.setDirty(false);
      var result = sprite.update(1,1);

      assert(result === null, "should have returned null");
      done();
    });
  });
  describe("#render()", function() {
    it("should return if hidden", function(done) {
      sprite.hide();
      var calledIt = false;
      sprite.renderFrame = function() {calledIt = true;};

      sprite.render(1,1);

      assert(calledIt === false, "should not have called render");
      done();
    });
    it("should return if hidden", function(done) {
      sprite.setDirty(false);
      var calledIt = false;
      sprite.renderFrame = function() {calledIt = true;};

      sprite.render(1,1);

      assert(calledIt === false, "should not have called render");
      done();
    });
    it("should return if hidden", function(done) {
      var calledIt = false;
      sprite.renderFrame = function() {calledIt = true;};

      sprite.render(1,1);

      assert(calledIt === true, "should have called render");
      done();
    });
  });
  describe("#reset()", function() {
    it("should reset values", function(done) {
      sprite.setCurrentFrameIndex(1);
      sprite._currentFrameElapsed = 5;
      sprite.setDone(true);
      sprite._loopCount = 2;
      sprite._elapsed = 5;

      sprite.reset();

      assert(sprite.getCurrentFrameIndex() === 0, "should have reset current frame index");
      assert(sprite._currentFrameElapsed === 0, "should have reset current frame elapsed");
      assert(sprite.isDone() === false, "should have reset done");
      assert(sprite.getLoopCount() === 0, "should have reset loop count");
      assert(sprite._elapsed === 0, "should have reset elapsed");
      done();
    });
  });
  describe("#doEndOfAnimation()", function() {
    it("should call notify", function(done) {
      var calledIt = false;
      sprite.notify = function() {calledIt = true;};

      sprite.doEndOfAnimation();

      assert(calledIt === true, "should have called notify");
      done();
    });
  });
});
