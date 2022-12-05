import { collection, getDocs } from "firebase/firestore";
import { atom } from "jotai";
import { db } from "../../firebase";

const instrumentsCollectionRef = collection(db, "instrumentTrays");
const data: any = [];

const querySnapshot = await getDocs(instrumentsCollectionRef);
querySnapshot.forEach((doc) => {
	data.push({ ...doc.data(), id: doc.id });
});

export const instrumentsAtom = atom(data);
