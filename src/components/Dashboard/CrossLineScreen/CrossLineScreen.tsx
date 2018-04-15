import * as React from 'react';
import { formatTime } from '../../../util';
import { Panel } from '../Panel';
import { RelativeTime } from '../RelativeTime';

import './CrossLineScreen.css';

export interface CrossLineScreenProps {
  gainedToAhead: number;
  gapToAhead: number;
  gainedToBehind: number;
  gapToBehind: number;
  lapsToGo: number;
}

export const CrossLineScreen: React.SFC<CrossLineScreenProps> = ({
  gainedToAhead,
  gapToAhead,
  gainedToBehind,
  gapToBehind,
  lapsToGo,
}) => (
  <div className="CrossLineScreen">
    <Panel>
      <div className="wrapper">
        <RelativeTime value={gainedToAhead} />
        <span className="gap">({formatTime(gapToAhead)})</span>
      </div>
    </Panel>
    <Panel>
      <div className="wrapper">
        <RelativeTime value={gainedToBehind} />
        <span className="gap">({formatTime(gapToBehind)})</span>
      </div>
    </Panel>
    <Panel className="to-go">{lapsToGo} to go</Panel>
  </div>
);
