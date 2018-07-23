import React from 'react';
import {createStackNavigator} from 'react-navigation';

// Import Screens
import {Home} from '../screens';

export default createStackNavigator(
    {
        Home: {
            screen: Home
        }
    },
    {
        initialRouteName: 'Home'
    }
);