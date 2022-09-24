import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// views
import AddProductView from './views/AddProductView';
import ListProductView from './views/ListProductView';

// data store
import store from './state/store';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='AddProduct'>
            <Stack.Screen name='AddProduct' component={AddProductView} options={{title: 'Add Product'}}/>
            <Stack.Screen name='ListProduct' component={ListProductView} options={{title: 'Want Overview'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
};

export default App;
