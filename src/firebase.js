import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBc4uiR5VVD31d-et-yn10GpaqtDCn0OEc",
    authDomain: "slack-clone-7f41d.firebaseapp.com",
    projectId: "slack-clone-7f41d",
    storageBucket: "slack-clone-7f41d.appspot.com",
    messagingSenderId: "129678394865",
    appId: "1:129678394865:web:cfddbd4115d5f57a9bf050",
    measurementId: "G-NQJ94TMV1K"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db