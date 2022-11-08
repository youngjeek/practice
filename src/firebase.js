// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REAC_APP_AUTH_DOMAIN,
  // databaseURL: REAC_APP_DATABASE,
  projectId: process.env.REAC_APP_PROJECT_ID,
  storageBucket: process.env.REAC_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REAC_APP_MESSAGING_ID,
  appId: process.env.REAC_APP_APP_ID,
};

const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;
