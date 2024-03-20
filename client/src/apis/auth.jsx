
import { auth } from "./firebase";
import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
//   updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// export const doCreateUserWithEmailAndPassword = async (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// export const doSignInWithEmailAndPassword = (email, password) => {
//   return signInWithEmailAndPassword(auth, email, password);
// };

export const doSignInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const doSignOut = () => {
  return auth.signOut();
};

// export const doPasswordReset = (email) => {
//   return sendPasswordResetEmail(auth, email);
// };

// export const doPasswordChange = (password) => {
//   return updatePassword(auth.currentUser, password);
// };
