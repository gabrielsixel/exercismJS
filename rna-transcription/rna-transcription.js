var DnaTranscriber = function() {};
/*
  * `G` -> `C`
  * `C` -> `G`
  * `T` -> `A`
  * `A` -> `U`
*/

DnaTranscriber.prototype.toRna = function(strand) {
  var length = strand.length;
  var rna = '';
  for (var i = 0; i < length; i++) {
    switch (true) {
      case strand.charAt(i) == 'G':
        rna = rna + 'C';
        break;
      case strand.charAt(i) == 'C':
        rna = rna + 'G';
        break;
      case strand.charAt(i) == 'T':
        rna = rna + 'A';
        break;
      case strand.charAt(i) == 'A':
        rna = rna + 'U';
        break;
      default:
    }
  }
  return rna;
};

module.exports = DnaTranscriber;
