import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase";

export default function useDeleteTray() {
	const [loading, setLoading] = useState(false);

	const deleteTrayHandler = async (trayId: any) => {
		setLoading(true);

		try {
			const docRef = await deleteDoc(doc(db, "instrumentTrays", trayId));
			console.log("Tray Deleted Successfully");
		} catch (e) {
			console.error("An error occurred: ", e);
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		deleteTrayHandler,
	};
}
