import { collection, getDocs } from "firebase/firestore";
import { atom } from "jotai";
import { db } from "../../firebase";

const doctorsCollectionRef = collection(db, "doctors");
const data: any = [];

const querySnapshot = await getDocs(doctorsCollectionRef);
querySnapshot.forEach((doc) => {
	data.push({ ...doc.data(), id: doc.id });
});

export const doctorsAtom = atom(data);
