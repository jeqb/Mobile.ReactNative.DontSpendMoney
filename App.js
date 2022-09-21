import React, { useState } from 'react';
import AddItemView from './views/AddItemView';
import { Provider } from 'react-redux';
import store from './state/store';

const App = () => {

  return (
    <Provider store={store}>
      <AddItemView/>
    </Provider>
  );
}

export default App;
