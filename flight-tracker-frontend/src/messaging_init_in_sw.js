import { initializeApp } from "firebase/app";
import { getMessaging, onMessage, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDKZUXvssGUpL_8Gslv4Qqk7Up_AK60ksA",
  authDomain: "flight-tracker-2e190.firebaseapp.com",
  projectId: "flight-tracker-2e190",
  storageBucket: "flight-tracker-2e190.appspot.com",
  messagingSenderId: "744249345990",
  appId: "1:744249345990:web:3e064b3aa5aba33eff94c7",
  measurementId: "G-2RY2V922KQ"
};

initializeApp(firebaseConfig);

const messaging = getMessaging();


export const requestForToken = () => {
  return getToken(messaging, { vapidKey: 'BFh1F_TGQNkX3Z9trHN5SJHl63T_Yx4IDI_0sZ4sehe0YiHbRhY1ccgPyDLCKzeQTbIXsmxYDhNzZ3pz0Fw0Rys' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });