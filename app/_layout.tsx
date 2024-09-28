import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../components/TabBar'


const _layout = () => {
  return (
    <Tabs  tabBar={props=> <TabBar {...props} />} >
         <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                headerShown: false
            }}
        />
        <Tabs.Screen
            name="tabs/Chat"
            options={{
                title: "Chat"
            }}
        />
        <Tabs.Screen
            name="tabs/CenterHomeTab"
            options={{
                title: "CenterHomeTab"
            }}
        />
        <Tabs.Screen
            name="tabs/Favourite"
            options={{
                title: "Favorite"
            }}
        />
        <Tabs.Screen
            name="tabs/Profile"
            options={{
                title: "Profile"
            }}
        />
    </Tabs>
  )
}

export default _layout