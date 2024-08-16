// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
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

// get users
const db = getFirestore(app);
const docRef = doc(db, "users", "ewu5BDaHyRK9Id2ptQfJ");
const docSnap = await getDoc(docRef);

const auth = getAuth(app);

const email = document.getElementById("exampleInputEmail1");
const password = document.getElementById("exampleInputPassword1");
const username = document.getElementById("exampleInputName");

const btnRegister = document.getElementById("btn-reg");
console.log(email);

if (btnRegister) {
  btnRegister.addEventListener("click", () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);
        await sendEmailVerification(user);
        await updateProfile(auth.currentUser, {
          displayName: username.value,
        });
        await signOut(auth);
        alert("Please verify your email");
        location.href = "./login.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorCode);
      });
  });
}

const loginEmail = document.getElementById("exampleLoginEmail");
const loginPassword = document.getElementById("exampleInputPassword1");

const btnLogin = document.getElementById("btnLogin");
if (btnLogin) {
  btnLogin.addEventListener("click", function () {
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
      .then(async (userCredential) => {
        location.href = "/trangchu/index.html";

        const user = userCredential.user;
        if (!user.emailVerified) {
          signOut(auth);
          throw { code: "Email not verified", message: "" };
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorCode);
      });
  });
}

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
const querySnapshot2 = await getDocs(collection(db, "products"));
querySnapshot2.forEach((doc) => {
  // console.log(`${doc.id} => ${doc.data()}`);
  let product = doc.data();
  console.log(product);
  document.getElementById(
    "products"
  ).innerHTML += `<li><div class="card" style="width: 15.7rem; height: 30rem" id="sanpham">
                <img src="${product.image}"
                    class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.desc}
                    </p>
                    <p class="card-text">Số lượng hiện có: 50 chiếc</p>
                    <a href="/sanpham/NKCKM.html" class="btn btn-primary"><i class='bx bxs-cart'></i> ${product.cost}</a>
                </div>
            </div></li>`;
});
