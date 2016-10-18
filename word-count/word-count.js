var Word = function() {};

Word.prototype.count = function(s) {

  var phrase;
  var words = {};
  s = s.trim().toLowerCase();

  if (s.split(/\n/|/\t/).length > 1) {
    phrase = s.split(/\n/|/\t/);
  }  else  {
    phrase = s.split(/\s+/);
  }

  for(var i = phrase.length -1; i >= 0; i--) {
    var counter = 0;
    for(var word in phrase) {
      if (phrase[word] === phrase[i]) {
        counter++;
        words[phrase[word]] = counter;
      }
    }
  }
  return words;
};

module.exports = Word;
