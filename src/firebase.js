import firebase from 'firebase';
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBG9OTPsl22nAMsYl6s72LHUPX_6iNu8Ug",
    authDomain: "crudapp-52eac.firebaseapp.com",
    projectId: "crudapp-52eac",
    storageBucket: "crudapp-52eac.appspot.com",
    messagingSenderId: "37503474657",
    appId: "1:37503474657:web:1c3ff46afd9002647a90a0"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase