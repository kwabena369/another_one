import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function index() {
  return (
    <View>
   {/*  making use of the image tag setting the bg */}
    <Image
     source={require("../assets/images/img.jpg")}
      className="w-full h-[100vh] absolute"></Image>




    </View>
  )
}

const styles = StyleSheet.create({})