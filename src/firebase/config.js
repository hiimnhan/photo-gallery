import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyB7VT3M6Bkl8kGWWe0zO3D9FNWbk8ZsLw4',
  authDomain: 'photo-gallery-45329.firebaseapp.com',
  projectId: 'photo-gallery-45329',
  storageBucket: 'photo-gallery-45329.appspot.com',
  messagingSenderId: '102627579227',
  appId: '1:102627579227:web:1b55254550a8e9d1f1767e',
  measurementId: 'G-HB5RGR1Q4B',
}

firebase.initializeApp(firebaseConfig)

const firebaseStorage = firebase.storage()
const firebaseFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firebaseStorage, firebaseFirestore, timestamp }
