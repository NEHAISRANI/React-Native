import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

export default function ArtworkDetails({navigation}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={navigation.getParam('src')} />
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('description')}</Text>
      <Text>{navigation.getParam('genre')}</Text> 
      <Text>{navigation.getParam('Price')}</Text> 
      <Button
        onPress={() => {  
          navigation.navigate('Cart'); 
        }} 
        title={'Add Cart'} 
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 310,
    width: 310,
    alignSelf: 'center',
  },
  card: {
    alignItems: 'center',
  },
});

