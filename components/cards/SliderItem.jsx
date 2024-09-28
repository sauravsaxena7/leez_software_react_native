import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SliderItem = ({item,index}) => {
  return (
    <View style={[styles.itemContainer]}>
      
      <Image source={item.image} style={{width:300,height:500}}/>
      <Text>{item.title}</Text>
    </View>
  )
}

export default SliderItem

const styles = StyleSheet.create({
  itemContainer:{
    justifyContent:"center",
    alignItems:"center",
    gap:20,
    width:Dimensions.get('screen')
    

}
})