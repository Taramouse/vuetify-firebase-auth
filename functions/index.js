// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// The Net Ninja - Firebase Auth - Cloud function - Adding custom claims

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
exports.addAdminRole = functions.https.onCall((data, context) => {
  // check request is made by an admin
  if (context.auth.token.admin !== true) {
    return {
      message: 'Error! You have to be an Admin to add one.'
    }
  }
  // get the user and add custom claim (admin)
  return admin.auth().getUserByEmail(data.email).then(user => {
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: true
    });
  }).then(() => {
    return {
      message: `Success! ${data.email} has been made an admin.`
    }
  }).catch(err => {
    return err;
  });
});
