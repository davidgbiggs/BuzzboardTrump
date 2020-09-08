import Platform from 'react-native';

let Sound = require('react-native-sound');
Sound.setCategory('Playback');

let fn1 = new Sound(
  'fake_news.mp3',
  encodeURIComponent(Sound.MAIN_BUNDLE),
  (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  },
);
let fn2 = new Sound('billions.mp3', encodeURIComponent(Sound.MAIN_BUNDLE));
let fn3 = new Sound('china.mp3', encodeURIComponent(Sound.MAIN_BUNDLE));
let fn4 = new Sound(
  'crookedhillary.mp3',
  encodeURIComponent(Sound.MAIN_BUNDLE),
);

let fn5 = new Sound('wrong.mp3', encodeURIComponent(Sound.MAIN_BUNDLE));
let fn6 = new Sound('dating_her.mp3', encodeURIComponent(Sound.MAIN_BUNDLE));
let fn7 = new Sound('respectswomen.mp3', encodeURIComponent(Sound.MAIN_BUNDLE));
let fn8 = new Sound('thirdperson.mp3', encodeURIComponent(Sound.MAIN_BUNDLE));

let fn9 = new Sound(
  'collusiondelusionisover.mp3',
  encodeURIComponent(Sound.MAIN_BUNDLE),
);
let fn10 = new Sound(
  'couldvetoldyouthat.mp3',
  encodeURIComponent(Sound.MAIN_BUNDLE),
);
let fn11 = new Sound(
  'giveyouamillion.mp3',
  encodeURIComponent(Sound.MAIN_BUNDLE),
);
let fn12 = new Sound('grabembythe.mp3', encodeURIComponent(Sound.MAIN_BUNDLE));
let fn13 = new Sound('littlemarco.mp3', encodeURIComponent(Sound.MAIN_BUNDLE));
let fn14 = new Sound('lyinted.mp3', encodeURIComponent(Sound.MAIN_BUNDLE));
let fn15 = new Sound(
  'makeamericagreatagain.mp3',
  encodeURIComponent(Sound.MAIN_BUNDLE),
);
let fn16 = new Sound(
  'metoogeneration.mp3',
  encodeURIComponent(Sound.MAIN_BUNDLE),
);

let fn17 = new Sound('pocahontas.mp3', encodeURIComponent(Sound.MAIN_BUNDLE));
let fn18 = new Sound(
  'sleepyjoebiden.mp3',
  encodeURIComponent(Sound.MAIN_BUNDLE),
);
let fn19 = new Sound('thedeepstate.mp3', encodeURIComponent(Sound.MAIN_BUNDLE));
let fn20 = new Sound(
  'thefakenewsmedia.mp3',
  encodeURIComponent(Sound.MAIN_BUNDLE),
);
let fn21 = new Sound('twoounces.mp3', encodeURIComponent(Sound.MAIN_BUNDLE));
let fn22 = new Sound(
  'wehavesomebreakingnews.mp3',
  encodeURIComponent(Sound.MAIN_BUNDLE),
);
let fn23 = new Sound('youdbeinjail.mp3', encodeURIComponent(Sound.MAIN_BUNDLE));
let fn24 = new Sound(
  'therussiahoaxisdead.mp3',
  encodeURIComponent(Sound.MAIN_BUNDLE),
);

const tracks1 = [
  {
    id: '0',
    sound: fn1,
    title: 'You Are Fake News',
  },
  {
    id: '1',
    sound: fn2,
    title: 'Billions and Billions',
  },
  {id: '2', sound: fn3, title: 'China'},
  {
    id: '3',
    sound: fn4,
    title: 'Crooked Hillary',
  },
  {id: '5', sound: fn5, title: 'Wrong'},
  {id: '6', sound: fn6, title: "If Ivanka Weren't My Daughter"},
];

const tracks2 = [
  {id: '7', sound: fn7, title: 'The Most Respect'},
  {id: '8', sound: fn8, title: 'Donald Trump'},
  {id: '10', sound: fn9, title: 'Collusion Delusion'},
  {id: '11', sound: fn10, title: 'Coulda told you that'},
  {id: '12', sound: fn11, title: 'I will give you a million'},
  {id: '13', sound: fn12, title: 'Grab em by the ______'},
];

const tracks3 = [
  {id: '14', sound: fn13, title: 'Little Marco'},
  {id: '15', sound: fn14, title: "Lyin' Ted"},
  {id: '16', sound: fn15, title: 'Make America Great Again'},
  {id: '17', sound: fn16, title: 'Be Very Gentle'},
  {id: '18', sound: fn17, title: 'Pocahontas'},
  {id: '19', sound: fn18, title: 'Sleepy Joe Biden'},
];

const tracks4 = [
  {id: '20', sound: fn19, title: 'The Deep State'},
  {id: '21', sound: fn20, title: 'The Fake News Media'},
  {id: '22', sound: fn21, title: 'It Only Weighs... TWO ounces'},
  {id: '23', sound: fn22, title: 'We Have Some Breaking News'},
  {id: '24', sound: fn23, title: "Because You'd Be In Jail"},
  {id: '25', sound: fn24, title: 'The Russia Hoax Is Finally Dead'},
];

let fn25 = new Sound(
  'thesearesickpeople.mp3',
  encodeURIComponent(Sound.MAIN_BUNDLE),
);
let fn26 = new Sound(
  'theyrebeautifultheyrebig.mp3',
  encodeURIComponent(Sound.MAIN_BUNDLE),
);
let fn27 = new Sound(
  'wallgottaller.mp3',
  encodeURIComponent(Sound.MAIN_BUNDLE),
);
let fn28 = new Sound('majorlosers.mp3', encodeURIComponent(Sound.MAIN_BUNDLE));

const tracks5 = [
  {id: '26', sound: fn25, title: 'These Are Sick People'},
  {id: '27', sound: fn26, title: "They're Beautiful, They're Big"},
  {id: '28', sound: fn27, title: 'The Wall Just Got 10 Feet Taller'},
  {id: '29', sound: fn28, title: 'Major Losers'},
];

const banners =
  Platform.OS === 'ios'
    ? [
        'ca-app-pub-5686363028654312/4584012269',
        'ca-app-pub-5686363028654312/8557263906',
      ]
    : [
        'ca-app-pub-5686363028654312/7815027878',
        'ca-app-pub-5686363028654312/5188864530',
      ];

export const mock = {
  boardTitle: 'Trump',
  pictureLocation:
    'https://live.staticflickr.com/4423/36550049236_7118b32f83_b.jpg',
  soundCategories: [
    {
      id: '0',
      title: 'Page 1',
      sounds: tracks1,
      adID:
        Platform.OS === 'ios'
          ? 'ca-app-pub-5686363028654312/3824033740'
          : 'ca-app-pub-5686363028654312/9414329827',
    },
    {
      id: '1',
      title: 'Page 2',
      sounds: tracks2,
      adID:
        Platform.OS === 'ios'
          ? 'ca-app-pub-5686363028654312/2258110134'
          : 'ca-app-pub-5686363028654312/2339631490',
    },
    {
      id: '2',
      title: 'Page 3',
      sounds: tracks3,
      adID: Platform.OS
        ? 'ca-app-pub-5686363028654312/6559153508'
        : 'ca-app-pub-5686363028654312/5380436227',
    },
    {
      id: '3',
      title: 'Page 4',
      sounds: tracks4,
      adID: Platform.OS
        ? 'ca-app-pub-5686363028654312/9138049533'
        : 'ca-app-pub-5686363028654312/2342552809',
    },
    {
      id: '4',
      title: 'Page 5',
      sounds: tracks5,
      adID: Platform.OS
        ? 'ca-app-pub-5686363028654312/7413355585'
        : 'ca-app-pub-5686363028654312/6964146487',
    },
    // {
    //   id: '0',
    //   title: 'Hello',
    //   sounds: [sound, sound, sound, sound, sound, sound, sound, sound],
    // },
    // {
    //   id: '1',
    //   title: 'Statement',
    //   sounds: [sound, sound, sound, sound, sound, sound, sound, sound],
    // },
    // {
    //   id: '2',
    //   title: 'Agree',
    //   sounds: [sound, sound, sound, sound, sound, sound, sound, sound],
    // },
    // {
    //   id: '3',
    //   title: 'Disagree',
    //   sounds: [sound, sound, sound, sound, sound, sound, sound, sound],
    // },
    // {
    //   id: '4',
    //   title: 'Goodbye',
    //   sounds: [sound, sound, sound, sound, sound, sound, sound, sound],
    // },
    // {
    //   id: '5',
    //   title: 'Goodbye',
    //   sounds: [sound, sound, sound, sound, sound, sound, sound, sound],
    // },
    // {
    //   id: '6',
    //   title: 'Goodbye',
    //   sounds: [sound, sound, sound, sound, sound, sound, sound, sound],
    // },
  ],
};
