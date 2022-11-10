import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import 'firebase/compat/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyATWJMtWU_26IKXmpa31A8d6CEkYrnywG4',
  authDomain: 'cnfidentilly.firebaseapp.com',
  projectId: 'cnfidentilly',
  storageBucket: 'cnfidentilly.appspot.com',
  messagingSenderId: '857770873571',
  appId: '1:857770873571:web:ea600d6c1660865e3fabd6',
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  // appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Authentication and get a reference to the service
const authService = getAuth(firebaseApp);
export default authService;

// .env사용하면 모듈화된 버전9에서 api-key invalid
