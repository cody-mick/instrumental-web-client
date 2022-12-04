import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase";

export default function useAddDoctorSubmission(onSuccess: any) {
	const [loading, setLoading] = useState(false);

	const addDoctorSubmissionHandler = async (values: any) => {
		setLoading(true);

		try {
			console.log("In the request!");
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
