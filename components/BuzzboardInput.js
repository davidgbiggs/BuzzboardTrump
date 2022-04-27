import React from 'react';
import {TextInput, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function BuzzboardInput() {
  return (
    <>
      <View>
        <Text style={localStyles.inputTitle}>Name of Creator</Text>
        <TextInput style={localStyles.input}>hi</TextInput>
      </View>
    </>
  );
}

const localStyles = EStyleSheet.create({
  input: {backgroundColor: '$modeColor', height: '$vh * 3', width: '$vw * 50'},
  inputTitle: {fontWeight: 'bold'},
});
