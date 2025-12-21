import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  // Replace with your actual Firebase config
  // For the exam/demo, you might use environment variables or hardcode if local-only
  const firebaseConfig = {
   apiKey: "AIzaSyBEQqM8mk7VRSDqmqqonHy6-uhbIkV8TC0",
  authDomain: "etsy-projemm.firebaseapp.com",
  projectId: "etsy-projemm",
  storageBucket: "etsy-projemm.firebasestorage.app",
  messagingSenderId: "454845988130",
  appId: "1:454845988130:web:ef1ad7ca5895bc37b1397b",
  measurementId: "G-6L2S8WNBFE"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  // Force Long Polling to avoid WebSocket hangs in some environments
  const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });

  return {
    provide: {
      auth,
      db
    }
  };
});
