import React, {Component} from 'react';
// import {View, Input, Text, Button, TextInput} from 'react-native';
import Navigator from './src/navigation/homeStack';
import {Provider} from 'react-redux';
import store from './src/redux-store/store';

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
    // <Navigator/>
  );
}

export default App;

