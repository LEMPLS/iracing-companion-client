import { ActionsUnion, buildAction } from 'typesafe-actions';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../rootReducer';

export interface TelemetryValues {
  SessionLapsRemain?: number;
  LapsToPit?: number;
}

export const telemetryActions = {
  showLineCrossInfo: buildAction('LINE_CROSS_INFO_SHOW').empty(),
  hideLineCrossInfo: buildAction('LINE_CROSS_INFO_HIDE').empty(),
  updateTelemetryValues: buildAction('TELEMETRY_UPDATE').payload<
    TelemetryValues
  >(),
};

export const lineCross: ActionCreator<
  ThunkAction<Action, RootState, void>
> = () => {
  return (dispatch: Dispatch<RootState>): Action => {
    setTimeout(() => dispatch(telemetryActions.hideLineCrossInfo()), 3000);
    return dispatch(telemetryActions.showLineCrossInfo());
  };
};

export type TelemetryAction = ActionsUnion<typeof telemetryActions>;