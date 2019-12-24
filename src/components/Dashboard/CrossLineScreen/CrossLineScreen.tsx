import * as React from 'react';
import { Panel } from '../Panel';
import { RelativeTime } from '../RelativeTime';
import { connect } from 'react-redux';
import {
  getLineCrossValues,
  getTelemetryState,
  getValues,
  showLineCrossInfo,
} from '../../../telemetry/selectors';
import { lineCross, telemetryActions } from '../../../telemetry/actions';
import { RootState } from '../../../rootReducer';

import './CrossLineScreen.css';

export interface CrossLineScreenProps {
  GapToAhead?: number;
  GainedToAhead?: number;
  GapToBehind?: number;
  GainedToBehind?: number;
  RaceLapsRemaining?: number;
}

const CrossLineScreenBase: React.FC<CrossLineScreenProps> = ({
  GapToAhead,
  GainedToAhead,
  GapToBehind,
  GainedToBehind,
  RaceLapsRemaining,
}) => (
  <div className="CrossLineScreen">
    <Panel>
      <div className="wrapper">
        {GainedToAhead ? (
          <RelativeTime
            value={GainedToAhead}
            decimals={2}
            highlightGainedOrLost={true}
          />
        ) : (
          <div className="relative">-</div>
        )}
        {GapToAhead ? (
          <RelativeTime className="gap" value={GapToAhead} decimals={1} />
        ) : (
          <div className="gap">-</div>
        )}
      </div>
    </Panel>
    <Panel>
      <div className="wrapper">
        {GainedToBehind ? (
          <RelativeTime value={GainedToBehind} highlightGainedOrLost={true} />
        ) : (
          <div className="relative">-</div>
        )}
        {GapToBehind ? (
          <RelativeTime className="gap" value={GapToBehind} />
        ) : (
          <div className="gap">-</div>
        )}
      </div>
    </Panel>
    <Panel className="to-go">{RaceLapsRemaining} to go</Panel>
  </div>
);

function mapStateToProps(state: RootState) {
  const telemetryState = getTelemetryState(state);
  const {
    GapToAhead,
    GainedToAhead,
    GapToBehind,
    GainedToBehind,
  } = getLineCrossValues(telemetryState);
  const { RaceLapsRemaining } = getValues(telemetryState);
  return {
    GapToAhead,
    GainedToAhead,
    GapToBehind,
    GainedToBehind,
    RaceLapsRemaining,
    showLineCrossInfo: showLineCrossInfo(telemetryState),
  };
}

export const CrossLineScreen = connect(mapStateToProps, {
  lineCross,
  updateTelemetryValues: telemetryActions.updateTelemetryValues,
})(CrossLineScreenBase);
