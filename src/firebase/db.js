import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    highestLevel: 1
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const getCurrentUser = (id) =>
  db.ref(`users/${id}`).once('value');

// Other Entity APIs ...