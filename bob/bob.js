//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};


Bob.prototype.hey = function(input) {
  var length = input.length;
  switch (true) {
    //Asking a question, checks if the last character is a questiion mark
    case input.charAt(length - 1) === '?':
    return 'Sure.';
    case (input === undefined || input === '') :
    return 'Fine. Be that way!';
    //Shouting checks if the sentence match the Regular Expression
    case this.yelling(input) :
    return 'Whoa, chill out!';
    default:
    return 'Whatever.';
  }
};

Bob.prototype.yelling = function(input) {
  var length = input.length;
  var temp = '';
  var regexUpper = new RegExp('([\u0041-\u1E921][A-Z-_:]+(?:(?:[^\r\n]\s[\u0041-\u1E921-_:]+)?)){1,}[^a-z]', 'gm');

  for (var i = 0; i < length; i++) {
    temp += input.charAt(i).toUpperCase();
  }
  if (temp !== input) {
    if (!regexUpper.test(input)) {
      return false;
    }
  }
  return true;
};

module.exports = Bob;
