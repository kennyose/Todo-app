import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAzHJXQLmnAjBf6dY-mPCKbtS4w_0Z9k20",
    authDomain: "todo-app-7a8b5.firebaseapp.com",
    databaseURL: "https://todo-app-7a8b5.firebaseio.com",
    storageBucket: "todo-app-7a8b5.appspot.com",
    messagingSenderId: "578841753482"
  };
  firebase.initializeApp(config);
} catch (e) {

}

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