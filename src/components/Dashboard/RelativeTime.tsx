import * as React from 'react';
import * as classNames from 'classnames';
import { formatTime } from '../../util';

export interface RelativeTimeProps {
  value: number;
}

export const RelativeTime: React.SFC<RelativeTimeProps> = ({ value }) => (
  <span
    className={classNames('relative', {
      gain: value < 0,
      lost: value > 0,
    })}
  >
    {formatTime(value)}
  </span>
);
