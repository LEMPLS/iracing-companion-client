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
      <div style={{
        fontSize: '100px',
      }}>{telemetry.GapToAhead ? telemetry.GapToAhead.toFixed(2) : '-'}</div>
    </Dashboard>
  );
};
