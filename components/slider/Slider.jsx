import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SliderItem from '../cards/SliderItem'

const Slider = () => {
    return (
        <View>
            <FlatList data={ImageSlider}
                renderItem={({ item, index }) =>
                (<SliderItem item={item} index={index} />

                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
   
})

const ImageSlider = [
    {
        title: "Lola",
        image: require("@/assets/images/HomeRent.png")
    },
    {
        title: "Lola",
        image: require("@/assets/images/BedScreen.png")
    },
    {
        title: "Lola",
        image: require("@/assets/images/WhiteBedScreen.png")
    },
]