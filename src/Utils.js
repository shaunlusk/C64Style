var Utils = {};

/** Write a message to the log.
* @param {string} msg The message to write.
*/
Utils.log = function(msg) {
  console.log(msg);
};

Utils.noop = function() {};

export {Utils};
