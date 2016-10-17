var Word = function() {};

Word.prototype.count = function(s) {
  s = s.toLowerCase();
  var phrase = s.split(" ");
  var words = {};
  for(var i = phrase.length -1; i >= 0; i--) {
    var counter = 0;
    for(word in phrase) {
      if (phrase[word] === phrase[i]) {
        counter++;
        words[phrase[word]] = counter;
      }

    }
  }
  return words;
};

module.exports = Word;
