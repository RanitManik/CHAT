import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  OAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const FirebaseContext = createContext(null);

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const useFirebase = () => useContext(FirebaseContext);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const microsoftProvider = new OAuthProvider("microsoft.com");
const facebookProvider = new FacebookAuthProvider();
// const firestore = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);

// Enable Firebase analytics
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(firebaseApp);

// Enable Firebase AppCheck
// eslint-disable-next-line no-unused-vars
const appCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_SITE_KEY),
  isTokenAutoRefreshEnabled: true,
});

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user || null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInUserWithEmailAndPassword = (email, password) => {
    if (!email || !password) return;
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInUserWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };

  const signInUserWithGithub = () => {
    return signInWithPopup(firebaseAuth, githubProvider);
  };
  const signInUserWithMicrosoft = () => {
    return signInWithPopup(firebaseAuth, microsoftProvider);
  };
  const signInUserWithFacebook = () => {
    return signInWithPopup(firebaseAuth, facebookProvider);
  };

  const handleSignOut = async () => {
    try {
      await signOut(firebaseAuth);
      console.log("Sign out successfully");
    } catch (error) {
      console.error("Sign out error: ", error.message);
      return error;
    }
  };

  const isLoggedIn = !!user;

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        signInUserWithGoogle,
        signInUserWithGithub,
        signInUserWithMicrosoft,
        signInUserWithFacebook,
        isLoggedIn,
        handleSignOut,
        user,
        loading,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
