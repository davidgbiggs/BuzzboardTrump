import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {BannerAd, TestIds, BannerAdSize} from '@react-native-firebase/admob';

export default function AdContainer(props) {
  return (
    <>
      <View style={{...localStyles.bannerAd}}>
        {/* <View style={{height: 50, width: 320, backgroundColor: 'white'}} /> */}
        <BannerAd
          // size="320x50"
          size={BannerAdSize.BANNER}
          unitId={props.testing ? TestIds.BANNER : props.adID}
          onAdFailedToLoad={(error) => {
            console.log(`Failed Loading: ${error} \n\n\n\n\n\n\n`);
          }}
          onAdClosed={(error) => {
            console.log(`Closed: ${error} \n\n\n\n\n\n\n`);
          }}
          onAdOpened={(error) => {
            console.log(`Opened: ${error} \n\n\n\n\n\n\n`);
          }}
        />
      </View>
    </>
  );
}

const localStyles = EStyleSheet.create({
  bannerAd: {
    height: '$screenHeight * 0.07142857',
    width: '$screenWidth * 0.90933333',
    marginBottom: '$screenHeight * 0.01169951',
    marginTop: '$screenHeight * -0.01169951',
    // backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
