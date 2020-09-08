import React from 'react';
import {Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function BasicText(props) {
  return (
    <Text {...props} style={{...localStyles.text, ...props.style}}>
      {props.children}
    </Text>
  );
}

const localStyles = EStyleSheet.create({
  text: {fontFamily: 'Montserrat-Medium'},
});
