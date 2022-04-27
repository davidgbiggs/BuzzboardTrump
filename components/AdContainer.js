import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {BannerAd, TestIds} from '@react-native-firebase/admob';
import DeviceInfo from 'react-native-device-info';

function AdContainer(props) {
  console.log(DeviceInfo.getBrand());

  return (
    <>
      <View style={localStyles.bannerAd}>
        <BannerAd
          size="FLUID"
          requestOptions={{
            keywords: props.adKeywords,
          }}
          unitId={TestIds.BANNER}
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

export default React.memo(AdContainer);

const localStyles = EStyleSheet.create({
  bannerAd: {
    height: '$vh * 5',
    width: '$vw * 60',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '$vw * -40',
    marginBottom: '$vh * 0.5',
  },
});
