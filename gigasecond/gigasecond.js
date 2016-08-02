var Gigasecond = function(date) {
  this.startDate = date;
};
Gigasecond.prototype.date = function() {
  return new Date(this.startDate.getTime() + (Math.pow(10, 9) * 1000));
};
module.exports = Gigasecond;
