var Isogram = function(s) {};

Isogram.prototype.isIsogram = function() {

  var chars = {};
  s = s.trim().toLowerCase();

  for (var j = s.length -1; j >= 0 ; j--) {
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
      if(s.charAt(i) === s.charAt(j)) {
        counter++;
        chars[s.charAt(i)] = counter;
      }
    }
  }
  for(char in chars) {
    if(chars[char] > 1) {
      return false;
    }
  }
};

module.exports = Isogram;
