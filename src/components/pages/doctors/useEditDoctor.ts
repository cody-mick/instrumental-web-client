import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export default function useEditDoctor() {
	const [loading, setLoading] = useState(false);

	const editDoctorSubmissionHandler = async (
		values: any,
		doctorId: any,
		onSuccess: any
	) => {
		setLoading(true);
		const docRef = doc(db, "doctors", doctorId);
		try {
			await updateDoc(docRef, values);
			onSuccess();
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		editDoctorSubmissionHandler,
	};
}
