import React from 'react';
import{createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Home from'../views/components/home';
import ArtworkDetails from '../views/components/artworkDetails';
import Cart from '../views/components/cart';
import Checkout from '../views/components/checkOut'
import Logout from '../views/components/logout'
import Profile from '../views/components/profile';
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
