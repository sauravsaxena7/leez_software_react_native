import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React from 'react'
import ColorList from '../components/ColorList'
import { StatusBar } from 'expo-status-bar';
import { wp } from '../helpers/common';
import Slider from '../components/slider/Slider';
import { Theme } from '../constants/Theme';
import { FilterIcon, SearchIcon } from '../components/svgComponent/HomeIcons';
import ScreenWrapper from '../components/ScreenWrapper';

const Home = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(Theme.color.TabBarText, Theme.sizes.xSmall)}>Find The Most</Text>
        <Text style={styles.welcomeTxt(Theme.color.SimpleText, 0)}>Luxirous</Text>
      </View>


      <View style={styles.searchContainer}>
        <Pressable >
          <SearchIcon styleProps={{ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }} styles={styles.searchIcon} />
        </Pressable>
        <View style={styles.searchWrapper}>
          <TextInput
           style={styles.searchInput}
            value=''
            onPressIn={()=>{}}
            placeholder='Search House, Apartment, etc'
            placeholderTextColor={Theme.color.fadeTextColor}
          />
        </View>
        <Pressable >
          <FilterIcon styleProps={{ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }} styles={styles.filterBtn} />
        </Pressable>
      </View>

     

    </ScreenWrapper>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor:"white"
  },
  welcomeTxt: (color, top) => ({
   // fontFamily: "bold",
    fontSize: 22 - 6,
    marginTop: top,
    color: color,
    marginHorizontal: 12
  }),
  searchContainer:{
    flexDirection:'row',
    justifyContent:"center",
    alignContent:"center",
    backgroundColor:Theme.color.gray,
    borderRadius:Theme.radius.md,
    marginVertical:Theme.sizes.medium,
    margin:15,
    
  },
  searchIcon:{
    marginHorizontal:10,
    marginTop:Theme.sizes.medium 
  },
  filterBtn:{
    marginHorizontal:10,
    marginTop:Theme.sizes.small 
  },
  searchWrapper:{
     flex:1,
     backgroundColor:Theme.color.gray,
     marginRight:Theme.sizes.small,
     borderRadius:Theme.sizes.small,
     height:50,
     
  },
  searchInput:{
    fontFamily:'regular',
    width:"100%",
    height:"100%",
    paddingHorizontal:Theme.sizes.small
  },
 
})