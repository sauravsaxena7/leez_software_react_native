import { View, Text, Pressable, StyleSheet } from 'react-native'
import { TabbBarIcons } from "./helper"
import React, { useEffect } from 'react'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const TabbarButton = (props) => {
    const { isFocused, label, routeName, color } = props;
    const scale = useSharedValue(0);


    useEffect(() => {
        scale.value = withSpring(typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
            { duration: 350 }
        )
    }, [scale, isFocused])

    const animatedStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(
            scale.value,
            [0, 1],
            [1, 1]
        );

        return {
            //styles
            transform: [{ scale: scaleValue }]
        }
    })

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            scale.value,
            [0, 1],
            [1, 1]
        );

        return {
            //styles
            opacity
        }
    })

    return (

        <Pressable {...props} style={styles.container}>
            {routeName === "tabs/CenterHomeTab" ? (
                <View style={{
                    position:"",
                    width: 0,
                    height: 0,
                    borderTopWidth: 48,
                    borderTopColor: "#ECF2F4",
                    borderLeftColor: "#ECF2F4",
                    borderLeftWidth: 48,
                    borderRightColor: "#ECF2F4",
                    borderRightWidth: 48,
                    borderBottomColor: "#ECF2F4",
                    borderBottomWidth: 48,
                    borderTopLeftRadius: 48,
                    borderTopRightRadius: 48,
                    borderBottomRightRadius: 48,
                    borderBottomLeftRadius: 48,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: -72,
                    //transform: [{ rotate: '-45deg' }],
                   
                }}>
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 70,
                        width: 70,
                        borderRadius: 999,
                        backgroundColor: "#236C85",
                        
                        //transform: [{ rotate: '45deg' }]
                    }}>
                        {
                            TabbBarIcons[routeName]({
                                color: color
                            })
                        }
                    </View>
                </View>)
                :
                (<Animated.View style={[animatedStyle]}>
                    {
                        TabbBarIcons[routeName]({
                            color: color
                        })
                    }
                </Animated.View>)}


            {routeName !== "tabs/CenterHomeTab" &&
                <Animated.Text style={[{
                    color: color,
                    fontSize: 11,
                }, animatedTextStyle]}>
                    {label}
                </Animated.Text>}
        </Pressable >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    }
})
export default TabbarButton