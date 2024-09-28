import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme } from '../constants/Theme'
import { hp } from '../helpers/common'
import Loading from './Loading'

const Button = ({
    buttonStyle,
    textStyle,
    title='',
    onPress=()=>{},
    loading=false,
    hasShadow=true,
}) => {

    const shadowStyle = {
        shadowColor:Theme.color.darkLight,
        shadowOffset:{width:0,height:10},
        shadoeOpacity:0.2,
        shadowRadius:8,
        elevation:4
    }

    if(loading){
        return(
            <View style={[styles.button,buttonStyle,{backgroundColor:'white'}]}> 
            <Loading/>
            </View>
        )
    }
  return (
    <Pressable onPress={onPress} style={[styles.button,buttonStyle,hasShadow && shadowStyle]}>
      <Text style={[styles.text,textStyle]} >{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        backgroundColor:Theme.color.primary,
        height:hp(6.6),
        justifyContent:"center",
        alignItems:"center",
        borderCurve:"continuous",
        borderRadius:Theme.radius.xl
    },

    text:{
        fontSize:hp(2.5),
        color:'white',
        fontWeight:Theme.fonts.bold
    }
})