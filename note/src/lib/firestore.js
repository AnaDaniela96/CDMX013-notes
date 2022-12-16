import {
  getFirestore,
  collection,
  addDoc,
  //getDocs,
} from "firebase/firestore/lite";

import { auth } from "./config";
import { app } from "./config";

const db = getFirestore(app);

export const savePost = (title, note) => {
  const dateCreated = Date.now();
  const user = auth.currentUser.uid;
  return addDoc(collection(db, "post"), {
    title,
    note,
    dateCreated,
    user,
  });
};
