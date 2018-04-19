import { LineCrossPayload, TelemetryPayload } from './actions';
import { RootState } from '../rootReducer';
import { TelemetryState } from './reducer';

export const getTelemetryState = (state: RootState): TelemetryState =>
  state.telemetry;

export const getValues = (state: TelemetryState): TelemetryPayload =>
  state.values;

export const showLineCrossInfo = (state: TelemetryState): boolean =>
  state.lineCross.show;

export const getLineCrossValues = (state: TelemetryState): LineCrossPayload =>
  state.lineCross.values;
