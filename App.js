import React, {useEffect} from 'react';
import BuzzboardTemplate from './components/BuzzboardTemplate.js';
import {mock} from './mock.js';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <BuzzboardTemplate endpoint={mock} />;
}
