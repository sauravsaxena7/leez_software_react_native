import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import ColorList from '../../components/ColorList'
import ScreenWrapper from '../../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { wp } from '../../helpers/common'

const Chat = () => {
  return (
    <ScreenWrapper >
      <StatusBar style='auto'/>
      <View style={styles.container}>

        <Image source={"https://s3-alpha-sig.figma.com/img/7cf9/8b37/05f34da16e77415f1f088ac9897adf41?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j~pP5~NDlzzDCfwLvBkQrd3-QZG1m3xS9R7PH0uahoEWolMQ2pwaL7YpCrrT2u66-odSMqBEE65dKCoOswsyuTY9e7xFA3Odjf62yZKhjxUVI5kuvYa6z6PQLft2tjUc9y76bplxt3fmDKmDpdAk4~-2A4NrhbbD~c-eZJFsxs73CpcAfV-ufrkjkC~cjhlTX~Ve3IM-yhYgrJx1EhRPyAeu2g3fOOAezS6sAmD9EXvFHlOGAsGYyuyJVqwY-gwHkAqoDkQARHyHDcVhgJMQ7oCA6ciVx1zuPsfR5arBHNe-0XO4k3TjiU8n7olE2uyvrJ3od0C8VD0R~kkevXfPZA__"} style={{width:300,height:"100"}}/>

      </View>
      <Text>LOLA</Text>
    </ScreenWrapper>
  )
}

export default Chat

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifycontent:'center',
    backgroundColor:"red",
    paddingHorizontal:wp(4),
  },
  homeImage:{

  }
})