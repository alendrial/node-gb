require("moment-precise-range-plugin");
const moment = require("moment");
const EventEmitter = require("events");
const [dateStringInFuture] = process.argv.slice(2);
const DATE_FORMAT_PATTERN = "YYYY-MM-DD HH-mm:ss";

const getDateFromDateString = (dateString) => {
  const [hour, day, month, year] = dateString.split('-');
  return new Date(Date.UTC(year, month - 1, day, hour));
};

const showRemaining = (dateInFuture) => {
  const dateNow = new Date();
  if ( dateNow >= dateInFuture) {
    emitter.emit("timerEnd");
  } else {
    const currentDateFormatted = moment(dateNow, DATE_FORMAT_PATTERN);
    const futureDateFormatter = moment(dateInFuture, DATE_FORMAT_PATTERN);
    const diff = moment.preciseDiff(currentDateFormatted, futureDateFormatter);

    console.clear();
    console.log(diff);
  }
};

const showTimerDone = (timerId) => {
  clearInterval(timerId);
  console.log("Timer is gone");
};

const emitter = new EventEmitter();
const dateInFuture = getDateFromDateString(dateStringInFuture);
const timerId = setInterval(() => {
  emitter.emit("timerTick", dateInFuture);
}, 1000);

emitter.on("timerTick", showRemaining);
emitter.on("timerEnd", () => {
  showTimerDone(timerId);
});
