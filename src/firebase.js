import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDIq0XqlEbh8y53bmz6IELfjrvAJv6otp8",
  authDomain: "comments-reactjs-felipe.firebaseapp.com",
  databaseURL: "https://comments-reactjs-felipe.firebaseio.com",
  projectId: "comments-reactjs-felipe",
  storageBucket: "comments-reactjs-felipe.appspot.com",
  messagingSenderId: "206365231729"
};
firebase.initializeApp(config)

export const database = firebase.database()
export const auth = firebase.auth()