var Word = function() {};

Word.prototype.count = function(s) {
  var phrase = s.split(" ");
  var words = {};
  for(word in phrase) {
    var counter = 0;
    if (phrase[word] === phrase[word]) {
      counter++;
      words[phrase[word]] = counter;
    }
  }
  return words;
};

module.exports = Word;
