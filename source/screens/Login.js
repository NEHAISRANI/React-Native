import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {Formik, FormInput, Form} from 'formik';
import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export default function Login({navigation}) {
  const registerHandler = function () {
    navigation.navigate('Register');
  };

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{email: '', password: ''}}
      onSubmit={(values, {resetForm}) => {
        console.log('value is here ', values);
        if (values) {
          resetForm({email: '', password: ''});
          navigation.navigate('Home');
        }
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <View>
          <View style={styles.form}>
            <Text style={styles.heading}>Login Form</Text>

            <Text style={styles.label}>Enter Email</Text>

            <TextInput
              style={styles.inputfield}
              name="email"
              placeholder="Email Address"
              placeholderTextColor={'black'}
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
            )}
            <Text style={styles.label}>Enter Password</Text>

            <TextInput
              style={styles.inputfield}
              name="password"
              placeholderTextColor={'black'}
              autoCapitalize="none"
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && (
              <Text style={{fontSize: 10, color: 'red'}}>
                {errors.password}
              </Text>
            )}
            <Button onPress={handleSubmit} title="LOGIN" />
            <Text style={styles.or}>OR</Text>

            <Button onPress={registerHandler} title={'Register'}></Button>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  inputfield: {
    // justifyContent:"center",
    alignSelf: 'center',
    height: 43,
    borderWidth: 1,
    borderColor: 'skyblue',
    width: 320,
    borderRadius: 5,
    marginBottom:10,

  },
  form: {
    marginBottom: 50,
    alignItems: 'center',
    width: 310,
    alignSelf: 'center',
    marginTop: 10,
  },
  or: {
    fontSize: 20,
    alignSelf: 'center',
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



