import React, { useState } from 'react';
import AddItemView from './views/AddItemView';
import store from './store/store';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={store}>
      <AddItemView/>
    </Provider>
  );
}

export default App;
