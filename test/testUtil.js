function assert(statement, desc) {
  if (statement) return true;
  throw "Fail: " + (desc || "Assertion failed.");
}

function throwsError(callback) {
  var threwit = false;
  try {
    callback();
  } catch(e) {
    threwit = true;
  }
  return threwit;
}
