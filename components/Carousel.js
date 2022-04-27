import React, {useState, useRef} from 'react';
import {View, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AdContainer from './AdContainer';
import CategoryRow from './CategoryRow';
import ListItem from './ListItem';

export default function Carousel(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const _carousel = useRef(null);

  const renderItem = ({item}) => {
    return (
      <>
        <ListItem
          track={item}
          title={item.title}
          id={item.id}
          sound={item.sound}
          play={props.play}
          pause={props.pause}
          setTrack={props.setTrack}
          currentSound={props.currentSound}
          isPlaying={props.isPlaying}
        />
      </>
    );
  };

  function handleScroll(event) {
    setScrollPosition(event.nativeEvent.contentOffset.x);
  }

  return (
    <>
      <View style={localStyles.scrollContainer}>
        <FlatList
          horizontal={true}
          contentContainerStyle={localStyles.scrollViewStyle}
          pagingEnabled
          ref={_carousel}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={1}
          keyExtractor={(keyItem) => keyItem.id}
          data={props.soundList}
          renderItem={({item}) => {
            return (
              <>
                <View style={localStyles.carouselInner}>
                  <FlatList
                    style={localStyles.soundList}
                    contentContainerStyle={localStyles.boardList}
                    data={item.sounds}
                    renderItem={renderItem}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(keyItem) => keyItem.id.toString()}
                  />
                </View>
              </>
            );
          }}
        />
      </View>
      <AdContainer
        testing={false}
        adID={props.adID}
        style={localStyles.bannerAd}
        adKeywords={props.adKeywords}
      />
      <CategoryRow
        carouselRef={_carousel}
        soundList={props.soundList}
        scrollPosition={scrollPosition}
      />
    </>
  );
}

const localStyles = EStyleSheet.create({
  scrollContainer: {
    height: '$screenHeight * 0.46514285',
    width: '$screenWidth',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '$vh * 1',
  },
  carouselInner: {
    flexWrap: 'nowrap',
  },
  boardList: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '$screenWidth',
    paddingBottom: '$screenHeight * 0.02',
  },
});
