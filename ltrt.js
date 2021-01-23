var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAglc1N2zPPj9FW-3eQ69F2aPUv6vpmJVE",
  authDomain: "fsd23-2480f.firebaseapp.com",
  databaseURL: "https://fsd23-2480f-default-rtdb.firebaseio.com",
  projectId: "fsd23-2480f",
  storageBucket: "fsd23-2480f.appspot.com",
  messagingSenderId: "655416008958",
  appId: "1:655416008958:web:dc4704d8f29e94f31405af",
  measurementId: "G-35JYZQ38WS"
};
var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});
