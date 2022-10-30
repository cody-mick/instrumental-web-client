import { collection, getDocs } from "firebase/firestore";
import { atom } from "jotai";
import { db } from "../../firebase";

const doctorsCollectionRef = collection(db, "doctors");

export const doctorsAtom = atom(async () => {
	const rawData = await getDocs(doctorsCollectionRef);
	const data = [];
	rawData.forEach((doc) => {
		data.push(doc.data());
	});
});
