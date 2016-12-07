describe("GfxElement", function() {
  var element;

  beforeEach(function() {
    element = getGfxElement();
  });

  describe("#getId()", function() {
    it("should return element id", function() {
      var id = element.getId();
      assert(id);
    });
  });
  describe("#isDirty()", function() {
    it("should true if dirty", function() {
      element.setDirty(true);
      var dirty = element.isDirty();
      assert(dirty, "should have been dirty");
    });
    it("should true if hasCollision", function() {
      element.setHasCollision(true);
      var dirty = element.isDirty();
      assert(dirty, "should have been dirty");
    });
    it("should true if hadCollisionPreviousFrame", function() {
      element._hadCollisionPreviousFrame = true;
      var dirty = element.isDirty();
      assert(dirty, "should have been dirty");
    });
  });
  describe("#setDirty()", function() {
    it("should set dirty", function() {
      element.setDirty(true);
      var dirty = element._dirty;
      assert(dirty, "should have been dirty");
    });
  });
  describe("#isHidden()", function() {
    it("should return isHidden", function() {
      element.setHidden(false);
      var hidden = element.isHidden();
      assert(!hidden, "should not have been hidden");
    });
  });
  describe("#setHidden()", function() {
    it("should return isHidden", function() {
      element.setHidden(true);
      var hidden = element.isHidden();
      assert(hidden, "should have been hidden");
    });
  });
  describe("#hasCollision()", function() {
    it("should return hasCollision", function() {
      element.setHasCollision(true);
      var hasCollision = element.hasCollision();
      assert(hasCollision, "should have had collision");
    });
  });
  describe("#setHasCollision()", function() {
    it("should set has collision", function() {
      element.setHasCollision(true);
      element.setHasCollision(false);
      var hasCollision = element.hasCollision();
      assert(!hasCollision, "should have had collision");
    });
  });
  describe("#getZIndex()", function() {
    it("should return zindex", function() {
      var expected = 50;
      element.setZIndex(expected);
      var zindex = element.getZIndex();
      assert(zindex, "should have returned zindex");
    });
  });
  describe("#setZIndex()", function() {
    it("should set zindex", function() {
      var expected = 250;
      element.setZIndex(50);
      element.setZIndex(expected);
      var zindex = element.getZIndex();
      assert(zindex, "should have set zindex");
    });
  });
  describe("#getParentLayer()", function() {
    it("should return parentLayer", function() {
      var layer = element.getParentLayer();
      assert(layer);
    });
  });
  describe("#getCanvasContext()", function() {
    it("should return canvas context", function() {
      var context = element.getCanvasContext();
      assert(context);
    });
  });
  describe("#getScreenContext()", function() {
    it("should return screen context", function() {
      var context = element.getScreenContext();
      assert(context);
    });
  });
  describe("#getScreenScaleX()", function() {
    it("should return screen scalex", function() {
      var scaleX = element.getScreenScaleX();
      assert(scaleX === 1);
    });
  });
  describe("#getScreenScaleY()", function() {
    it("should return screen scaley", function() {
      var scaleY = element.getScreenScaleY();
      assert(scaleY === 1);
    });
  });
  describe("#getTotalScaleX()", function() {
    it("should return total scalex", function() {
      element = new C64Style.GfxElement(C64Style.Mocks.getMockScreen({scaleX:2}), C64Style.Mocks.getMockLayer(), {scaleX:3});
      var scaleX = element.getTotalScaleX();
      assert(scaleX === element.getElementScaleX() * element.getScreenScaleX());
    });
  });
  describe("#getTotalScaleY()", function() {
    it("should return total scaley", function() {
      element = new C64Style.GfxElement(C64Style.Mocks.getMockScreen({scaleY:4}), C64Style.Mocks.getMockLayer(), {scaleY:7});
      var scaleY = element.getTotalScaleY();
      assert(scaleY === element.getElementScaleY() * element.getScreenScaleY());
    });
  });
  describe("#getElementScaleX()", function() {
    it("should return element scalex", function() {
      var scaleX = element.getElementScaleX();
      assert(scaleX === 1);
    });
  });
  describe("#getElementScaleY()", function() {
    it("should return element scaley", function() {
      var scaleY = element.getElementScaleY();
      assert(scaleY === 1);
    });
  });
  describe("#setElementScaleX()", function() {
    it("should set element scalex", function() {
      var expected = 10;
      element.setElementScaleX(expected);
      var scaleX = element.getElementScaleX();
      assert(scaleX === expected);
    });
  });
  describe("#setElementScaleY()", function() {
    it("should set element scaley", function() {
      var expected = 10;
      element.setElementScaleY(expected);
      var scaleY = element.getElementScaleY();
      assert(scaleY === expected);
    });
  });
  describe("#getX()", function() {
    it("should return x", function() {
      var expected = 0;
      var x = element.getX();
      assert(x === expected);
    });
  });
  describe("#getY()", function() {
    it("should return x", function() {
      var expected = 0;
      var y = element.getY();
      assert(y === expected);
    });
  });
  describe("#setX()", function() {
    it("should set x", function() {
      var expected = 50;
      element.setX(expected);
      var x = element.getX();
      assert(x === expected);
    });
    it("should mark dirty", function() {
      element.setX(50);
      var result = element.isDirty();
      assert(result === true);
    });
  });
  describe("#getY()", function() {
    it("should set y", function() {
      var expected = 30;
      element.setY(expected);
      var y = element.getY();
      assert(y === expected);
    });
    it("should mark dirty", function() {
      element.setY(30);
      var result = element.isDirty();
      assert(result === true);
    });
  });
  describe("#getLastX()", function() {
    it("should return last x", function() {
      element._lastX = 3;
      var result = element.getLastX();
      assert(result === element._lastX);
    });
  });
  describe("#getLastY()", function() {
    it("should return last y", function() {
      element._lastY = 3;
      var result = element.getLastY();
      assert(result === element._lastY);
    });
  });
  describe("#setLastX()", function() {
    it("should return last x", function() {
      var expected = 7;
      element.setLastX(expected);
      var result = element.getLastX();
      assert(result === expected);
    });
  });
  describe("#setLastY()", function() {
    it("should return last Y", function() {
      var expected = 8;
      element.setLastY(expected);
      var result = element.getLastY();
      assert(result === expected);
    });
  });
  describe("#setMoveRates()", function() {
    it("should set move rates", function(done) {
      element.notify = function() {};
      var expectedX = 10, expectedY = 20;
      element.setMoveRates(expectedX, expectedY);
      assert(element._xMoveRate === expectedX, "should have set x move rate");
      assert(element._yMoveRate === expectedY, "should have set y move rate");
      done();
    });
    it("should notify element stopped moving", function(done) {
      var result = null;
      element.notify = function(event) {
        result = event.type;
      };
      var expectedX = 0, expectedY = 0;
      element._xMoveRate = 10;
      element.setMoveRates(expectedX, expectedY);
      assert(result === C64Style.EventType.ELEMENT_STOPPED_MOVING, "should have notified of element stopping");
      done();
    });
    it("should notify element started moving", function(done) {
      var result = null;
      element.notify = function(event) {
        result = event.type;
      };
      var expectedX = 10, expectedY = 2;
      element.setMoveRates(expectedX, expectedY);
      assert(result === C64Style.EventType.ELEMENT_STARTED_MOVING, "should have notified of element starting");
      done();
    });
  });
  describe("#getMoveRateX()", function() {
    it("should return move rate", function() {
      element._xMoveRate = 3;
      var result = element.getMoveRateX();
      assert(result === element._xMoveRate);
    });
  });
  describe("#getMoveRateY()", function() {
    it("should return move rate", function() {
      element._yMoveRate = 3;
      var result = element.getMoveRateY();
      assert(result === element._yMoveRate);
    });
  });
  describe("#moveTo()", function() {
    it("should add move to queue", function(done) {
      element._runMove = function() {};
      var x = 10, y = 10, duration = 200;
      element.moveTo(x, y, duration);
      assert(element._moveQueue.size() > 0, "should have added move to queue");
      done();
    });
    it("should call run move", function(done) {
      var result = false;
      element._runMove = function() {
        result = true;
      };
      var x = 10, y = 10, duration = 200;
      element.moveTo(x, y, duration);
      assert(result === true, "should have called run move");
      done();
    });
    it("should notify if element started moving", function(done) {
      var result = null;
      element._runMove = function() {};
      element.notify = function(event) {
        result = event.type;
      };
      var x = 10, y = 10, duration = 200;
      element.moveTo(x, y, duration);
      assert(result === C64Style.EventType.ELEMENT_STARTED_MOVING, "should have notified");
      done();
    });
  });
  describe("#_runMove()", function() {
    it("start move if one exists", function(done) {
      var mockMove = {
        start:function() {
          this.calledIt = true;
        }
      };
      element._moveQueue.push(mockMove);

      element._runMove();

      assert(mockMove.calledIt === true, "should have called start on move");
      done();
    });
    it("should notify if element stopped", function(done) {
      var result = null;
      element.notify = function(event) {
        result = event.type;
      };

      element._runMove();

      assert(result === C64Style.EventType.ELEMENT_STOPPED_MOVING, "should have notified element stopped");
      done();
    });
  });
  describe("#moveOrderCallback()", function() {
    it("should set current moved null", function(done) {
      element._currentMove = {};
      element.moveOrderCallback();
      assert(element._currentMove === null, "should have nulled current move");
      done();
    });
    it("should set current moved null", function(done) {
      var result = false;
      element._runMove = function() {result = true;};
      element.moveOrderCallback();
      assert(result === true, "should have called run move");
      done();
    });
  });
  describe("#clearMoveQueue()", function() {
    it("should clear movequeue", function(done) {
      var result = false;
      element._moveQueue.clear = function() {result = true;};
      element.clearMoveQueue();
      assert(result === true, "should have cleared move queue");
      done();
    });
  });
  describe("#turnoff()", function() {
    it("should turn stuff off", function(done) {
      var clearedMoves = false;
      element._moveQueue.clear = function() {clearedMoves = true;};
      var calledHide = false;
      element.hide = function() {calledHide = true;};
      element._currentMove = {};
      element._xMoveRate = 10;
      element._yMoveRate = 20;
      this._xMoveFractionalAccumulator = 8;
      this._yMoveFractionalAccumulator = 18;

      element.turnOff();

      assert(clearedMoves === true, "should have cleared move queue");
      assert(calledHide === true, "should have called hide");
      assert(element._xMoveRate === 0, "should have zeroed move rates");
      assert(element._yMoveRate === 0, "should have zeroed move rates");
      assert(element._xMoveFractionalAccumulator === 0, "should have zeroed move rates");
      assert(element._yMoveFractionalAccumulator === 0, "should have zeroed move rates");
      done();
    });
  });
  describe("#show()", function() {
    it("should set hidden false;", function(done) {
      element._hidden = true;
      element.show();
      assert(element.isHidden() === false, "should have set hidden false;");
      done();
    });
    it("should set dirty true;", function(done) {
      element._dirty = false;
      element.show();
      assert(element.isDirty() === true, "should have set dirty true;");
      done();
    });
  });
  describe("#hide()", function() {
    it("should set hidden true;", function(done) {
      element._hidden = false;
      element.hide();
      assert(element.isHidden() === true, "should have set hidden true;");
      done();
    });
    it("should set dirty true;", function(done) {
      element._dirty = false;
      element.hide();
      assert(element.isDirty() === true, "should have set dirty true;");
      done();
    });
  });
  describe("#update()", function() {
    it("should call update location from move rates", function(done) {
      var result = false;
      element._updateLocationFromMoveRates = function() {result = true;};

      element.update(1,1);

      assert(result === true, "should have called updateLocationFromMoveRates");
      done();
    });
    it("should call _updateMoveOrder", function(done) {
      var result = false;
      element._updateLocationFromMoveRates = function() {};
      element._updateMoveOrder = function() {result = true;};

      element.update(1,1);

      assert(result === true, "should have called updateLocationFromMoveRates");
      done();
    });
    it("should set dirty if element moved", function(done) {
      element._updateLocationFromMoveRates = function() {};
      element._updateMoveOrder = function() {};
      element._x = 10;

      element.update(1,1);

      assert(element.isDirty(), "should have dirty true");
      done();
    });
    it("should notify if element moved", function(done) {
      var result = null;
      element.notify = function(event) {result = event.type;};
      element._updateLocationFromMoveRates = function() {};
      element._updateMoveOrder = function() {};
      element._updateMoveOrder = function() {};
      element._x = 10;

      element.update(1,1);

      assert(result === C64Style.EventType.ELEMENT_MOVED, "should have notified");
      done();
    });
    it("should return element", function(done) {
      element.notify = function(event) {result = event.type;};
      element._updateLocationFromMoveRates = function() {};
      element._updateMoveOrder = function() {};
      element._updateMoveOrder = function() {};
      element._x = 10;

      var result = element.update(1,1);

      assert(result !== null, "should have returned element");
      done();
    });
    it("should return null", function(done) {
      element.notify = function(event) {result = event.type;};
      element._updateLocationFromMoveRates = function() {};
      element._updateMoveOrder = function() {};
      element._updateMoveOrder = function() {};
      element.setDirty(false);

      var result = element.update(1,1);

      assert(result === null, "should have returned null");
      done();
    });
  });
  describe("#_updateLocationFromMoveRates()", function() {
    it("should update location", function(done){
      element.setMoveRates(10,10);

      element._updateLocationFromMoveRates(1000, 1000);

      assert(element.getX() === 10, "should have changed x coordinate");
      assert(element.getY() === 10, "should have changed y coordinate");
      assert(element.isDirty() === true, "should have set dirty");
      done();
    });
    it("should increment accumulator", function(done){
      element.setDirty(false);
      element.setMoveRates(10,10);

      element._updateLocationFromMoveRates(10, 10);

      assert(element._xMoveFractionalAccumulator === 0.10, "should have updated x accumulator");
      assert(element._yMoveFractionalAccumulator === 0.10, "should have updated y accumulator");
      assert(element.isDirty() === false, "should not have set dirty");
      done();
    });
    it("should clear accumulator", function(done){
      element._xMoveFractionalAccumulator = 0.57;
      element._xMoveFractionalAccumulator = 0.7;
      element.setMoveRates(0,0);

      element._updateLocationFromMoveRates(10, 10);

      assert(element._xMoveFractionalAccumulator === 0, "should have zeroed x accumulator");
      assert(element._yMoveFractionalAccumulator === 0, "should have zeroed y accumulator");
      done();
    });
  });
  describe("#_updateMoveOrder()", function() {
    it("should update current moveOrder", function(done) {
      var result = false;
      element.setDirty(false);
      element._currentMove = {
        update : function() {result = true;}
      };

      element._updateMoveOrder(1,1);

      assert(result === true, "should have updated move order");
      assert(element.isDirty(), "should have marked element dirty");
      done();
    });
  });
  describe("#clear()", function () {
    it("should clear rectangle", function(done) {
      element.getWidth = function() {return 5;};
      element.getHeight = function() {return 6;};
      element.clear(1,1);
      var mockContext = element.getCanvasContext();
      assert(mockContext.clearedX === -1, "cleared x, expected " + (-1) + ", actual " + mockContext.clearedX);
      assert(mockContext.clearedY === -1, "cleared y, expected " + (-1) + ", actual " + mockContext.clearedX);
      assert(mockContext.clearedWidth === 7, "cleared width, expected " + 7 + ", actual " + mockContext.clearedX);
      assert(mockContext.clearedHeight === 8, "cleared height, expected " + 8 + ", actual " + mockContext.clearedX);
      done();
    });
  });
  describe("#render()", function() {
    it("should update internal values", function(done) {
      element.setX(10);
      element.setY(10);
      element.setHasCollision(true);
      element.render(1,1);

      assert(element.getLastX() === 10, "should have updated lastX");
      assert(element.getLastY() === 10, "should have updated lastY");
      assert(element._dirty === false, "should have cleared dirty flag");
      assert(element._hadCollisionPreviousFrame === true, "should have set had collision");
      assert(element.hasCollision() === false, "should have cleared has collision");
      done();
    });
  });
  describe("#collidesWith()", function() {
    it("should return true if collision boxes overlap", function(done) {
      var other = getGfxElement();
      other.getWidth = function() {return 5;};
      other.getHeight = function() {return 6;};
      element.getWidth = function() {return 5;};
      element.getHeight = function() {return 6;};

      var result = element.collidesWith(other);

      assert(result, "should have returned true");
      done();
    });
    it("should return false if collision boxes dont overlap", function(done) {
      var other = getGfxElement();
      other.getWidth = function() {return 5;};
      other.getHeight = function() {return 6;};
      other.setX(50);
      element.getWidth = function() {return 5;};
      element.getHeight = function() {return 6;};

      var result = element.collidesWith(other);

      assert(!result, "should have returned false");
      done();
    });
    it("should return true if collision boxes touch", function(done) {
      var other = getGfxElement();
      other.getWidth = function() {return 5;};
      other.getHeight = function() {return 6;};
      other.setX(6);  //
      element.getWidth = function() {return 5;};
      element.getHeight = function() {return 6;};

      var result = element.collidesWith(other);

      assert(result, "should have returned true");
      done();
    });
    it("should notify on collision", function(done) {
      var other = getGfxElement();
      other.getWidth = function() {return 5;};
      other.getHeight = function() {return 6;};
      element.getWidth = function() {return 5;};
      element.getHeight = function() {return 6;};
      var result = null;
      element.notify = function(event) {
        result = event.type;
      };

      element.collidesWith(other);

      assert(result === C64Style.EventType.ELEMENT_COLLISION, "should have notified");
      done();
    });
  });
  describe("#collidesWithCoordinates()", function() {
    it("should return false if coord x < element x", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithCoordinates(-2,0);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return false if coord x > element x + element width", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithCoordinates(12,0);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return false if coord y < element y", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithCoordinates(0,-2);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return false if coord y > element y + element height", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithCoordinates(0,12);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return true if coords inside element bounds", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithCoordinates(3,3);

      assert(result === true, "should have returned true.");
      done();
    });
    it("should return true if coords touch element bounds", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithCoordinates(11,11);

      assert(result === true, "should have returned true.");
      done();
    });
  });
  describe("#collidesWithX()", function(){
    it("should return false if coord x < element x", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithX(-2);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return false if coord x > element x + element width", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithX(12);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return true if coords x is inside element bounds", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithX(3);

      assert(result === true, "should have returned true.");
      done();
    });
    it("should return true if coord x touches element bounds", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithX(11);

      assert(result === true, "should have returned true.");
      done();
    });
  });
  describe("#collidesWithY()", function(){
    it("should return false if coord y < element y", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithY(-2);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return false if coord y > element y + element height", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithY(12);

      assert(result === false, "should have returned false.");
      done();
    });
    it("should return true if coord is inside element bounds", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithY(10);

      assert(result === true, "should have returned true.");
      done();
    });
    it("should return true if coord y touches element bounds", function(done) {
      var element = getGfxElement();
      element.getWidth = function() {return 10;};
      element.getHeight = function() {return 10;};

      var result = element.collidesWithY(11);

      assert(result === true, "should have returned true.");
      done();
    });
  });
  describe("#getCollisionBoxX()", function() {
    it("should return collision box", function(done) {
      element.getScreenScaleX = function() {return 2;};
      element.setX(3);
      var result = element.getCollisionBoxX();

      var expected = 5;
      assert(result === expected, "should return collision box x. expected " + expected + ", actual " + result);
      done();
    });
  });
  describe("#getCollisionBoxY()", function() {
    it("should return collision box", function(done) {
      element.getScreenScaleY = function() {return 2;};
      element.setY(3);
      var result = element.getCollisionBoxY();

      var expected = 5;
      assert(result === expected, "should return collision box y. expected " + expected + ", actual " + result);
      done();
    });
  });
  describe("#getCollisionBoxWidth()", function() {
    it("should return collision box", function(done) {
      element.getTotalScaleX = function() {return 4;};
      element.getWidth = function() {return 8;};

      var result = element.getCollisionBoxWidth();

      var expected = 34;
      assert(result === expected, "should return collision box width. expected " + expected + ", actual " + result);
      done();
    });
  });
  describe("#getCollisionBoxHeight()", function() {
    it("should return collision box", function(done) {
      element.getTotalScaleY = function() {return 4;};
      element.getHeight = function() {return 8;};

      var result = element.getCollisionBoxHeight();

      var expected = 34;
      assert(result === expected, "should return collision box width. expected " + expected + ", actual " + result);
      done();
    });
  });
  describe("#handleMouseEvent()", function() {
    var result = null;
    beforeEach(function() {
      element.notify = function(event) {
        result = event.type;
      };
      element.collidesWithCoordinates = function() {
        return true;
      };
    });
    it("should notify MOUSE_MOVE_OVER_ELEMENT", function(done) {
      var event = {
        type : C64Style.EventType.MOUSE_MOVE,
        data : {x:0, y:0, row:0, col:0, time:0}
      };

      element.handleMouseEvent(event);

      assert(result === C64Style.EventType.MOUSE_MOVE_OVER_ELEMENT, "should have notified with MOUSE_MOVE_OVER_ELEMENT");
      done();
    });
    it("should notify MOUSE_DOWN_ON_ELEMENT", function(done) {
      var event = {
        type : C64Style.EventType.MOUSE_DOWN,
        data : {x:0, y:0, row:0, col:0, time:0}
      };

      element.handleMouseEvent(event);

      assert(result === C64Style.EventType.MOUSE_DOWN_ON_ELEMENT, "should have notified with MOUSE_DOWN_ON_ELEMENT");
      done();
    });
    it("should notify MOUSE_UP_ON_ELEMENT", function(done) {
      var event = {
        type : C64Style.EventType.MOUSE_UP,
        data : {x:0, y:0, row:0, col:0, time:0}
      };

      element.handleMouseEvent(event);

      assert(result === C64Style.EventType.MOUSE_UP_ON_ELEMENT, "should have notified with MOUSE_UP_ON_ELEMENT");
      done();
    });
  });
  describe("#on()", function(){
    it("should add callback to list", function(done) {
      var eventType = "newType";
      element.on(eventType, function() {
        assert(true);
        done();
      });
      element._eventListeners[eventType][0]();
    });
  });
  describe("#clearEventHandlers()", function(){
    it("should add callback to list", function(done) {
      var eventType = "newType";
      element.on(eventType, function() {});

      element.clearEventHandlers(eventType);

      assert(element._eventListeners[eventType].length === 0, "should have cleared handler list");
      done();
    });
    it("should throw error", function(done) {
      var eventType = "newType";

      var result = throwsError(element.clearEventHandlers.bind(element, eventType));

      assert(result === true, "should have thrown error");
      done();
    });
  });
  describe("#notify()", function() {
    it("should throw error", function(done) {
      var event = {type:"blerg"};

      var result = throwsError(element.notify.bind(element,event));

      assert(result === true, "should have thrown error");
      done();
    });
    it("should notify listeners", function(done) {
      var event = {type:"blerg"};
      element.getScreenContext = function() {
        return {notify:function(){}};
      };
      var result = false;
      element.on("blerg", function() {
        result = true;
      });

      element.notify(event);
      assert(result, "should have notified listeners");
      done();
    });
    it("should notify screenContext", function(done) {
      var event = {type:"blerg"};
      element.on("blerg", function() {});
      var result = false;
      element.getScreenContext = function() {
        return {notify:function(){result = true;}};
      };

      element.notify(event);
      assert(result, "should have notified screenContext");
      done();
    });
  });
  describe("#getZIndexComparable()", function() {
    it("should return zindex comparable", function(done) {
      var result = element.getZIndexComparable();
      assert(result instanceof C64Style.GfxElementZIndexComparable, "should have returned zindexComparable");
      done();
    });
  });
});

function getGfxElement(props) {
  var element = new C64Style.GfxElement(C64Style.Mocks.getMockScreen(), C64Style.Mocks.getMockLayer(), props);
  return element;
}
