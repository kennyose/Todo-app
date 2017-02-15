import firebase from 'firebase';

try {
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();

export var firebaseRef = firebase.database().ref();

export default firebase;

// Setting data in the database
/*firebaseRef.set({
  user: {
    name: 'chukwuka',
    age: 22,
    city: 'abuja',
    placeOfBirth: 'abuja'
  },
  appName: 'buddy',
  version: 0.01
});
*/
// Overwriting a data in the database with child() and set()
/*firebaseRef.child('version').set(0.03);*/

// Updating data in the database with multipath
/*firebaseRef.update({
  'user/name': 'kennedy',
  'user/placeOfBirth': 'london'
});*/

// Updating data in the database with child() and update()
/*firebaseRef.child('user').update({
  city: 'lagos'
});*/

// Removing data in the database with multipath in child() and remove()
/*firebaseRef.child('user/placeOfBirth').remove()*/

// Removing data in the database with child() and update()
/*firebaseRef.child('user').update({
  city: null
});*/

// Getting data from the database with once() and promise
/*firebaseRef.child('user').once('value').then((snapshot) => {
  console.log('got the entire database', snapshot.val())
}, (e) => {
  console.log('something went wrong ', e)
});*/

// Subscribe to changes in firebase database with on('value')
/*firebaseRef.on('value', (snapshot) => {
  console.log('got value ', snapshot.val());
});*/

// Unsubscribe to changes in firebase database with off()
/*firebaseRef.off()*/

// Unsubscribe to changes from a callback func
/*firebaseRef.off(<callback>)*/

/*firebaseRef.update({
  appName: 'bentley'
});

var newTodos = firebaseRef.child('todos');
newTodos.push({
  text: 'clean the yard then go for a walk'
});

newTodos.push({
  text: 'go go go go gog ogogo'
});*/

// firebaseRef.remove();