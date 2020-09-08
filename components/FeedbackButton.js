import React from 'react';
import {TouchableHighlight, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import BasicText from './BasicText';

export default function FeedbackButton(props) {
  const side = props.side === 'left' ? localStyles.left : localStyles.right;

  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={{...localStyles.button, ...side}}
      underlayColor={EStyleSheet.value('$activeColor')}>
      <View>
        <BasicText style={localStyles.buttonText}>{props.children}</BasicText>
      </View>
    </TouchableHighlight>
  );
}

const localStyles = EStyleSheet.create({
  $buttonHeight: '$screenHeight * 0.06034483',
  $buttonWidth: '$screenWidth * 0.37066667',
  $borderWidth: '$buttonHeight * 0.03',
  button: {
    height: '$buttonHeight',
    width: '$buttonWidth',
    borderColor: '$secondaryColor',
    borderWidth: '$borderWidth',
    backgroundColor: '$primaryColor',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    borderLeftWidth: '$borderWidth / 2',
    borderTopRightRadius: '$buttonHeight * 0.2',
    borderBottomRightRadius: '$buttonHeight * 0.2',
  },
  left: {
    borderRightWidth: '$borderWidth / 2',
    borderTopLeftRadius: '$buttonHeight * 0.2',
    borderBottomLeftRadius: '$buttonHeight * 0.2',
  },
  buttonText: {
    fontSize: '0.95rem',
  },
});
