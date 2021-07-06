import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';
import {logOut} from '../../services/AsyncStorageService'

export default function Logout({navigation}) {
  const logout = async () => {
    logOut
    navigation.navigate('Login');
  };

  return (
      <View>
        <Text style={styles.heading}>logout</Text>
        <Button title="logout" onPress={logout} />
      </View>
  );
}


const styles = StyleSheet.create({ 
  heading: {
    alignSelf: 'center',
    marginTop: 25,
    fontSize: 35,
  }
});
