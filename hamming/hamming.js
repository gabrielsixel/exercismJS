var Hamming = function () {};

  Hamming.prototype.compute = function(strandA, strandB) {
    var lengthA = strandA.length;
    var lengthB = strandB.length;
    var distance = 0;
    if (lengthA != lengthB) {
      throw new Error('DNA strands must be of equal length.');
    }
    for (var i = 0; i < lengthA; i++) {
      if(strandA.charAt(i) != strandB.charAt(i)) {
        distance++;
      }
    }
    return distance;
};

module.exports = Hamming;
