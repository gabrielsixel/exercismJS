//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.silent = function(input) {
  return input.replace(/\s+/g, '') === '';
};

Bob.prototype.question = function(input) {
  return input[input.length - 1] === '?';
};

Bob.prototype.yelling = function(input) {
  return input.toUpperCase() === input && /[A-Z]/.test(input);
};

Bob.prototype.hey = function(input) {
  var length = input.length;
  switch (true) {
    case this.yelling(input):
      return 'Whoa, chill out!';
    case this.silent(input) :
      return 'Fine. Be that way!';
    case this.question(input) :
      return 'Sure.';
    default:
      return 'Whatever.';
  }
};


module.exports = Bob;
