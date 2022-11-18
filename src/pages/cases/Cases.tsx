import { Button } from "@mui/material";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

export default function Cases() {
	const [cases, setCases] = useState();
	useEffect(() => {
		const getCases = async () => {
			const querySnapshot = await getDocs(collection(db, "cases"));
			querySnapshot.forEach((c) => {
				console.log(c.data());
			});
		};
		getCases();
	}, []);

	const addCase = async () => {
		try {
			const docRef = await addDoc(collection(db, "cases"), {
				name: "Test Case",
				approach: "Winging It",
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	return (
		<div>
			<Button variant="contained" onClick={addCase}>
				Add Test Case
			</Button>
		</div>
	);
}
