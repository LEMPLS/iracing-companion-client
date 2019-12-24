import * as React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { RootState } from '../../../rootReducer';
import { getTelemetryState, getValues } from '../../../telemetry/selectors';
import { Panel } from './Panel';

import './DrivingScreen.css';

export interface DrivingScreenProps {
  LapsToPit?: number;
  WaterTemp?: number;
  OilTemp?: number;
  LapCompletedSincePit?: number;
  RaceLapsRemaining?: number;
}

const DrivingScreenBase: React.FC<DrivingScreenProps> = ({
  LapsToPit,
  WaterTemp,
  OilTemp,
  LapCompletedSincePit,
  RaceLapsRemaining,
}) => (
  <div className="DrivingScreen">
    <Panel
      title="Since pit"
      value={LapCompletedSincePit ? LapCompletedSincePit.toFixed(0) : '-'}
    />
    <Panel
      title="To go"
      value={RaceLapsRemaining ? RaceLapsRemaining.toFixed(0) : '-'}
      className={classNames({ warning: RaceLapsRemaining === 0 })}
    />
    <Panel
      title="Water"
      value={WaterTemp ? WaterTemp.toFixed(0) : '-'}
      className={classNames({ warning: WaterTemp ? WaterTemp >= 130 : false })}
    />
    <Panel
      title="Oil"
      value={OilTemp ? OilTemp.toFixed(0) : '-'}
      className={classNames({ warning: OilTemp ? OilTemp >= 135 : false })}
    />
  </div>
);

function mapStateToProps(state: RootState) {
  const telemetryState = getTelemetryState(state);
  const {
    LapsToPit,
    WaterTemp,
    OilTemp,
    LapCompletedSincePit,
    RaceLapsRemaining,
  } = getValues(telemetryState);
  return {
    LapsToPit,
    WaterTemp,
    OilTemp,
    LapCompletedSincePit,
    RaceLapsRemaining,
  };
}

export const DrivingScreen = connect(mapStateToProps)(DrivingScreenBase);
