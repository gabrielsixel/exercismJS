var Year = function(year) {
  this.year = year
};

Year.prototype.isLeap = function() {
  return this.year % 4 === 0 && (this.year % 400 === 0 || this.year % 100 !== 0) ? true : false;
};

module.exports = Year;
