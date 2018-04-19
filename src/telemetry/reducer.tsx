import { LineCrossPayload, TelemetryAction, TelemetryPayload } from './actions';

export interface TelemetryState {
  readonly lineCross: {
    show: boolean;
    values: LineCrossPayload;
  };
  readonly values: TelemetryPayload;
}

const initialState: TelemetryState = {
  lineCross: {
    show: false,
    values: {},
  },
  values: {},
};

const reducer = (
  state: TelemetryState = initialState,
  action: TelemetryAction,
) => {
  switch (action.type) {
    case 'LINE_CROSS_INFO_SHOW':
      const { payload } = action;
      const {
        GapToAhead,
        GainedToAhead,
        GapToBehind,
        GainedToBehind,
      } = payload;
      return {
        ...state,
        lineCross: {
          show: true,
          values: {
            GapToAhead,
            GainedToAhead,
            GapToBehind,
            GainedToBehind,
          },
        },
      };

    case 'LINE_CROSS_INFO_HIDE': {
      return {
        ...state,
        lineCross: {
          show: false,
        },
      };
    }

    case 'TELEMETRY_UPDATE': {
      const { payload } = action;
      const {
        SessionLapsRemain,
        LapsToPit,
        WaterTemp,
        OilTemp,
        LapCompletedSincePit,
        RaceLapsRemaining,
      } = payload;

      return {
        ...state,
        values: {
          SessionLapsRemain,
          LapsToPit,
          WaterTemp,
          OilTemp,
          LapCompletedSincePit,
          RaceLapsRemaining,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
