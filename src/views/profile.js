import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import image from '../utils/images';

export default function Profile() {
  return (
    <View>
      <ImageBackground source={image.bg} style={{width: '100%', height: '100%'}}>
        <Image style={styles.image} source={image.femaleImg} />
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
  image: {
    height: 400,
    width: 400,
    alignSelf: 'center',
    marginTop: 25,
  },
});
