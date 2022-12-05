import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";

export default function useAddCaseFormSubmission() {
	const [loading, setLoading] = useState(false);

	const addCaseSubmissionHandler = async (values: any) => {
		setLoading(true);

		try {
			const docRef = await addDoc(collection(db, "cases"), values);
			console.log("Case created with ID: ", docRef.id);
		} catch (e) {
			console.error("Something went wrong: ", e);
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		addCaseSubmissionHandler,
	};
}
