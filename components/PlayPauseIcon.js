import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function PlayPauseIcon() {
  return (
    <FontAwesome5Icon name={'play'} style={localStyles.listItemPlayIcon} />
  );
}

const localStyles = EStyleSheet.create({});
