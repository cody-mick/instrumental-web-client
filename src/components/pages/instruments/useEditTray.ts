import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase";

export default function useEditTray() {
	const [loading, setLoading] = useState(false);

	const editTraySubmissionHandler = async (values: any, trayId: any) => {
		setLoading(true);
		const trayRef = doc(db, "instrumentTrays", trayId);

		try {
			await updateDoc(trayRef, values);
			console.log("Tray updated successfully!");
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		editTraySubmissionHandler,
	};
}
