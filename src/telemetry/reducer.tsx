import { TelemetryAction, TelemetryValues } from './actions';
import { RootState } from '../rootReducer';

export interface TelemetryState {
  readonly showLineCrossInfo: boolean;
  readonly values: TelemetryValues;
}

const initialState: TelemetryState = {
  showLineCrossInfo: false,
  values: {},
};

const reducer = (
  state: TelemetryState = initialState,
  action: TelemetryAction,
) => {
  switch (action.type) {
    case 'LINE_CROSS_INFO_SHOW':
      return {
        ...state,
        showLineCrossInfo: true,
      };

    case 'LINE_CROSS_INFO_HIDE': {
      return {
        ...state,
        showLineCrossInfo: false,
      };
    }

    case 'TELEMETRY_UPDATE': {
      const { payload } = action;
      const { SessionLapsRemain, LapsToPit } = payload;

      return {
        ...state,
        values: {
          SessionLapsRemain,
          LapsToPit,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;

// - selectors - //

export const getTelemetryState = (state: RootState): TelemetryState =>
  state.telemetry;

export const getValues = (state: TelemetryState): TelemetryValues =>
  state.values;

export const showLineCrossInfo = (state: TelemetryState): boolean =>
  state.showLineCrossInfo;
