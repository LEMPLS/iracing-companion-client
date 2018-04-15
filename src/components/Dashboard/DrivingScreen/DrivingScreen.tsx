import * as React from 'react';
import * as classNames from 'classnames';
import { connect } from 'react-redux';
import { RootState } from '../../../rootReducer';
import { getTelemetryState, getValues } from '../../../telemetry/reducer';
import { Panel } from './Panel';

import './DrivingScreen.css';

export interface DrivingScreenProps {
  LapsToPit: number;
}

const DrivingScreenBase: React.SFC<DrivingScreenProps> = ({ LapsToPit }) => (
  <div className="DrivingScreen">
    <Panel title="Since pit" value="5" />
    <Panel
      title="To go"
      value={LapsToPit}
      className={classNames({ warning: LapsToPit === 0 })}
    />
    <Panel
      title="Water"
      value="180"
      className={classNames({ warning: true })}
    />
    <Panel title="Oil" value="200" />
  </div>
);

function mapStateToProps(state: RootState) {
  const telemetryState = getTelemetryState(state);
  const { LapsToPit } = getValues(telemetryState);
  return {
    LapsToPit,
  };
}

export const DrivingScreen = connect(mapStateToProps)(DrivingScreenBase);
