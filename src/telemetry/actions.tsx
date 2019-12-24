import { ActionType, createAction } from 'typesafe-actions';
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
  showLineCrossInfo: createAction('LINE_CROSS_INFO_SHOW')<LineCrossPayload>(),
  hideLineCrossInfo: createAction('LINE_CROSS_INFO_HIDE')(),
  updateTelemetryValues: createAction('TELEMETRY_UPDATE')<TelemetryPayload>(),
};

export const lineCross: ActionCreator<ThunkAction<
  any,
  RootState,
  undefined,
  Action
>> = (payload: LineCrossPayload) => (dispatch: Dispatch): Action => {
  setTimeout(() => dispatch(telemetryActions.hideLineCrossInfo()), 3000);
  return dispatch(telemetryActions.showLineCrossInfo(payload));
};

export type TelemetryAction = ActionType<typeof telemetryActions>;
