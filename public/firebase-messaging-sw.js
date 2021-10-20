importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");
//importScripts("https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js");
//importScripts("https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
});

const messaging = firebase.messaging();

self.addEventListener("push", (event) => {
  const title = event.data.json().notification.title;
  const body = event.data.json().notification.body;

  console.log("push", event.data.json().notification);
  console.log("Title: ", title);
  console.log("Body: ", body);

  const options = {
    body: body,
    icon: "",
  };

  self.registration.showNotification(title, options);

  console.log("after");
});

/*messaging.onMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});*/
