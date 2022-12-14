import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase";

export default function useAddDoctorSubmission() {
	const [loading, setLoading] = useState(false);

	const addDoctorSubmissionHandler = async (values: any, onSuccess: any) => {
		setLoading(true);

		try {
			const docRef = await addDoc(collection(db, "doctors"), values);
			console.log("Doctor created with ID:  ", docRef.id);
			onSuccess();
		} catch (e) {
			console.error("Something went wrong: ", e);
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		addDoctorSubmissionHandler,
	};
}
