import { StyleSheet, Text,Button, View ,Image} from 'react-native'
import React, { useRef, useEffect } from 'react';
import { router } from 'expo-router'
import {LinearGradient} from "expo-linear-gradient"
import LottieView from 'lottie-react-native';

export default function index() {
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View>
   {/*  making use of the image tag setting the bg */}
    <Image
     source={require("../assets/images/img.jpg")}
      className="w-full -z-10 h-[100vh] absolute"></Image>

<LinearGradient
className="w-full h-full"
        // Button Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
       start={{x:0.1,y:0.01}}
       end={{x:0.2,y:0.2}}
       >
    </LinearGradient>
    <View
     style={styles.buttonContainer}>
        <Button
          title="Restart Animation"
          onPress={() => {
            animation.current?.reset();
            animation.current?.play();
          }}
        />
      </View>

      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('./assets/gradientBall.json')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});