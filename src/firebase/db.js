import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    highestLevel: 1
  });

export const updateUserLevel = (id, newLevel) =>
  db.ref(`users/${id}/highestLevel`).set(newLevel);

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const getCurrentUserRef = (id) =>
  db.ref(`users/${id}`);

export const getCurrentUserData = (id) =>
  db.ref(`users/${id}`).once('value');

export const listenToCurrentUserData = (id, callback) =>
  db.ref(`users/${id}`).on('value', callback);
// Other Entity APIs ...

export const releaseCurrentUserData = (id, callback) =>
  db.ref(`users/${id}`).off();

export const doCreateDiagnosticsEntry = (id, responses) => {
  db.ref(`diagnostics/${id}/${Date.now()}`).set({
    time: Date(),
    responses: responses
  }).catch(err => {
    alert('An error has occurred while saving the data to Firebase.')
  });
  db.ref(`diagnostics/${id}/recent`).set({
    time: Date(),
    responses: responses
  }).catch(err => {
    alert('An error has occurred while saving the data to Firebase.')
  });
}

export const doDeleteOldDiagnosticsEntries = (id) => {
  let userResultRef = db.ref(`diagnostics/${id}`);
  userResultRef.once('value').then(snapshot => {
    let results = snapshot.val();
    let logs = Object.keys(results).filter(result => !!Number(result));
    if (logs.length > 5) {
      for (let i=0; i<logs.length - 5; i++) {
        delete results[logs[i]];
      }
      userResultRef.set(results).catch(err => alert('An error has occurred while deleting old data.'));
    }
  }).catch(err => {
    alert('An error has occurred while fetching data.')
  })
}

export const getResponses = (id) => 
  db.ref(`diagnostics/${id}`).once('value');

export const getRecentResponses = (id) =>
  db.ref(`diagnostics/${id}/recent/responses`).once('value');