var C64Style = C64Style || {};

/** @interface
* Required by Sprite
*/
C64Style.AnimationFrame = function() {};
C64Style.AnimationFrame.prototype.getDuration = function() {throw new Error("getDuration Not Implemented on this AnimationFrame");};

C64Style.Sprite = function(screenContext, parentLayer, props) {
  props = props || {};
  C64Style.GfxElement.call(this, screenContext, parentLayer, props);

  this._frames = props.frames || [];
  this._ttl = props.ttl || -1;
  this._loop = props.loop || true;
  this._loopsToLive = props.loopsToLive || -1;

  this._fidx = 0;
  this._currentFrameElapsed = 0;
  this._done = false;
  this._freezeFrameIdx = null;
  this._loopCount = 0;
  this._elapsed = 0;
};

C64Style.Sprite.prototype = new C64Style.GfxElement();
C64Style.Sprite.prototype.constructor = C64Style.Sprite;

C64Style.Sprite.prototype.update = function (time,diff) {
  if (this._frames.length === 0 || this._done) return null;

  if (this._ttl > -1) {
    this._elapsed += diff;
    if (this._elapsed >= this._ttl){
      this._done = true;
    }
  }

  this._currentFrameElapsed += diff;
  if (this._currentFrameElapsed >= this._frames[this._fidx].getDuration()) {
    while (this._currentFrameElapsed >= this._frames[this._fidx].getDuration()) {
      this._currentFrameElapsed -= this._frames[this._fidx].getDuration();
      this._fidx++;
      if (this._fidx === this._frames.length) {
        this._fidx = 0;
        this._loopCount++;
        if (!this._loop) {
          this._done = true;
          if (this._freezeFrameIdx) this._fidx = this._freezeFrameIdx;
        } else if (this._loopsToLive > -1 && this._loopCount >= this._loopsToLive) {
          this._done = true;
        }
      }
    }
    this.setDirty(true);
  }
  if (this._done) {
    this.doEndOfAnimation();
  }
  if (this.isDirty()) return this;

  return null;
};

C64Style.Sprite.prototype.render = function(time,diff) {
  if (this.isHidden() || !this.isDirty()) return;

  this.renderFrame(time, diff, this._frames[this._fidx]);

  C64Style.GfxElement.prototype.render.call(this, time, diff);
};

/** override me
*/
C64Style.Sprite.prototype.renderFrame = function(time, diff, frame) {

};

C64Style.Sprite.prototype.doEndOfAnimation = function() {
  // TODO Eventing
};
