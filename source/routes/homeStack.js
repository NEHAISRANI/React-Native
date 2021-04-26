import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Image, TouchableOpacity} from 'react-native';
import MyDrawer from '../routes/drawer';
import Login from '../screens/Login';
import Register from '../screens/Register';
const screens = {
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
              source={require('../images/menu3.png')}
            />
          </TouchableOpacity>
        ),
      };
    },
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
