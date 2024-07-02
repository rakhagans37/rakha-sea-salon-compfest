// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  where,
  query,
  limit,
} from "firebase/firestore";
import { Reservation } from "../models/Reservation";
import { Review } from "../models/Review";
import { User } from "../models/User";
import { Service } from "../models/Services";
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

export async function registerUser(userModel: User) {
  let seeUser = await searchUser(userModel.email);
  if (seeUser !== undefined) {
    throw new Error("User already exists");
  }
  try {
    const docRef = await addDoc(collection(db, "users"), {
      id: userModel.id,
      fullName: userModel.fullName,
      email: userModel.email,
      password: userModel.password,
      role: userModel.role,
      phoneNumber: userModel.phoneNumber,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function login(email: string, password: string) {
  const querySnapshot = query(
    collection(db, "users"),
    where("email", "==", email),
    where("password", "==", password),
    limit(1),
  );

  const data = await getDocs(querySnapshot);
  if (!data.metadata.fromCache) {
    const users = new User(
      data.docs[0].data().id,
      data.docs[0].data().fullName,
      data.docs[0].data().email,
      data.docs[0].data().password,
      data.docs[0].data().role,
      data.docs[0].data().phoneNumber,
    );
    return users;
  } else {
    throw new Error("Invalid email or password");
  }
}

export async function searchUser(email: string) {
  const querySnapshot = query(
    collection(db, "users"),
    where("email", "==", email),
  );
  const data = await getDocs(querySnapshot);
  if (data.docs.length > 0) {
    const users = new User(
      data.docs[0].data().id,
      data.docs[0].data().fullName,
      data.docs[0].data().email,
      data.docs[0].data().password,
      data.docs[0].data().role,
      data.docs[0].data().phoneNumber,
    );
    return users;
  }
  return undefined;
}

export async function createService(serviceModel: Service) {
  try {
    const docRef = await addDoc(collection(db, "services"), {
      id: serviceModel.id,
      serviceName: serviceModel.serviceName,
      duration: serviceModel.duration,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
