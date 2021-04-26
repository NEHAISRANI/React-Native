import React from 'react';
import{createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from'../screens/home';
import ArtworkDetails from '../screens/artworkDetails';
import Cart from '../screens/cart';
import Checkout from '../screens/checkOut'
import Logout from '../screens/logout'
const MyDrawer=createDrawerNavigator({
    Home:{
        screen:Home,
    },
    ArtworkDetails:{
        screen:ArtworkDetails,
    },
    Cart:{
        screen:Cart
    },
    Checkout:{
        screen:Checkout
    },
    LogOut:{
        screen:Logout 
    }
})

export default createAppContainer(MyDrawer)
