import React from 'react';
import{createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Home from'../views/screens/home';
import ArtworkDetails from '../views/screens/artworkDetails';
import Cart from '../views/screens/artworkDetails';
import Checkout from '../views/screens/checkOut'
import Logout from '../views/screens/logout'
import Profile from '../views/screens/profile';
const MyDrawer=createDrawerNavigator({
    Home:{
        screen:Home,
    },
    Profile:{
        screen:Profile,
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
