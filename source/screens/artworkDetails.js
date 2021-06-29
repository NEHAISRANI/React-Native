import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import img from '../images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import toast from '../utils/toast';
import storeData from '../utils/store'

export default function ArtworkDetails({navigation}) {
  const items = {
    id: navigation.getParam('id'),
    src: navigation.getParam('imageUrl'),
    genre: navigation.getParam('genre'),
    title: navigation.getParam('title'),
    price: navigation.getParam('price'),
    quantity: 1,
  };

 
  let arr;
  const getData = async () => {
    try {
      await AsyncStorage.getItem('save_data')
        .then(jsonValue => {
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        })
        .then(res => {
          arr = res;
          if (arr != null) {
            arr.push(items);
          } else {
            arr = [];
            arr.push(items);
          }
        });
    } catch (e) {}
  };
  return navigation.getParam('id') ? (
    <ImageBackground source={img.bg} style={{width: '100%', height: '100%'}}>
      <View style={styles.Container}>
        <Image style={styles.imageContainer} source={{uri: items.src}} />

        <Text style={styles.Details}>{`title => ${items.title}`}</Text>
        <Text style={styles.Details}>{`genre => ${items.genre}`}</Text>
        <Text style={styles.Details}>{`price => ${items.price}`}</Text>
        <TouchableOpacity
          onPress={async () => {
            await getData(); 
            await storeData(arr);
            toast(`${items.title} added to the cart`)
            navigation.navigate('Cart', items);
          }}>
          <Text style={styles.button}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  ) : (
    <View style={styles.ErrContainer}>
      <Text style={styles.Heading}>No Artwork Selected!</Text>
      <Text style={{fontSize: 15}}>Goto the Home screen and select any artwork image</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
  },
  imageContainer: {
    height: 310,
    width: 320,
    alignSelf: 'center',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ErrContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    fontSize: 35,
    color: 'black',
  },
  button: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: 'red',
    color: 'black',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 2,
    marginTop: 20,
    alignSelf: 'center',

  },
  Details: {
    fontSize: 24,
    color: 'black',
    alignSelf: 'center',

  },
});
