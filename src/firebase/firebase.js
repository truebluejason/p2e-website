import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAj2lVDAWiN1acxit8C0K0B36K1nE05xJA",
    authDomain: "path-to-enlightenment.firebaseapp.com",
    databaseURL: "https://path-to-enlightenment.firebaseio.com",
    projectId: "path-to-enlightenment",
    storageBucket: "path-to-enlightenment.appspot.com",
    messagingSenderId: "452081448491"
 };
 
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export {
  auth,
  db,
};