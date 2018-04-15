import * as React from 'react';
import { Provider } from 'react-redux';
import { Dashboard } from './components/Dashboard/Dashboard';
import store from './configureStore';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

export default App;
