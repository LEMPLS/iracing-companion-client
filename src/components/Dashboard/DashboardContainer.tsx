import React, { FC, useEffect, useState } from 'react';
import Sockette from 'sockette';

import { Message, MessageTypes } from '../../telemetry/messageTypes';

import { Dashboard } from './Dashboard';

export const DashboardContainer: FC = () => {
  const [rpm, setRpm] = useState(0);

  useEffect(() => {
    new Sockette('ws://46.13.50.98:3001', {
      onopen: () => console.log('Connected'),
      onmessage: (e: any) => handleMessage(JSON.parse(e.data)),
      onreconnect: () => console.log('Reconnecting...'),
      onmaximum: () => console.warn('Stop attempting'),
      onclose: () => console.log('Connection closed'),
      onerror: (e: any) => console.error('Error:', e),
    });
  }, []);

  const handleMessage = ({ type, payload }: Message) => {
    switch (type) {
      case MessageTypes.MESSAGE_TYPE_TELEMETRY:
        setRpm(payload.RPM ?? 0);
        break;
      default:
    }
  };

  return (
    <Dashboard>
      <div
        style={{
          width: `${rpm / 100}%`,
          height: 50,
          backgroundColor: 'red',
        }}
      />
    </Dashboard>
  );
};
