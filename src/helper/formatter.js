const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Add zero ahead to date, if month or day < 10
function addZeroAheadToDate(num) {
  return `${(`0${num.toString()}`).slice(-2)}`;
}

const convertTime = (unixTimestamp) => {
  let timestampMilliseconds = unixTimestamp * 1000;
  if (unixTimestamp.toString().length > 10) {
    timestampMilliseconds = unixTimestamp / 1000000;
  }
  const dateObject = new Date(timestampMilliseconds);
  return dateObject.getTime() - (dateObject.getTimezoneOffset() * 60000);
};

export const fullDate = (unixTimestamp) => {
  const time = new Date(convertTime(unixTimestamp));

  return `(${months[time.getUTCMonth()]}/${addZeroAheadToDate(time.getUTCDate())}/${time.getUTCFullYear()}
  ${addZeroAheadToDate(time.getUTCHours())}:${addZeroAheadToDate(time.getUTCMinutes())}:${addZeroAheadToDate(time.getUTCSeconds())})`;
};

// Format (00/00/0000)
export const formattedDate = (unixTimestamp) => {
  const time = new Date(convertTime(unixTimestamp));
  // we return "time.getUTCMonth()" and +1, because, start months counter from 0 in JavaScript
  return `${addZeroAheadToDate((time.getUTCMonth()) + 1)}/${addZeroAheadToDate(time.getUTCDate())}/${time.getUTCFullYear()}`;
};

// Format (10:35:13 + UTC)
export const formattedTime = (unixTimestamp) => {
  const time = new Date(convertTime(unixTimestamp));
  return `${addZeroAheadToDate(time.getUTCHours())}:${addZeroAheadToDate(time.getUTCMinutes())}:${addZeroAheadToDate(time.getUTCSeconds())}`;
};
