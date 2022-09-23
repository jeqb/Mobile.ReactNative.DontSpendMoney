import React, { useState } from 'react';
import AddProductView from './views/AddProductView';
import ListProductView from './views/ListProductView';
import { Provider } from 'react-redux';
import store from './state/store';

const App = () => {

  return (
    <Provider store={store}>
      <ListProductView/>
    </Provider>
  );
}

export default App;
