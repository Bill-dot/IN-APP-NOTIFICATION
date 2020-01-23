import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Demo from './src/components/Demo'


const AppNavigator= createStackNavigator({
    Notify: Demo

})

export default createAppContainer(AppNavigator)