import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase";

export default function useAddTray() {
	const [loading, setLoading] = useState(false);

	const addTraySubmissionHandler = async (values: any, onSuccess: any) => {
		setLoading(true);

		try {
			const docRef = await addDoc(
				collection(db, "instrumentTrays"),
				values
			);
			console.log("Tray created with ID: ", docRef.id);
			onSuccess();
		} catch (e) {
			console.error("Something went wrong: ", e);
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		addTraySubmissionHandler,
	};
}
