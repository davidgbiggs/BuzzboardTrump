import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import admob, {MaxAdContentRating} from '@react-native-firebase/admob';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SuggestSoundScreen from '../screens/SuggestSoundScreen';
import RequestBoardScreen from '../screens/RequestBoardScreen';
import MarketScreen from '../screens/MarketScreen';
import BoardScreen from '../screens/BoardScreen';

const Stack = createStackNavigator();
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function BuzzboardTemplate(props) {
  const DataContext = React.createContext(props.endpoint);

  // configure admob
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

  return (
    <>
      <NavigationContainer>
        <SafeAreaProvider>
          <DataContext.Provider value={props.endpoint}>
            <Stack.Navigator headerMode="none" initialRouteName="Board">
              <Stack.Screen name="Board" component={BoardScreen} />
              <Stack.Screen
                name="SuggestSound"
                component={SuggestSoundScreen}
                options={{
                  gestureResponseDistance: {
                    horizontal: EStyleSheet.value('$vw * 100'),
                  },
                }}
              />
              <Stack.Screen
                name="RequestBoard"
                component={RequestBoardScreen}
                options={{
                  gestureResponseDistance: {
                    horizontal: EStyleSheet.value('$vw * 100'),
                  },
                }}
              />
              <Stack.Screen
                name="Market"
                component={MarketScreen}
                options={{
                  gestureResponseDistance: {
                    horizontal: EStyleSheet.value('$vw * 100'),
                  },
                }}
              />
            </Stack.Navigator>
          </DataContext.Provider>
        </SafeAreaProvider>
      </NavigationContainer>
    </>
  );
}

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $screenWidth: screenWidth,
  $screenHeight: screenHeight,
  $vh: screenHeight / 100,
  $vw: screenWidth / 100,
  $secondaryColor: '#FFFCE2',
  $primaryColor: '#FFF398',
  $activeColor: '#FFED64', //'#FFEB57', //'#FFF07E',
  $backgroundColor: '#FFF', //'#FCFCFC',
  $oppositeColor: '#000',
  $modeColor: '#FFF',
});

const localStyles = EStyleSheet.create({});
