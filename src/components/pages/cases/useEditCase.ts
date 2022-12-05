import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase";

export default function useEditCase() {
	const [loading, setLoading] = useState(false);

	const editCaseSubmissionHandler = async (
		values: any,
		caseId: any,
		onSuccess: any
	) => {
		setLoading(true);
		const caseRef = doc(db, "cases", caseId);
		try {
			await updateDoc(caseRef, values);
			console.log("Case updated successfully!");
			onSuccess();
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		editCaseSubmissionHandler,
	};
}
