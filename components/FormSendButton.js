import React from 'react';
import {TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import BasicText from './BasicText';

export default function FormSendButton(props) {
  return (
    <TouchableOpacity
      style={localStyles.touchable}
      activeOpacity={0.6}
      onPress={props.onPress}>
      <BasicText style={localStyles.buttonText}>Send</BasicText>
    </TouchableOpacity>
  );
}

const localStyles = EStyleSheet.create({
  touchable: {
    backgroundColor: '$oppositeColor',
    width: '$vw * 18',
    height: '$vh * 3',
    borderRadius: '$vw * 1',
    alignSelf: 'flex-end',
    marginHorizontal: '$vw * 3', //purposely the same as vertical
    marginVertical: '$vw * 3', //purposely the same as horizontal & BuzzboardInput
    justifyContent: 'center',
  },
  buttonText: {color: '$modeColor', fontWeight: 'bold', alignSelf: 'center'},
});
