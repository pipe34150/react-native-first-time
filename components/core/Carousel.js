import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from './Home'

const stackNavigator = createStackNavigator({
  Home:Home
})

const App = createContainerApp(stackNavigator)

export default App