import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';

export default function Logout({navigation}) {
  const logOut = async () => {
    try {
      // await AsyncStorage.removeItem('token') //want to remove one item
      await AsyncStorage.clear();
      console.log("done") //whole data will be clear
    } catch (err) {
      console.log(err);
    }
    navigation.navigate('Login');
  };

  return (
      <View>
        <Text style={styles.heading}>logout</Text>
        <Button title="logout" onPress={logOut} />
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
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
  },
});
