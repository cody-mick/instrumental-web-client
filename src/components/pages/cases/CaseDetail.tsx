import { Card, CardContent, Typography } from "@mui/material";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";

export default function CaseDetail() {
	const [procedure, setProcedure] = useState({});
	let params = useParams();
	const casesRef = collection(db, "cases");
	const q = query(casesRef, where("caseId", "==", params.caseId));
	useEffect(() => {
		const getCase = async () => {
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				setProcedure(doc.data());
			});
		};
		getCase();
	}, []);
	console.log("PROCEDURE: ", procedure);
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography
					sx={{ fontSize: 14 }}
					color="text.secondary"
					gutterBottom
				>
					Card Title
				</Typography>
				<Typography variant="h5" component="div">
					Yep heres some more text
				</Typography>
			</CardContent>
		</Card>
	);
}
