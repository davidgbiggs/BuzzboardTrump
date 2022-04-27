import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';
import AppHeader from '../components/AppHeader.js';
import Board from '../components/Board.js';
import Player from '../components/Player.js';
import {mock} from '../mock.js';

export default function BoardScreen({navigation}) {
  const Sound = require('react-native-sound');
  Sound.setCategory('Playback');

  const [currentSound, setCurrentSound] = useState(
    mock.soundCategories[0].sounds[0],
  );
  const [isPlaying, setIsPlaying] = useState(false);

  function play(track) {
    if (currentSound.id === track.id) {
      if (isPlaying) {
        setIsPlaying(false);
        currentSound.sound.stop();
      } else {
        setIsPlaying(true);
        currentSound.sound.play(() => {
          setIsPlaying(false);
        });
      }
    } else {
      currentSound.sound.stop();
      setCurrentSound(track);
      if (isPlaying) {
        track.sound.play(() => {
          setIsPlaying(false);
        });
      } else {
        setIsPlaying(true);
        track.sound.play(() => {
          setIsPlaying(false);
        });
      }
    }
  }

  function toSuggestSoundScreen() {
    navigation.navigate('SuggestSound');
  }

  function toRequestBoardScreen() {
    navigation.navigate('RequestBoard');
  }

  function toMarketScreen() {
    navigation.navigate('Market');
  }

  return (
    <SafeAreaView edges={['top']}>
      <StatusBar barStyle="dark-content" />
      <View style={localStyles.outerView}>
        <AppHeader toMarket={toMarketScreen} />
        <Board
          toBoard={toRequestBoardScreen}
          toSound={toSuggestSoundScreen}
          soundList={mock.soundCategories}
          currentSound={currentSound}
          play={play}
          data={mock}
          // pause={pause}
          // setTrack={setTrack}
          isPlaying={isPlaying}
        />
        <Player
          currentSound={currentSound}
          play={play}
          // pause={pause}
          // adID={mock.bannerAdId}
          // keywords={mock.adKeywords}
          // testing={false}
          isPlaying={isPlaying}
        />
      </View>
    </SafeAreaView>
  );
}

const localStyles = EStyleSheet.create({
  outerView: {
    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'center',
  },
});
