const { initializeApp } = require("firebase-admin/app");
const { getAnalytics } = require("firebase-admin/analytics");


const firebaseConfig = {
    apiKey: "AIzaSyC174m1jPHV_vqIMp70nl3QlzDyzZ5Eudk",
    authDomain: "proyectoeva-6f5c5.firebaseapp.com",
    projectId: "proyectoeva-6f5c5",
    storageBucket: "proyectoeva-6f5c5.appspot.com",
    messagingSenderId: "505972697269",
    appId: "1:505972697269:web:2c945e0ea67879c37536fc",
    measurementId: "G-DW6ZDXL0QX"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);