import React from 'react';
import {Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Wordmark() {
  return (
    <Image
      source={require('./buzzboard-wordmark.png')}
      style={localStyles.wordMark}
    />
  );
}

const localStyles = EStyleSheet.create({
  wordMark: {
    height: '$screenHeight * 0.05541872',
    width: '$screenWidth * 0.60533333',
  },
});
