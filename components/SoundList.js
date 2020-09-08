import React from 'react';
import {FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function SoundList(props) {
  const renderItem = ({item}) => {
    return (
      <ListItem
        key={item.id}
        currentSound={currentSound}
        onPlayTap={handlePlayTap}
        isPlaying={isPlaying}
        track={item}
      />
    );
  };

  return (
    <>
      <FlatList
        contentContainerStyle={localStyles.boardList}
        data={props.soundCategories[pageIndex]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

const localStyles = EStyleSheet.create({
  soundList: {
    height: '$screenHeight * 0.4564532',
    width: '$screenWidth * 0.90933333',
    backgroundColor: 'black',
    marginTop: '$screenHeight * 0.01169951',
    marginBottom: '$screenHeight * 0.02339902',
  },

  boardList: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '$screenWidth',
    paddingBottom: '$screenHeight * 0.02',
  },
});
