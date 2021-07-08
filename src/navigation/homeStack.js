import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Image, TouchableOpacity} from 'react-native';
import MyDrawer from './drawer';
import Login from '../views/Login';
import Register from '../views/Register';
import {useSelector} from 'react-redux';

function Homestack() {
  const islogIn = useSelector(state => state.islogIn);
  console.log(islogIn);
  if (islogIn === 'true') {
    screens = { 
      Drawer: {
        screen: MyDrawer,
        navigationOptions: ({navigation}) => {
          return {
            headerStyle: {backgroundColor: 'orange', height: 30},
            headerLeft: ( 
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={{height: 30, width: 30, marginLeft: 5}}
                  source={require('../assets/images/menu3.png')}
                />
              </TouchableOpacity>
            ),
          };
        },
      },
    };
  } else {
    screens = {
      Login: {
        screen: Login,
      },
      Register: {
        screen: Register,
      },
      Drawer: {
        screen: MyDrawer,
        navigationOptions: ({navigation}) => {
          return {
            headerStyle: {backgroundColor: 'orange', height: 30},
            headerLeft: (
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={{height: 30, width: 30, marginLeft: 5}}
                  source={require('../assets/images/menu3.png')}
                />
              </TouchableOpacity>
            ),
          };
        },
      },
    };
  }

  const homestack = createStackNavigator(screens);
  const Appcontainer = createAppContainer(homestack);
  return <Appcontainer />;
}
export default Homestack;
