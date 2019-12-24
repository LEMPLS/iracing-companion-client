import React, { FC } from 'react';

import { useTelemetry } from '../../telemetry/useTelemetry';

import { Dashboard } from './Dashboard';
import { Loading } from '../Loading';

type Props = {
  onSwitchTheme: () => void;
};

export const DashboardContainer: FC<Props> = ({ onSwitchTheme }) => {
  const [telemetry, isLoading] = useTelemetry();

  if (isLoading) {
    return (
      <Dashboard>
        <Loading />
      </Dashboard>
    );
  }

  return (
    <Dashboard>
      <div onClick={onSwitchTheme}>Switch theme</div>
      <div
        style={{
          width: `${telemetry.RPM / 100}%`,
          height: 50,
          backgroundColor: 'red',
        }}
      />
    </Dashboard>
  );
};
