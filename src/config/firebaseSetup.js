import { initializeApp } from "firebase/app"

import { getAnalytics } from "firebase/analytics"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCMw41AOSZttrxC2Laa5fuW_kNSZmy77sA",

  authDomain: "portfolio-58e4c.firebaseapp.com",

  databaseURL: "https://portfolio-58e4c.firebaseio.com",

  projectId: "portfolio-58e4c",

  storageBucket: "portfolio-58e4c.appspot.com",

  messagingSenderId: "1074946434383",

  appId: "1:1074946434383:web:464929edd0529439ba113a",

  measurementId: "G-27MZXJW8ET",
}

// Initialize Firebase

export default function firebaseSetup() {
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
}
