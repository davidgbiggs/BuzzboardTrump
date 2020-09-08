import React from 'react';
import BuzzboardTemplate from './components/BuzzboardTemplate.js';
import {mock} from './mock.js';

export default function App() {
  return <BuzzboardTemplate endpoint={mock} />;
}
