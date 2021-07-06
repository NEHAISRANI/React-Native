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

// let arr;
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('save_data');
  //     const jsonValue= value != null ? JSON.parse(value) : null;
  //     console.log(jsonValue)
  //     arr = jsonValue;
  //     if (arr !== null) { 
  //       arr.push(items);
  //     } else {
  //       arr = [];
  //       arr.push(items);
  //     }
  //     console.log("data",arr);
  //   } catch (e) {
  //     console.log("error",e)
  //   }
  // };