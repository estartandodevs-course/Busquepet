import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import db from '@/config/firebase.config'

export async function login(email, password) {
  try {
    const auth = getAuth()
    const response = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, data: response.user };
  } catch (error) {
    return { success: false, data: error };
  }
}

export function onAuthStateChange(callback) {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback({ loggedIn: true });
    } else {
      callback({ loggedIn: false });
    }
  });
}