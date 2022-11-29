import { Button } from "@mui/material";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useAtom } from "jotai";
import React, { useContext, useEffect, useState } from "react";
import CaseDisplay from "../../components/pages/cases/CasesDisplay";
import { CasesContext } from "../../contexts/CasesContext";
import { db } from "../../firebase";
import { casesAtom } from "../../utilities/atoms/casesAtom";

export default function Cases() {
	// const [cases, setCases] = useState([]);

	// useEffect(() => {
	// 	const getCases = async () => {
	// 		const querySnapshot = await getDocs(collection(db, "cases"));
	// 		//@ts-ignore
	// 		setCases(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
	// 		// querySnapshot.forEach((c) => {
	// 		// 	console.log("CASE: ", c.data());
	// 		// });
	// 	};
	// 	getCases();
	// }, []);

	//@ts-ignore
	const { cases, setCases } = useContext(CasesContext);

	console.log(cases);

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
			<CaseDisplay cases={cases} />
			{/* <Button variant="contained" onClick={addCase}>
				Add Test Case
			</Button> */}
		</div>
	);
}
