import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import FeedbackButton from './FeedbackButton';

export default function FeedbackRow(props) {
  return (
    <View style={localStyles.feedbackRow}>
      <FeedbackButton onPress={props.toSound} side="left">
        Suggest Sound
      </FeedbackButton>
      <FeedbackButton onPress={props.toBoard} side="right">
        Request Board
      </FeedbackButton>
    </View>
  );
}

const localStyles = EStyleSheet.create({
  feedbackRow: {
    flexDirection: 'row',
  },
});
