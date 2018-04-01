import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);
// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);
// Sign Out
export const doSignOut = () =>
  auth.signOut();
// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);
// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);
// Gmail Sign In & Sign Up
export const doGmailSignIn = () => {
  var provider = new auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}

// PS: These endpoints are called asynchronously, so they must have resolution / error handling later