import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={tw`p-10 text-red-500`}>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
})