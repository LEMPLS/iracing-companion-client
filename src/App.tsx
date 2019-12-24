import React, { FC, useState } from 'react';
import { ThemeProvider } from 'emotion-theming';

import { themes } from './styled/themes';

import { DashboardContainer } from './components/Dashboard/DashboardContainer';

const App: FC = () => {
  const [theme, setTheme] = useState<keyof typeof themes>('dark');

  const switchTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'white' : 'dark'));
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <DashboardContainer onSwitchTheme={switchTheme} />
    </ThemeProvider>
  );
};

export default App;
