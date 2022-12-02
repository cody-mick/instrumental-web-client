import { Card, CardContent, Divider, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CasesContext } from "../../../contexts/CasesContext";
import { casesAtom } from "../../../utilities/atoms/casesAtom";

export default function CaseDetail() {
	const cases = useAtom(casesAtom);
	let params = useParams();
	const procedure = cases[0].find((c: any) => c.caseId === params.caseId);

	console.log("PROCEDURE: ", procedure);
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
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
				{procedure.equipment.map((e: any) => (
					<Typography>{e}</Typography>
				))}
				<Typography>Instrumentation</Typography>
				<Divider />
				{procedure.instrumentation.map((i: any) => (
					<Typography>{i}</Typography>
				))}
				<Typography>Medications</Typography>
				<Divider />
				{procedure.medications.map((m: any) => (
					<Typography>{m}</Typography>
				))}
				<Typography>Skin Prep</Typography>
				<Divider />
				{procedure.skinPrep.map((sp: any) => (
					<Typography>{sp}</Typography>
				))}
				<Typography>Supplies</Typography>
				<Divider />
				{procedure.supplies.map((su: any) => (
					<Typography>{su}</Typography>
				))}
				<Typography>Dressings</Typography>
				<Divider />
				{procedure.dressings.map((d: any) => (
					<Typography>{d}</Typography>
				))}
				<Typography>Notes</Typography>
				<Divider />
				{procedure.notes.map((n: any) => (
					<Typography>{n}</Typography>
				))}
				<Typography>Suture and Usage</Typography>
				<Divider />
			</CardContent>
		</Card>
	);
}
