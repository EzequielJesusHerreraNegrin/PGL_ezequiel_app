import { Link } from 'expo-router'
import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

function WelcomePage() {
  return (
    <View style={styleSheet.container}>
      <View style={styleSheet.headerBox}>
        <Text>Este el welcome</Text>
      </View>
      <View style={styleSheet.bodyBox}>
        <View>
          <Image source={require('../../assets/mySelf.png')} style={styleSheet.imageStyle}/>
        </View>
        <Link href="/porfolio">NAVEGAR</Link>
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
  },
  headerBox:{
    flex: 1,
    top: 50
  },
  bodyBox: {
    flexDirection: "column",
    flex: 5,
    gap: 150,
    alignItems: "center"
  },
  imageStyle:{
    width: 300,
    height: 300,
    borderRadius: 900
  }
})

export default WelcomePage
