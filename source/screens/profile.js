import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import img from '/home/coditas/Desktop/Redux/source/utils/image.js';

export default function Profile() {
  return (
    <View>
      <ImageBackground source={img.bg} style={{width: '100%', height: '100%'}}>
        <Image style={styles.img} source={img.femaleImg} />
        <Text style={styles.heading}>Profile</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    alignSelf: 'center',
    marginTop: 25,
    fontSize: 35,
  },
  img: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    marginTop: 25,
  },
});
