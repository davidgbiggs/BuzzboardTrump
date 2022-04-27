import React from 'react';
import {View} from 'react-native';
import Wordmark from './Wordmark.js';
import HeaderButtonContainer from './HeaderButtonContainer.js';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function AppHeader(props) {
  return (
    <View style={localStyles.appHeader}>
      <Wordmark />
      <HeaderButtonContainer toMarket={props.toMarket} />
    </View>
  );
}

const localStyles = EStyleSheet.create({
  appHeader: {
    marginTop: '$screenHeight * 0.01216749',
    width: '$screenWidth * 0.96066667',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
});
