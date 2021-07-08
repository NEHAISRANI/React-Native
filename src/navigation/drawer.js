import React from 'react';
import{createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Home from'../views/home';
import ArtworkDetails from '../views/artworkDetails';
import Cart from '../views/cart';
import Checkout from '../views/checkOut'
import Logout from '../views/logout'
import Profile from '../views/profile';
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
        screen:Cart,
    },
    Checkout:{
        screen:Checkout,
    },
    LogOut:{
        screen:Logout ,
    }
})

export default createAppContainer(MyDrawer)
