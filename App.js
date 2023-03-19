import React from 'react';  
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';  
import HomeScreen from './HomeScreen';  
import ProfileScreen from './profile';  

const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen,
        
    },  
    {  
        initialRouteName: "Home"  
    }  
);  

export default createAppContainer(AppNavigator);  