import { combineReducers } from 'redux';
import telemetryReducer, { TelemetryState } from './telemetry/reducer';

export interface RootState {
  telemetry: TelemetryState;
}

export const rootReducer = combineReducers<RootState>({
  telemetry: telemetryReducer,
});
