import React, { FC, useEffect, useState } from 'react';
import Sockette from 'sockette';

import './Dashboard.css';
import { isTelemetryMessage, Message } from '../../telemetry/messageTypes';

export const Dashboard: FC = () => {
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

  const handleMessage = (message: Message) => {
    if (isTelemetryMessage(message)) {
      setRpm(message.payload.RPM ?? 0);
    }
  };

  return (
    <div className="Dashboard">
      <div
        style={{
          width: `${rpm / 100}%`,
          height: 50,
          backgroundColor: 'red',
        }}
      />
    </div>
  );
};
