import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyB_d5S2vs_L0hF1R-o7_sgo-1OACcAvfb8",
        authDomain: "fb-messenger-clone.firebaseapp.com",
        databaseURL: "https://fb-messenger-clone.firebaseio.com",
        projectId: "fb-messenger-clone",
        storageBucket: "fb-messenger-clone.appspot.com",
        messagingSenderId: "160244209111",
        appId: "1:160244209111:web:57eb5b94e2594d28ba6792",
        measurementId: "G-TY0R67KDZT"
     
})

const db = firebaseApp.firestore();
export default db;