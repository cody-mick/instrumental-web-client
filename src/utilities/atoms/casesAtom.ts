import { collection, getDocs } from "firebase/firestore";
import { atom } from "jotai";
import { db } from "../../firebase";

const casesCollectionRef = collection(db, "cases");
const data: any = [];

const querySnapshot = await getDocs(casesCollectionRef);
querySnapshot.forEach((doc) => {
	data.push(doc.data());
});

export const casesAtom = atom(data);
