import {} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";

import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZtzOK9FrBHbk_WuNwxTpyHLp1y-6sgNo",
  authDomain: "jsi-02-c20a3.firebaseapp.com",
  projectId: "jsi-02-c20a3",
  storageBucket: "jsi-02-c20a3.appspot.com",
  messagingSenderId: "1007483578581",
  appId: "1:1007483578581:web:7f487b20f5056f91fe5a5c",
  measurementId: "G-MKFCW733WZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// get users
const db = getFirestore(app);
const docRef = doc(db, "users", "ewu5BDaHyRK9Id2ptQfJ");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
const products = collection(db, "products");
const querySnapshot2 = await getDocs(collection(db, "products"));
querySnapshot2.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
// const querySnapshot = await getDocs(products);
// querySnapshot.forEach((doc) => {
//   let product = doc.data();
//   console.log(product);
//   document.getElementById(
//     "products"
//   ).innerHTML += `<li><div>Name: ${product.name}</div><div>Price: ${product.price}</div></li>`;
// });
