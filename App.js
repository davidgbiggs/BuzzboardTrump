/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

console.disableYellowBox = true;
import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  NativeModules,
  TouchableOpacity,
  LayoutAnimation,
  Image,
  ImageBackground,
  Animated,
  useWindowDimensions,
  Platform,
} from 'react-native';

import {hasNotch} from 'react-native-device-info';

import Slider from 'react-native-slider';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import EStyleSheet from 'react-native-extended-stylesheet';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import admob, {
  MaxAdContentRating,
  BannerAd,
  TestIds,
  BannerAdSize,
} from '@react-native-firebase/admob';

let Sound = require('react-native-sound');
Sound.setCategory('Playback');

let fn1 = new Sound('fake_news.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});
let fn2 = new Sound('billions.mp3', Sound.MAIN_BUNDLE);
let fn3 = new Sound('china.mp3', Sound.MAIN_BUNDLE);
let fn4 = new Sound('crookedhillary.mp3', Sound.MAIN_BUNDLE);

const tracks1 = [
  {id: 0, sound: fn1, title: 'You Are Fake News'},
  {id: 1, sound: fn2, title: 'Billions and Billions'},
  {id: 2, sound: fn3, title: 'China'},
  {id: 3, sound: fn4, title: 'Crooked Hillary'},
  {id: 4, sound: null, title: ''},
];

let fn5 = new Sound('wrong.mp3', Sound.MAIN_BUNDLE);
let fn6 = new Sound('dating_her.mp3', Sound.MAIN_BUNDLE);
let fn7 = new Sound('respectswomen.mp3', Sound.MAIN_BUNDLE);
let fn8 = new Sound('thirdperson.mp3', Sound.MAIN_BUNDLE);

const tracks2 = [
  {id: 5, sound: fn5, title: 'Wrong'},
  {id: 6, sound: fn6, title: "If Ivanka Weren't My Daughter"},
  {id: 7, sound: fn7, title: 'The Most Respect'},
  {id: 8, sound: fn8, title: 'Donald Trump'},
  {id: 9, sound: null, title: ''},
];

let fn9 = new Sound('collusiondelusionisover.mp3', Sound.MAIN_BUNDLE);
let fn10 = new Sound('couldvetoldyouthat.mp3', Sound.MAIN_BUNDLE);
let fn11 = new Sound('giveyouamillion.mp3', Sound.MAIN_BUNDLE);
let fn12 = new Sound('grabembythe.mp3', Sound.MAIN_BUNDLE);

const tracks3 = [
  {id: 10, sound: fn9, title: 'Collusion Delusion'},
  {id: 11, sound: fn10, title: 'Coulda told you that'},
  {id: 12, sound: fn11, title: 'I will give you a million'},
  {id: 13, sound: fn12, title: 'Grab em by the ______'},
  {id: 14, sound: null, title: ''},
];

let fn13 = new Sound('littlemarco.mp3', Sound.MAIN_BUNDLE);
let fn14 = new Sound('lyinted.mp3', Sound.MAIN_BUNDLE);
let fn15 = new Sound('makeamericagreatagain.mp3', Sound.MAIN_BUNDLE);
let fn16 = new Sound('metoogeneration.mp3', Sound.MAIN_BUNDLE);

const tracks4 = [
  {id: 15, sound: fn13, title: 'Little Marco'},
  {id: 16, sound: fn14, title: "Lyin' Ted"},
  {id: 17, sound: fn15, title: 'Make America Great Again'},
  {id: 18, sound: fn16, title: 'Be Very Gentle'},
  {id: 19, sound: null, title: ''},
];

let fn17 = new Sound('pocahontas.mp3', Sound.MAIN_BUNDLE);
let fn18 = new Sound('sleepyjoebiden.mp3', Sound.MAIN_BUNDLE);
let fn19 = new Sound('thedeepstate.mp3', Sound.MAIN_BUNDLE);
let fn20 = new Sound('thefakenewsmedia.mp3', Sound.MAIN_BUNDLE);

const tracks5 = [
  {id: 20, sound: fn17, title: 'Pocahontas'},
  {id: 21, sound: fn18, title: 'Sleepy Joe Biden'},
  {id: 22, sound: fn19, title: 'The Deep State'},
  {id: 23, sound: fn20, title: 'The Fake News Media'},
  {id: 24, sound: null, title: ''},
];

let fn21 = new Sound('twoounces.mp3', Sound.MAIN_BUNDLE);
let fn22 = new Sound('wehavesomebreakingnews.mp3', Sound.MAIN_BUNDLE);
let fn23 = new Sound('youdbeinjail.mp3', Sound.MAIN_BUNDLE);
let fn24 = new Sound('therussiahoaxisdead.mp3', Sound.MAIN_BUNDLE);

const tracks6 = [
  {id: 25, sound: fn21, title: 'It Only Weighs... TWO ounces'},
  {id: 26, sound: fn22, title: 'We Have Some Breaking News'},
  {id: 27, sound: fn23, title: "Because You'd Be In Jail"},
  {id: 28, sound: fn24, title: 'The Russia Hoax Is Finally Dead'},
  {id: 29, sound: null, title: ''},
];

let fn25 = new Sound('thesearesickpeople.mp3', Sound.MAIN_BUNDLE);
let fn26 = new Sound('theyrebeautifultheyrebig.mp3', Sound.MAIN_BUNDLE);
let fn27 = new Sound('wallgottaller.mp3', Sound.MAIN_BUNDLE);
let fn28 = new Sound('majorlosers.mp3', Sound.MAIN_BUNDLE);

const tracks7 = [
  {id: 30, sound: fn25, title: 'These Are Sick People'},
  {id: 31, sound: fn26, title: "They're Beautiful, They're Big"},
  {id: 32, sound: fn27, title: 'The Wall Just Got 10 Feet Taller'},
  {id: 33, sound: fn28, title: 'Major Losers'},
  {id: 34, sound: null, title: ''},
];

const {UIManager} = NativeModules;
const banners =
  Platform.OS === 'ios'
    ? [
        'ca-app-pub-5686363028654312/3824033740',
        'ca-app-pub-5686363028654312/2258110134',
        'ca-app-pub-5686363028654312/6559153508',
        'ca-app-pub-5686363028654312/9138049533',
        'ca-app-pub-5686363028654312/7413355585',
        'ca-app-pub-5686363028654312/4584012269',
        'ca-app-pub-5686363028654312/8557263906',
      ]
    : [
        'ca-app-pub-5686363028654312/9414329827',
        'ca-app-pub-5686363028654312/2339631490',
        'ca-app-pub-5686363028654312/5380436227',
        'ca-app-pub-5686363028654312/2342552809',
        'ca-app-pub-5686363028654312/6964146487',
        'ca-app-pub-5686363028654312/7815027878',
        'ca-app-pub-5686363028654312/5188864530',
      ];
const testing = false;
const blankAds = false;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $screenWidth: screenWidth,
  $screenHeight: screenHeight,
  $vh: screenHeight / 100,
  $vw: screenWidth / 100,
  $secondaryColor: '#FFFCE2',
  $primaryColor: '#FFF398',
  $activeColor: '#FFED64', //'#FFEB57', //'#FFF07E',
  $backgroundColor: '#FCFCFC',
});

const styles = EStyleSheet.create({
  admobView: {
    marginTop: '$vh * 2.6',
  },
  blankAds: {
    height: '$vh * 5',
    backgroundColor: '$secondaryColor',
    width: '$vw * 70',
    marginTop: '$vh * 2.5',
    borderRadius: '$vh * 1',
  },
  playContainer: {
    backgroundColor: '$activeColor',
    borderColor: '$secondaryColor',
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  outerBackground: {
    backgroundColor: '$backgroundColor',
    height: '100%',
    width: '100%',
  },
  buzzboardBackground: {
    backgroundColor: '$primaryColor',
    width: '$screenWidth * .8773',
    height: '$screenHeight * .5924',
    borderRadius: '1rem',
    borderColor: '$secondaryColor',
    borderWidth: '0.27rem',
  },
  logoRow: {
    position: 'relative',
    marginTop: hasNotch() ? '$screenHeight * -0.02216749' : 0,
    width: '$screenWidth * 0.93866667',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  wordMark: {
    height: '$screenHeight * 0.05541872',
    width: '$screenWidth * 0.60533333',
  },
  settingsContainer: {
    height: '$screenHeight * 0.06788177',
    width: '$screenWidth * 0.18666667',
    backgroundColor: '$activeColor',
    justifyContent: 'center',
    paddingLeft: '$screenWidth * 0.024',
    borderTopLeftRadius: '0.5rem',
    borderBottomLeftRadius: '0.5rem',
    borderColor: '$secondaryColor',
    borderWidth: '0.27rem',
    borderRightWidth: 0,
  },
  settingsIcon: {
    // height: '$screenHeight * 0.03325123',
    // width: '$screenWidth * 0.072',
    // backgroundColor: 'blue',
  },
  pictureRow: {
    marginTop: '-0.04618227 * $screenHeight',
    marginLeft: '-0.01866667 * $screenWidth',
    width: '$screenWidth * 0.841',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boardPerson: {
    height: '0.09236453 * $screenHeight',
    width: '0.09236453 * $screenHeight',
    marginLeft: '-0.01866667 * $screenWidth',
    backgroundColor: 'white',
    borderRadius: '1rem',
  },
  boardLogo: {
    width: '$screenWidth * 0.15733333',
    height: '$screenHeight * 0.0726601',
    backgroundColor: 'purple',
  },
  boardList: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '$screenWidth',
    paddingBottom: '$screenHeight * 0.02',
  },
  listItem: {
    width: '$screenWidth * 0.90933333',
    height: '$screenHeight * 0.07142857',
    backgroundColor: '$activeColor',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: '$screenWidth * 0.06133333',
    borderRadius: hasNotch() ? '1.2rem' : '0.7rem',
    borderColor: '$secondaryColor',
    borderWidth: '0.1rem',
    marginTop: '$screenHeight * 0.025',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,

    elevation: 4,
  },
  listItemText: {
    fontSize: '1.1rem',
  },
  listItemTextContainer: {
    alignSelf: 'center',
  },
  listItemControlsContainer: {
    alignSelf: 'center',
    marginRight: '$screenWidth * 0.10666667',
  },
  listDots: {
    width: '$screenWidth * 0.064',
    height: '$screenHeight * 0.01231527',
    backgroundColor: 'black',
    alignSelf: 'center',
    marginVertical: '$screenHeight * 0.01',
  },
  listItemPlayIcon: {
    fontSize: '1.5rem',
  },
  bottomContainerPlayIcon: {
    fontSize: '1.5rem',
    marginLeft: '$screenWidth * 0.47',
  },
  btnRow: {flexDirection: 'row', alignSelf: 'center'},
  btnRowLeft: {
    width: '$screenWidth * 0.36666667',
    height: '$screenHeight * 0.06034483',
    backgroundColor: 'yellow',
  },
  btnRowRight: {
    width: '$screenWidth * 0.36666667',
    height: '$screenHeight * 0.06034483',
    backgroundColor: 'yellow',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: '$screenHeight * 0.49714285',
    width: '$screenWidth',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'black',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    marginHorizontal: '$screenWidth * 0.05',
  },
  playContainerTitle: {
    fontSize: '1.3rem',
    marginLeft: '$screenWidth * 0.06',
    marginBottom: '$screenHeight * -0.008',
  },
});

const pages = [tracks1, tracks2];

function FApp({isPlaying, currentSound, handlePlayTap}) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const {width: windowWidth} = useWindowDimensions();

  return (
    <View style={styles.scrollContainer}>
      <ScrollView
        horizontal={true}
        style={styles.scrollViewStyle}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ])}
        scrollEventThrottle={1}>
        {pages.map((trackList, pageIndex) => {
          return (
            <View style={styles.boardList} key={pageIndex}>
              {trackList.map((track, trackIndex) => {
                return trackIndex % 4 === 0 && trackIndex !== 0 ? (
                  blankAds ? (
                    <View style={styles.blankAds} key={track.id} />
                  ) : (
                    <View style={styles.admobView} key={track.id}>
                      <BannerAd
                        // size="320x50"
                        size={BannerAdSize.BANNER}
                        unitId={testing ? TestIds.BANNER : banners[pageIndex]}
                        // unitId="ca-app-pub-5686363028654312/3824033740"
                        onAdFailedToLoad={(error) =>
                          console.log(`Failed Loading: ${error} \n\n\n\n\n\n\n`)
                        }
                        onAdClosed={(error) =>
                          console.log(`Closed: ${error} \n\n\n\n\n\n\n`)
                        }
                        onAdOpened={(error) =>
                          console.log(`Opened: ${error} \n\n\n\n\n\n\n`)
                        }
                      />
                    </View>
                  )
                ) : (
                  <ListItem
                    key={track.id}
                    currentSound={currentSound}
                    onPlayTap={handlePlayTap}
                    isPlaying={isPlaying}
                    track={track}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {pages.map((page, pageIndex) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (pageIndex - 1),
              windowWidth * pageIndex,
              windowWidth * (pageIndex + 1),
            ],
            outputRange: [8, 16, 8],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={pageIndex}
              style={[styles.normalDot, {width}]}
            />
          );
        })}
      </View>
    </View>
  );
}

const PlayContainer = ({
  duration,
  playSeconds,
  currentSound,
  isPlaying,
  onSliderEditStart,
  onSliderEditEnd,
  onSliderEditing,
  onPlayTap,
}) => {
  const initialWidth = screenWidth * 0.9386;
  const initialHeight = hasNotch()
    ? screenHeight * 0.1232
    : screenHeight * 0.1532;
  const animationAmount = 0.99;
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  function onPressIn() {
    // Animate the update
    LayoutAnimation.spring();
    setWidth(width * animationAmount);
    setHeight(height * animationAmount);
  }
  async function onPressOut() {
    LayoutAnimation.spring();
    setWidth(width / animationAmount);
    setHeight(height / animationAmount);
  }
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPlayTap(currentSound)}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={{
        ...styles.playContainer,
        width: width,
        height: height,
      }}>
      <Text style={styles.playContainerTitle}>{currentSound.title}</Text>
      <Slider
        minimumTrackTintColor="#000000"
        style={styles.slider}
        onSlidingStart={onSliderEditStart}
        // onTouchMove={() => console.log('onTouchMove')}
        onSlidingComplete={onSliderEditEnd}
        // onTouchEndCapture={() => console.log('onTouchEndCapture')}
        // onTouchCancel={() => console.log('onTouchCancel')}
        onValueChange={onSliderEditing}
        value={playSeconds}
        maximumValue={duration}
        animationType="timing"
        thumbStyle={{borderColor: 'white', borderWidth: 1.5}}
        trackStyle={{backgroundColor: 'black'}}
        disabled={false}
      />
      <FontAwesome5Icon
        name={isPlaying ? 'pause' : 'play'}
        style={{...styles.bottomContainerPlayIcon}}
      />
    </TouchableOpacity>
  );
};

const ListItem = ({
  track,
  isPlaying,
  currentSound,
  onPlayTap,
  handleSoundChange,
}) => {
  const initialWidth = screenWidth * 0.90933333;
  const initialHeight = screenHeight * 0.07142857;
  const animationAmount = 0.995;
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  function onPressIn() {
    // Animate the update
    LayoutAnimation.spring();
    setWidth(width * animationAmount);
    setHeight(height * animationAmount);
  }
  async function onPressOut() {
    LayoutAnimation.spring();
    setWidth(width / animationAmount);
    setHeight(height / animationAmount);
  }
  async function onPress() {
    onPlayTap(track);
  }
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      style={{...styles.listItem, width: width}}>
      <View style={styles.listItemTextContainer}>
        <Text style={styles.listItemText}>{track.title}</Text>
      </View>
      <View style={styles.listItemControlsContainer}>
        <FontAwesome5Icon
          name={isPlaying && currentSound.id === track.id ? 'pause' : 'play'}
          style={styles.listItemPlayIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const App: () => React$Node = () => {
  const [currentSound, setCurrentSound] = useState(tracks1[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [playSeconds, setPlaySeconds] = useState(0);
  const [sliderEditing, setSliderEditing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        currentSound.sound &&
        currentSound.sound.isLoaded() &&
        isPlaying &&
        !sliderEditing
      ) {
        currentSound.sound.getCurrentTime((seconds, soundIsPlaying) => {
          setPlaySeconds(seconds);
          console.log(seconds);
        });
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [currentSound.sound, isPlaying, sliderEditing]);

  useEffect(() => {
    admob().setRequestConfiguration({
      // Update all future requests suitable for parental guidance
      maxAdContentRating: MaxAdContentRating.MA,

      // Indicates that you want your content treated as child-directed for purposes of COPPA.
      tagForChildDirectedTreatment: false,

      // Indicates that you want the ad request to be handled in a
      // manner suitable for users under the age of consent.
      tagForUnderAgeOfConsent: false,
    });
  }, []);

  function onSliderEditStart() {
    setSliderEditing(true);
  }
  function onSliderEditEnd(value) {
    if (currentSound.sound) {
      currentSound.sound.setCurrentTime(value);
      setPlaySeconds(value);
    }
    setSliderEditing(false);
  }
  function onSliderEditing(value) {
    // if (currentSound.sound) {
    //   currentSound.sound.setCurrentTime(value);
    //   setPlaySeconds(value);
    // }
  }

  function handlePlayTap(track) {
    if (currentSound.id === track.id) {
      if (isPlaying) {
        setIsPlaying(false);
        track.sound.pause(() => {
          track.sound.setCurrentTime(0);
        });
      } else {
        setIsPlaying(true);
        setDuration(track.sound.getDuration());
        track.sound.play(() => {
          setIsPlaying(false);
          setPlaySeconds(0);
        });
      }
    } else {
      currentSound.sound.pause(() => {
        currentSound.sound.setCurrentTime(0);
      });
      setCurrentSound(track);
      if (isPlaying) {
        setIsPlaying(true);
        setDuration(track.sound.getDuration());
        track.sound.play(() => {
          setIsPlaying(false);
          setPlaySeconds(0);
        });
      } else {
        setIsPlaying(true);
        setDuration(track.sound.getDuration());
        track.sound.play(() => {
          setIsPlaying(false);
          setPlaySeconds(0);
        });
      }
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.outerBackground}>
        <SafeAreaView>
          <View
            style={{
              justifyContent: 'space-around',
              height: '100%',
              alignItems: 'center',
            }}>
            <View style={styles.logoRow}>
              <Image
                source={require('./buzzboard-wordmark.png')}
                style={styles.wordMark}
              />
              {/* <View style={styles.settingsContainer}>
                <MaterialIcon
                  size={screenHeight * 0.03825123}
                  name="settings"
                  style={styles.settingsIcon}
                />
              </View> */}
            </View>
            <View style={styles.buzzboardBackground}>
              <View style={styles.pictureRow}>
                <Image
                  source={require('./trump.jpg')}
                  style={styles.boardPerson}
                />
                {/* <View style={styles.boardLogo} /> */}
              </View>
              {/* <View style={styles.boardList}>
                <View style={styles.listItem} />
                <View style={styles.listItem} />
                <View style={styles.listItem} />
                <View style={styles.listItem} />
                <View style={styles.listItem} />
              </View> */}
              <FApp
                currentSound={currentSound}
                handlePlayTap={handlePlayTap}
                isPlaying={isPlaying}
              />
              {/* <View style={styles.listDots} /> */}
              {/* <View style={styles.btnRow}>
                <View style={styles.btnRowLeft} />
                <View style={styles.btnRowRight} />
              </View> */}
            </View>
            <PlayContainer
              onPlayTap={handlePlayTap}
              onSliderEditStart={onSliderEditStart}
              onSliderEditEnd={onSliderEditEnd}
              onSliderEditing={onSliderEditing}
              duration={duration}
              playSeconds={playSeconds}
              currentSound={currentSound}
              isPlaying={isPlaying}
            />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default App;
