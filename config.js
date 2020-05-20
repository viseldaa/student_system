import Firebase from "firebase";
const config = {
  apiKey: "AIzaSyAvU8qXL4I9MsTJWnoMSTOu2iUEqsuAVb4",
  authDomain: "project-test-3194f.firebaseapp.com",
  databaseURL: "https://project-test-3194f.firebaseio.com",
  projectId: "project-test-3194f",
  storageBucket: "project-test-3194f.appspot.com",
  messagingSenderId: "761258655052",
};
let app = Firebase.initializeApp(config);
export const db = app.database();
