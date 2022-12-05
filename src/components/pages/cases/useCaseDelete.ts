import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export default function useCaseDelete() {
	const [loading, setLoading] = useState(false);

	const deleteCaseHandler = async (caseId: any, onSuccess: any) => {
		setLoading(true);

		try {
			await deleteDoc(doc(db, "cases", caseId));
			onSuccess();
		} catch (e) {
			console.error("AN ERROR OCCURRED: ", e);
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		deleteCaseHandler,
	};
}
