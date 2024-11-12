import { Slot, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export const AppLayout = () => {
  return (
    <Slot />
  )
}

const style = StyleSheet.create({
  stackHeader:{
    alignItems: "center"
  }
})

export default AppLayout