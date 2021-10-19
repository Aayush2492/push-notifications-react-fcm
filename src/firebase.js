import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";

/*const firebaseConfig = {
  apiKey: "AIzaSyD7Da_o45oxwbT-1xqh9-808HwxlPIWWwo",
  authDomain: "sunshine-iith-mha-app.firebaseapp.com",
  projectId: "sunshine-iith-mha-app",
  storageBucket: "sunshine-iith-mha-app.appspot.com",
  messagingSenderId: "711720827718",
  appId: "1:711720827718:web:2eb43a20ba8c738c9f8347",
  measurementId: "G-TRNDSXLTXQ",
};*/

const firebaseConfig = {
  apiKey: "AIzaSyCWAYZGnPnFX8RyQTGb3muwnCeNArYSedw",
  authDomain: "test-push-notifications-7d87a.firebaseapp.com",
  projectId: "test-push-notifications-7d87a",
  storageBucket: "test-push-notifications-7d87a.appspot.com",
  messagingSenderId: "875322368660",
  appId: "1:875322368660:web:ce6100a97bae9a8ea94a81",
};

const app = initializeApp(firebaseConfig);
export default app;

const messaging = getMessaging(app);

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  console.log("Title", payload.data.title);
  console.log("Body", payload.data.body);
});

/*onBackgroundMessage(messaging, (payload) => {
  console.log("Received background message ", payload);

  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});*/
