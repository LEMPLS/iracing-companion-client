import { useEffect, useState } from 'react';
import Sockette from 'sockette';

import { Message, TelemetryPayload, Types } from './types';

export const useTelemetry = (): [TelemetryPayload, boolean] => {
  const [isLoading, setIsLoading] = useState(true);
  const [telemetryData, setTelemetryData] = useState<TelemetryPayload>({
    SessionLapsRemain: 0,
    LapsToPit: 0,
    WaterTemp: 0,
    OilTemp: 0,
    LapCompletedSincePit: 0,
    RaceLapsRemaining: 0,
    RPM: 0,
  });

  useEffect(() => {
    const { SERVER_ADDRESS = 'localhost', SERVER_PORT = 3001 } = process.env;

    new Sockette(`ws://${SERVER_ADDRESS}:${SERVER_PORT}`, {
      onopen: () => {
        console.log('Connected');
        setIsLoading(false);
      },
      onmessage: (e: MessageEvent) => handleMessage(JSON.parse(e.data)),
      onreconnect: () => {
        console.log('Reconnecting...');
        setIsLoading(true);
      },
      onmaximum: () => console.warn('Stop attempting'),
      onclose: () => {
        console.log('Connection closed');
        setIsLoading(true);
      },
      onerror: (e: Event) => {
        console.error('Error:', e);
        setIsLoading(true);
      },
    });
  }, []);

  const handleMessage = ({ type, payload }: Message) => {
    switch (type) {
      case Types.MESSAGE_TYPE_TELEMETRY:
        setTelemetryData(payload);
        break;
      default:
        console.error(`Unknown message type received:`, type);
    }
  };

  return [telemetryData, isLoading];
};
