import React from 'react';
import {ToastAndroid} from 'react-native';

export default function showToastWithGravityAndOffset (value) {
  ToastAndroid.showWithGravity(
    value,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50,
  );
};
