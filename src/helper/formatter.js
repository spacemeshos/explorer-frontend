import * as React from 'react';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Format (MM-DD-YYYY hh:mm:ss A)
export const fullDate = (unixTimestamp) => {
  const time = new Date(unixTimestamp * 1000);
  return `(${months[time.getUTCMonth()]}-${time.getUTCDate()}-${time.getUTCFullYear()}
  ${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}
  + UTC)`
};

// Format (00/00/0000)
export const formattedDate = (unixTimestamp) => {
  const time = new Date(unixTimestamp * 1000);
  return `${time.getUTCMonth()}/${time.getUTCDate()}/${time.getUTCFullYear()}`
};

// Format (10:35:13 + UTC)
export const formattedTime = (unixTimestamp) => {
  const time = new Date(unixTimestamp * 1000);
  return `${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()} + UTC`
};
