/* Is the date today?  How to use .toDateString */
function isToday(date) {
    return new Date ().toDateString() == date.toDateString();
}