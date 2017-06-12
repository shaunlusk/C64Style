var mixin = function() {
  if (!this.mixinInitializers) {this.mixinInitializers = [];}
  this.mixinInitializers.push(function(props) {
    // ...
    // initialize mixin properties
    // ...
  }.bind(this));
};

function MyClass(props) {
  props = props || {};
  // ...
  // initialize class properties
  // ...

  // probably use individual initializers instead of generic forEach
  // this.mixinInitializers.forEach(
  //   function(callback) {
  //     callback(props);
  //   }
  // );
}
mixin.call(MyClass.prototype);
