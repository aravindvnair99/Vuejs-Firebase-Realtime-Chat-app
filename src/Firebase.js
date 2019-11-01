import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyDzUShJlg9_89orJfB2ZfFTWky-Hk3e85g',
	authDomain: 'vuejs-firebase-realtime-chat.firebaseapp.com',
	databaseURL: 'https://vuejs-firebase-realtime-chat.firebaseio.com',
	projectId: 'vuejs-firebase-realtime-chat',
	storageBucket: 'vuejs-firebase-realtime-chat.appspot.com',
	messagingSenderId: '79720825114',
	appId: '1:79720825114:web:4b9a282e7c8fab47b32ca3',
	measurementId: 'G-LKHL4T19B3'
};



firebase.initializeApp(config);

export default firebase
