// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
} from "firebase/firestore";
import { Reservation } from "../models/Reservation";
import { Review } from "../models/Review";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkg0KqtGhFETsTCZu5JZmJp2qg3EAW6-E",
  authDomain: "rakha-sea-salon-compfest.firebaseapp.com",
  projectId: "rakha-sea-salon-compfest",
  storageBucket: "rakha-sea-salon-compfest.appspot.com",
  messagingSenderId: "984630068292",
  appId: "1:984630068292:web:156aa0fa438f962b0ba811",
  measurementId: "G-KEJ8BDXGCV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Create reviews
export async function createReview(reviewModel: Review) {
  try {
    const docRef = await addDoc(collection(db, "reviews"), {
      username: reviewModel.username,
      rating: reviewModel.rating,
      comment: reviewModel.comment,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Get reviews
export async function getReviews() {
  const querySnapshot = await getDocs(collection(db, "reviews"));
  if (!querySnapshot.metadata.fromCache) {
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  }
}

// Create Reservation
export async function createReservation(reservationModel: Reservation) {
  try {
    const docRef = await addDoc(collection(db, "reservations"), {
      username: reservationModel.name,
      dateTime: reservationModel.dateTime,
      service: reservationModel.service,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
