import React from 'react';
import {View, Image, ImageBackground,StyleSheet} from 'react-native';
import img from '../../utils/images';

export default function Checkout({navigation}) {
  return (
    <View style={styles.bagImg}>
      <ImageBackground source={img.bg} style={{width: '100%', height: '100%'}}>
        <Image
          style={styles.img}
          source={require('../../assets/images/Thankyou.jpg')}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bagImg:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  img: {
    alignSelf: 'center',
    marginTop: 150,
    width: 210,
    height: 120,
  },
});
