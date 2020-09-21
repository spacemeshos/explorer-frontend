// @flow
import * as React from 'react';
import TimeAgo from 'react-timeago'

import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

type Props = {
  time: number
};

const enString = {
  prefixAgo: null,
  prefixFromNow: null,
  suffixAgo: 'ago',
  suffixFromNow: 'from now',
  seconds: 'less than a minute',
  minute: 'a minute',
  minutes: '%d minutes',
  hour: 'an hour',
  hours: '%d hours',
  day: 'a day',
  days: '%d days',
  month: 'a month',
  months: '%d months',
  year: 'a year',
  years: '%d years',
  wordSeparator: ' '
};

const CustomTimeAgo = (props: Props) => {
  const { time } = props;
  const jsDate = new Date(time * 1000);

  const formatter = buildFormatter(enString);

  return (
    <span>
      <TimeAgo date={jsDate} formatter={formatter} />
    </span>
  );
};

export default CustomTimeAgo;
