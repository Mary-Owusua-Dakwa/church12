// Import Firebase SDK functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDxRdQ7zS_IYF1mhKhkZ05oFPs3CW7FYHM",
  authDomain: "high-throne-of-sanctory.firebaseapp.com",
  projectId: "high-throne-of-sanctory",
  storageBucket: "high-throne-of-sanctory.firebasestorage.app",
  messagingSenderId: "648629578383",
  appId: "1:648629578383:web:bd58e75415a2275c1a5efa",
  measurementId: "G-RZGX95DL0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export Firebase services
export { app, analytics, db, auth, storage };
