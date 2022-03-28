import React from 'react';

import {Provider} from 'react-redux';
import store from './redux/store';
import Navigator from './navigation/navigator';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
