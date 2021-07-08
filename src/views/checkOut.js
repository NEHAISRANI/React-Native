import React from 'react';
import {View, Image, ImageBackground,StyleSheet} from 'react-native';
import image from '../utils/images';

export default function Checkout({navigation}) {
  return (
    <View style={styles.imageBg}>
      <ImageBackground source={image.bg} style={{width: '100%', height: '100%'}}>
        <Image
          style={styles.image}
          source={image.thankYou}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBg:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    alignSelf: 'center',
    marginTop: 150,
    width: 210,
    height: 120,
  },
});
