import * as React from 'react';
import { connect } from 'react-redux';
import Sockette from 'sockette';
import { RootState } from '../../rootReducer';
import { lineCross, telemetryActions } from '../../telemetry/actions';
import {
  isLineCrossMessage,
  isTelemetryMessage,
  Message,
} from '../../telemetry/messageTypes';
import {
  getTelemetryState,
  getValues,
  showLineCrossInfo,
} from '../../telemetry/selectors';
import { CrossLineScreen } from './CrossLineScreen/CrossLineScreen';
import { DrivingScreen } from './DrivingScreen/DrivingScreen';

import './Dashboard.css';

export interface DashboardProps {
  updateTelemetryValues: typeof telemetryActions.updateTelemetryValues;
  lineCross: typeof lineCross;
  SessionLapsRemain: number;
  LapsToPit: number;
  showLineCrossInfo: boolean;
}

class DashboardBase extends React.Component<DashboardProps, {}> {
  constructor(props: DashboardProps) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
  }

  public componentDidMount() {
    return new Sockette('ws://localhost:8080', {
      // onopen: console.log,
      onmessage: (e: any) => this.handleMessage(JSON.parse(e.data)),
      // onreconnect: e => console.log('Reconnecting...', e),
      // onmaximum: e => console.log('Stop Attempting!', e),
      // onclose: e => console.log('Closed!', e),
      // onerror: e => console.log('Error:', e),
    });
  }

  public handleMessage(message: Message) {
    const { updateTelemetryValues, lineCross } = this.props;

    if (isTelemetryMessage(message)) {
      updateTelemetryValues(message.payload);
    } else if (isLineCrossMessage(message)) {
      lineCross(message.payload);
    }
  }

  public render() {
    const { showLineCrossInfo } = this.props;
    return (
      <div className="Dashboard">
        {showLineCrossInfo ? <CrossLineScreen /> : <DrivingScreen />}
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  const telemetryState = getTelemetryState(state);
  const { SessionLapsRemain, LapsToPit } = getValues(telemetryState);
  return {
    LapsToPit,
    SessionLapsRemain,
    showLineCrossInfo: showLineCrossInfo(telemetryState),
  };
}

export const Dashboard = connect(mapStateToProps, {
  lineCross,
  updateTelemetryValues: telemetryActions.updateTelemetryValues,
})(DashboardBase);
