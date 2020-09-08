import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import StackScreenHeader from '../components/StackScreenHeader';
import BasicText from '../components/BasicText';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function MarketScreen({navigation}) {
  return (
    <SafeAreaView style={localStyles.safeArea}>
      <StackScreenHeader navigation={navigation} title="Extras" />
      <View style={localStyles.constructionView}>
        <BasicText style={localStyles.constructionText}>Coming Soon!</BasicText>
      </View>
    </SafeAreaView>
  );
}

const localStyles = EStyleSheet.create({
  safeArea: {},
  constructionView: {
    height: '60%',
    justifyContent: 'center',
  },
  constructionText: {
    alignSelf: 'center',
  },
});
