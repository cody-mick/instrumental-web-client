import { Card, CardContent, Divider, Typography } from "@mui/material";
import { collection, doc, getDocs, query, QueryDocumentSnapshot, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";

interface Procedure {
	approach: string;
	caseId: string;
	dressings: string[];
	equipment: string[];
	instrumentation: string[];
	medications: string[];
	notes: string[];
	procedure: string;
	skinPrep: string[];
	supplies: string[];
	sutureUsage: {};
}

export default function CaseDetail() {
	const [loading, setLoading] = useState(false)
	const [procedure, setProcedure] = useState<QueryDocumentSnapshot | null>(null);
	let params = useParams();
	const casesRef = collection(db, "cases");
	const q = query(casesRef, where("caseId", "==", params.caseId));
	useEffect(() => {
		const getCase = async () => {
			try {
				setLoading(true)
				const querySnapshot = await getDocs(q);
				querySnapshot.forEach((doc) => {
					setProcedure(doc.data());
				});
				if (procedure) {
					setLoading(false)
				}
			} catch (err) {
				console.error(err)
			}
		};
		getCase();
	}, []);
	console.log("PROCEDURE: ", procedure);
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				{ loading ? (<p>LOADING</p>) : ( 
					<div>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom
						>
							Case {procedure.caseId}
						</Typography>
						<Typography variant="h5" component="div">
							{procedure.procedure}
						</Typography>
						<Typography>Approach: {procedure.approach}</Typography>
						<Typography>Equipment</Typography>
						<Divider />
						procedure.equipment.map((e) => (
							<Typography>{e}</Typography>
						))
						<Typography>Instrumentation</Typography>
						<Divider />
						procedure.instrumentation.map((i) => (
							<Typography>{i}</Typography>
						))
						<Typography>Medications</Typography>
						<Divider />
						procedure.medications.map((m) => (
							<Typography>{m}</Typography>
						))
						<Typography>Skin Prep</Typography>
						<Divider />
						procedure.skinPrep.map((sp) => (
							<Typography>{sp}</Typography>
						))
						<Typography>Supplies</Typography>
						<Divider />
						procedure.supplies.map((su) => (
							<Typography>{su}</Typography>
						))
						<Typography>Dressings</Typography>
						<Divider />
						procedure.dressings.map((d) => (
							<Typography>{d}</Typography>
						))
						<Typography>Notes</Typography>
						<Divider />
						procedure.notes.map((n) => (
							<Typography>{n}</Typography>
						))
						<Typography>Suture and Usage</Typography>
						<Divider /> 
					</div>)
			}
			</CardContent>
		</Card>
	);
}
