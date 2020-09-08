import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import BasicText from '../components/BasicText';
import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function StackScreenHeader(props) {
  function handlePressBackButton() {
    props.navigation.goBack();
  }

  return (
    <View style={localStyles.containerView}>
      <TouchableOpacity onPress={handlePressBackButton} activeOpacity={0.6}>
        <MaterialIcon
          size={EStyleSheet.value('$vw * 10')}
          name="keyboard-arrow-left"
        />
      </TouchableOpacity>
      <BasicText style={localStyles.headerText}>{props.title}</BasicText>
    </View>
  );
}

const localStyles = EStyleSheet.create({
  containerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '$vh * 2',
  },
  headerText: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
});
