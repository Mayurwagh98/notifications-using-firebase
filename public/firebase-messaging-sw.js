importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyADIygsPv1lynTybPZsE4kkIEdL39xTbok",
    authDomain: "fir-notifications-da65c.firebaseapp.com",
    projectId: "fir-notifications-da65c",
    storageBucket: "fir-notifications-da65c.appspot.com",
    messagingSenderId: "1038764281209",
    appId: "1:1038764281209:web:08e340b84675fe74a9b3a8",
    measurementId: "G-7Q81F9ZLRV" 
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// when user tab is closed then this will show notifications in background
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };
//   console.log(notificationTitle);
  self.registration.showNotification(notificationTitle, notificationOptions);
});