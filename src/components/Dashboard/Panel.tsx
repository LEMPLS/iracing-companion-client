import * as React from 'react';
import classNames from 'classnames';

import './Panel.css';

export interface PanelProps {
  className?: string;
  children: any;
}

export const Panel: React.FC<PanelProps> = ({ className, children }) => (
  <div className={classNames('Panel', className)}>{children}</div>
);
