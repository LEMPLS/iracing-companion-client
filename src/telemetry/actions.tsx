import { ActionsUnion, buildAction } from 'typesafe-actions';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../rootReducer';

export interface TelemetryPayload {
  SessionLapsRemain?: number;
  LapsToPit?: number;
  WaterTemp?: number;
  OilTemp?: number;
  LapCompletedSincePit?: number;
  RaceLapsRemaining?: number;
}

export interface LineCrossPayload {
  GapToAhead?: number;
  GainedToAhead?: number;
  GapToBehind?: number;
  GainedToBehind?: number;
}

export const telemetryActions = {
  showLineCrossInfo: buildAction('LINE_CROSS_INFO_SHOW').payload<
    LineCrossPayload
  >(),
  hideLineCrossInfo: buildAction('LINE_CROSS_INFO_HIDE').empty(),
  updateTelemetryValues: buildAction('TELEMETRY_UPDATE').payload<
    TelemetryPayload
  >(),
};

export const lineCross: ActionCreator<ThunkAction<Action, RootState, void>> = (
  payload: LineCrossPayload,
) => {
  return (dispatch: Dispatch<RootState>): Action => {
    setTimeout(() => dispatch(telemetryActions.hideLineCrossInfo()), 3000);
    return dispatch(telemetryActions.showLineCrossInfo(payload));
  };
};

export type TelemetryAction = ActionsUnion<typeof telemetryActions>;
