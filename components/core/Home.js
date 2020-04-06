import React from 'react'
import { View, Text } from 'react-native'
import Carousel from './Carousel'
import { testData } from '../../data/Data'

const Home = ({ navigation }) => {
  return (
    <View>
      <Text><Carousel data = {testData} /></Text>
    </View>
  )
}

export default Home