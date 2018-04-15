import * as React from 'react';
import * as classNames from 'classnames';

import './Panel.css';

export interface PanelProps {
  className?: string;
  children: any;
}

export const Panel: React.SFC<PanelProps> = ({ className, children }) => (
  <div className={classNames('Panel', className)}>{children}</div>
);
