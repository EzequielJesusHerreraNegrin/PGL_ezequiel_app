import { Link, Redirect } from 'expo-router'
import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

function Welcome() {
  return (
    <View>
      <Text>Este el welcome</Text>
      <Link href="/samplePage">AQUI</Link>
    </View>
  )
}

const styleSheet = StyleSheet. create({
  linkText: {
    color: "black"
  }
})

export default Welcome