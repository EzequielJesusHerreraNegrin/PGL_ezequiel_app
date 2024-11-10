import { Link } from 'expo-router'
import React from 'react'
import { Text, View, StyleSheet, Pressable, Image } from 'react-native'

function Welcome() {
  return (
    <View style={styleSheet.container}>
      <View style={styleSheet.headerBox}>
        <Text>Este el welcome</Text>
      </View>
      <View style={styleSheet.bodyBox}>
        <View>
          <Image src='assets\MySelf.jpeg'/>
        </View>
        <Link href="/samplePage">AQUI</Link>
      </View>
    </View>
  )
}

const styleSheet = StyleSheet. create({
  container:{
    display : "flex",
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
    width: "100%",
    backgroundColor: "red",
  },
  headerBox:{
    backgroundColor: "blue",
    flex: 2
  },
  bodyBox: {
    backgroundColor: "green",
    flex: 5
  },
  imageStyle:{
    
  }
})

export default Welcome