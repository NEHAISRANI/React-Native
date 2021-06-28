import React, {Component} from 'react';
// import {View, Input, Text, Button, TextInput} from 'react-native';
import Navigator from './source/routes/homeStack'
import { Provider} from "react-redux";
import store from '/home/coditas/Desktop/Redux/source/utils/redux/store.js'


function App() { 
 
    return( 
      <Provider store={store}>
        <Navigator/>
      </Provider>
    )
   }
   
   export default App