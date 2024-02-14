import { StyleSheet, Text, View } from 'react-native'
import { Slot } from 'expo-router'
export default function _layout() {
  return (
    <View>
      <Text className="bg-red-500 text-2xl w-screen items-center">
        Layout 
      </Text>
      <View>
        <Slot/>
      </View>
    </View>
  )
}

