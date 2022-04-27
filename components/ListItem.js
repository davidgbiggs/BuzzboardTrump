import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import BasicText from './BasicText';
import EStyleSheet from 'react-native-extended-stylesheet';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

function ListItem(props) {
  const track = {
    id: props.id,
    sound: props.sound,
    title: props.title,
  };

  async function play() {
    props.play(track);
  }

  async function pause() {
    // await TrackPlayer.pause();
    // await TrackPlayer.seekTo(0);
  }

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={false ? pause : play}
      style={{...localStyles.listItem}}>
      <View style={localStyles.listItemTextContainer}>
        <BasicText numberOfLines={1} style={localStyles.listItemText}>
          {props.title}
        </BasicText>
      </View>
      <View style={localStyles.listItemControlsContainer}>
        <TouchableOpacity
          onPress={
            props.isPlaying && props.currentSound.id === props.id ? pause : play
          }
          activeOpacity={0.6}>
          <FontAwesome5Icon
            name={
              props.isPlaying && props.currentSound.id === props.id
                ? 'pause'
                : 'play'
            }
            style={localStyles.listItemPlayIcon}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(ListItem);

const localStyles = EStyleSheet.create({
  $height: '$screenHeight * 0.05788177',
  listItem: {
    width: '$screenWidth * 0.90933333', //same as BoardHeader
    height: '$screenHeight * 0.05788177',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: '$screenWidth * 0.06133333',
    borderRadius: '$height * 0.3',
    backgroundColor: '$secondaryColor',
    borderColor: 'white',
    borderWidth: '0.15rem',
    marginTop: '$screenHeight * 0.019',
  },
  listItemText: {
    fontSize: '1rem',
    fontWeight: 'bold',
    maxWidth: '$vw * 68',
  },
  listItemTextContainer: {
    alignSelf: 'center',
  },
  listItemControlsContainer: {
    alignSelf: 'center',
    marginRight: '$screenWidth * 0.10666667',
  },
});
