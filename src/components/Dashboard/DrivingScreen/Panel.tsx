import * as React from 'react';
import { Panel as PanelBase } from '../Panel';
import './Panel.css';

export interface DrivingScreenPanelProps {
  title: string;
  value?: string | number;
  className?: string;
}

export const Panel: React.FC<DrivingScreenPanelProps> = ({
  title,
  value,
  className,
}) => (
  <PanelBase className={className}>
    <div className="panel-title">{title}</div>
    <div className="panel-value">{value}</div>
  </PanelBase>
);
