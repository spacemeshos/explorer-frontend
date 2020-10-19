import * as React from 'react';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const fullDate = (unixTimestamp) => {
  const time = new Date(convertTime(unixTimestamp));

  return `(${months[time.getUTCMonth()]}/${time.getUTCDate()}/${time.getUTCFullYear()}
  ${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()} UTC)`
};

// Format (00/00/0000)
export const formattedDate = (unixTimestamp) => {
  const time = new Date(convertTime(unixTimestamp));
  return `${time.getUTCMonth() + 1}/${time.getUTCDate()}/${time.getUTCFullYear()}`
};

// Format (10:35:13 + UTC)
export const formattedTime = (unixTimestamp) => {
  const time = new Date(convertTime(unixTimestamp));
  return `${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()} UTC`
};

const convertTime = (unixTimestamp) => {
  const timestampMilliseconds = unixTimestamp * 1000;
  const dateObject = new Date(timestampMilliseconds);

  return dateObject.getTime() - (dateObject.getTimezoneOffset() * 60000);
};
