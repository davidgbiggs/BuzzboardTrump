import React from 'react';
import {ScrollView, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import FormSendButton from './FormSendButton';

export default function FormView(props) {
  return (
    <View style={localStyles.outsideView}>
      <ScrollView contentContainerStyle={localStyles.scrollView}>
        {props.children}
      </ScrollView>
      <FormSendButton onPress={props.onButtonPress} />
    </View>
  );
}

const localStyles = EStyleSheet.create({
  outsideView: {
    backgroundColor: '$activeColor',
    marginHorizontal: '$vw * 8',
    borderRadius: '$vw * 2',
  },
  scrollView: {justifyContent: 'center'},
});
