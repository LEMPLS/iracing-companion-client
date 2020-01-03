export enum Types {
  MESSAGE_TYPE_TELEMETRY = 1,
}

export type TelemetryMessage = {
  type: Types.MESSAGE_TYPE_TELEMETRY;
  payload: TelemetryPayload;
};

export type TelemetryPayload = {
  SessionLapsRemain: number;
  LapsToPit: number;
  WaterTemp: number;
  OilTemp: number;
  LapCompletedSincePit: number;
  RaceLapsRemaining: number;
  RPM: number;
  GapToAhead: number;
};

export type Message = TelemetryMessage;
