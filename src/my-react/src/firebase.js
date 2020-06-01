import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBuZ-YwbCc6S4UVJV7hv99fPd_kl42f4SY",
    authDomain: "friendly-a7e59.firebaseapp.com",
    databaseURL: "https://friendly-a7e59.firebaseio.com",
    projectId: "friendly-a7e59",
    storageBucket: "friendly-a7e59.appspot.com",
    messagingSenderId: "410325942019",
    appId: "1:410325942019:web:6d5f829c84c01cc9093336"
  };
  // Initialize Firebase
  export default () => {
    firebase.initializeApp(firebaseConfig);
  };
  