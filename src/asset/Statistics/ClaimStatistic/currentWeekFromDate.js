const currentWeekFromDate = (date) => {
  date = new Date(date);
  const startDate = new Date(date.getFullYear(), 0, 1);
  var days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
  var weekNumber = Math.ceil(days / 7);
  return weekNumber;
};
export default currentWeekFromDate;
