import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default function Register({navigation}) {
  const registerHandler = function () {
    navigation.navigate('Drawer');
  };

  return (
    <View>
      <View style={styles.form}>
        <Text style={styles.heading}>Registration Form</Text>
        <Text style={styles.label}>Enter Name</Text>
        <TextInput
          style={styles.inputfield}
          placeholder={'Name'}
          placeholderTextColor={'black'}
        />
        <Text style={styles.label}>Enter Email</Text>
        <TextInput
          style={styles.inputfield}
          placeholder={'Password'}
          placeholderTextColor={'black'}
        />
        <Text style={styles.label}>Enter Password</Text>
        <TextInput
          style={styles.inputfield}
          secureTextEntry={true}
          placeholder={'Password'}
          placeholderTextColor={'black'}
        />
        <Text style={styles.label}>Enter Password Again</Text>
        <TextInput
          style={styles.inputfield}
          secureTextEntry={true}
          placeholder={'Password'}
          placeholderTextColor={'black'}
        />
      </View>

      <View>
        <Button onPress={registerHandler} title={'Register'}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputfield: {
    // justifyContent:"center",
    alignSelf: 'center',
    height: 43,
    borderWidth: 1,
    borderColor: 'orange',
    width: 320,
    borderRadius: 5,
  },

  form: {
    marginBottom: 50,
    alignItems: 'center',
    width: 310,
    alignSelf: 'center',
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginVertical: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
