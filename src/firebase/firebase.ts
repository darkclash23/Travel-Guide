import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCqo-xxsDwWT-nOYDVnvPcxBLVbj-Oq_uU",

  authDomain: "travel-guide-6c835.firebaseapp.com",

  projectId: "travel-guide-6c835",

  storageBucket: "travel-guide-6c835.firebasestorage.app",

  messagingSenderId: "529865849889",

  appId: "1:529865849889:web:84e0a57579e5d0224c3760",

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);