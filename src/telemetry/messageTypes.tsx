import { TelemetryValues } from './actions';

export enum MessageTypes {
  MESSAGE_TYPE_TELEMETRY = 1,
  MESSAGE_TYPE_CROSS_LINE = 2,
}

export type TelemetryMessage = {
  type: MessageTypes.MESSAGE_TYPE_TELEMETRY;
  values: TelemetryValues;
};
export type LineCrossMessage = {
  type: MessageTypes.MESSAGE_TYPE_CROSS_LINE;
};

export type Message = TelemetryMessage | LineCrossMessage;

export function isTelemetryMessage(arg: any): arg is TelemetryMessage {
  return arg.type === MessageTypes.MESSAGE_TYPE_TELEMETRY;
}

export function isLineCrossMessage(arg: any): arg is LineCrossMessage {
  return arg.type === MessageTypes.MESSAGE_TYPE_CROSS_LINE;
}