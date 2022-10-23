import { collection, getDocs } from "firebase/firestore";
import { atom } from "jotai";
import { db } from "../../firebase";

export const doctorsAtom = atom([]);
let doctors = [];
const querySnapshot = await getDocs(collection(db, "doctors"));
querySnapshot.forEach((doc) => {
	doctors.push(doc);
});
