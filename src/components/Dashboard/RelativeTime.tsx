import * as React from 'react';
import * as classNames from 'classnames';
import { formatRelativeTime } from '../../util';

export interface RelativeTimeProps {
  value: number;
  decimals?: number;
  highlightGainedOrLost?: boolean;
  className?: string;
}

export const RelativeTime: React.SFC<RelativeTimeProps> = ({
  value,
  decimals,
  highlightGainedOrLost,
  className,
}) => (
  <span
    className={classNames('relative', className, {
      gain: highlightGainedOrLost && value < 0,
      lost: highlightGainedOrLost && value > 0,
    })}
  >
    {formatRelativeTime(value, decimals)}
  </span>
);
