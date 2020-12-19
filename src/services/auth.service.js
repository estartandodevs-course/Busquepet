import firebase from "firebase/app";
import "firebase/auth";

export async function login(email, password) {
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

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