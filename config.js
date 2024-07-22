
const firebaseConfig = {
  apiKey: "AIzaSyAvE30z8Kwm_2o0H3tRx8H0-jlNdyvtG9A",
  authDomain: "yesos-cb0d7.firebaseapp.com",
  projectId: "yesos-cb0d7",
  storageBucket: "yesos-cb0d7.appspot.com",
  messagingSenderId: "668049679807",
  appId: "1:668049679807:web:30394fd3ee3abc7ab9ed0a",
  measurementId: "G-MBBMVRFR3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

