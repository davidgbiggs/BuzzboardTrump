import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import BasicText from './BasicText';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function CategoryChip(props) {
  function onPress() {
    props.carouselRef.current.scrollToIndex({
      animated: false,
      index: props.index,
      viewOffset: 0,
      viewPosition: 0,
    });
  }

  const selected = props.index === props.activeIndex;

  return (
    <>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <View
          style={
            selected
              ? {
                  ...localStyles.chipContainer,
                  backgroundColor: EStyleSheet.value('$oppositeColor'),
                  // borderColor: EStyleSheet.value('$modeColor'),
                }
              : {...localStyles.chipContainer}
          }>
          <BasicText
            style={
              selected
                ? {
                    ...localStyles.categoryText,
                    color: EStyleSheet.value('$modeColor'),
                  }
                : {...localStyles.categoryText}
            }>
            {props.title}
          </BasicText>
        </View>
      </TouchableOpacity>
    </>
  );
}

const localStyles = EStyleSheet.create({
  chipContainer: {
    $height: '$screenHeight * 0.0270936',
    height: '$height',
    // width: '$screenWidth * 0.14',
    paddingHorizontal: '$screenWidth * 0.01',
    borderRadius: '$height * 0.2',
    borderWidth: '$height * 0.05',
    marginHorizontal: '$screenWidth * 0.01',
    backgroundColor: '$modeColor',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '$oppositeColor',
  },
});
