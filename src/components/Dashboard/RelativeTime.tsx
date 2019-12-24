import * as React from 'react';
import classNames from 'classnames';
import { formatRelativeTime } from '../../util';

export interface RelativeTimeProps {
  value: number;
  decimals?: number;
  highlightGainedOrLost?: boolean;
  className?: string;
}

export const RelativeTime: React.FC<RelativeTimeProps> = ({
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
