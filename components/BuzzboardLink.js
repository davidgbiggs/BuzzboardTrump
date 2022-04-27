import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import BasicText from '../components/BasicText';
import EStyleSheet from 'react-native-extended-stylesheet';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AppLink from 'react-native-app-link';

export default function BuzzboardLink(props) {
  function openApp(appName, appStoreId, appStoreLocale, playStoreId) {
    AppLink.openInStore({appName, appStoreId, appStoreLocale, playStoreId});
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() =>
        openApp(
          'Biden Soundboard (Buzzboard)',
          '1534512601',
          'us',
          'app.buzzboard.biden',
        )
      }>
      <View style={localStyles.view}>
        <BasicText style={localStyles.title}>{props.title}</BasicText>
        <View style={localStyles.linkIconView}>
          <FontAwesomeIcon
            name="external-link-square"
            size={EStyleSheet.value('1.6rem')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const localStyles = EStyleSheet.create({
  view: {
    backgroundColor: '$activeColor',
    marginHorizontal: '$vw * 6',
    paddingLeft: '0.6rem',
    borderRadius: '0.4rem',
    marginVertical: '$vh * 1',

    flexDirection: 'row',
    justifyContent: 'space-between',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  linkIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '$vh * 1',
    paddingHorizontal: '$vw * 2.5',
    height: '100%',
    borderBottomRightRadius: '0.4rem',
    borderTopRightRadius: '0.4rem',
    alignSelf: 'center',
  },
  title: {
    marginVertical: '0.4rem',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    alignSelf: 'center',
  },
});
