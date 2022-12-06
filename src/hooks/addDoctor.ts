import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const addDoctor = async (
	name: string,
	specialty: string,
	domHand: string,
	gloveSize: string
) => {
	try {
		const docRef = await addDoc(collection(db, "doctors"), {
			name: name,
			dominantHand: domHand,
			gloveSize: gloveSize,
			specialty: specialty,
		});
		setNewDocName("");
		setNewDocSpecialty("");
		setNewDocDominantHand("");
		setNewDocGloveSize("");
	} catch (e) {
		console.error("Could not complete request: ", e);
	}
};

export default addDoctor;
