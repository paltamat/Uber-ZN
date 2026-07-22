importScripts("https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js");

/* Debe coincidir exactamente con el firebaseConfig de index.html */
firebase.initializeApp({
  apiKey: "AIzaSyAoizEPM8YX_GDtsr2RDpVinWZ-1H6oRIo",
  authDomain: "uber-zona-norte.firebaseapp.com",
  projectId: "uber-zona-norte",
  storageBucket: "uber-zona-norte.firebasestorage.app",
  messagingSenderId: "457678654900",
  appId: "1:457678654900:web:b7e765b27c75be7aa736e1"
});

var messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload){
  var title = (payload.notification && payload.notification.title) || "Uber Zona Norte";
  var options = {
    body: (payload.notification && payload.notification.body) || ""
  };
  self.registration.showNotification(title, options);
});
