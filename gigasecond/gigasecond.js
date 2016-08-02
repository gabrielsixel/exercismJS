var Gigasecond = function(date) {
  this.startDate = date;
};

Gigasecond.prototype.date = function() {
  var startTime = this.startDate.getTime();
  var endDate = new Date(startTime + (Math.pow(10, 9) * 1000));
  return endDate;
};

module.exports = Gigasecond;
