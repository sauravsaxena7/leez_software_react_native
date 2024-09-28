import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme } from '../constants/Theme'

const Loading = (size="large",color=Theme.color.primary) => {
  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator size={size} color={color}/>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})