import { Toys } from "@mui/icons-material";
import { Card, CardContent, Chip, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAtom } from "jotai";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CasesContext } from "../../../contexts/CasesContext";
import { casesAtom } from "../../../utilities/atoms/casesAtom";

export default function CaseDetail() {
	const cases = useAtom(casesAtom);
	let params = useParams();
	const procedure = cases[0].find((c: any) => c.caseId === params.caseId);

	return (
		<Card
			sx={{
				minWidth: 275,
				maxWidth: 650,
				margin: "auto",
				marginTop: "15px",
			}}>
			<CardContent>
				<Typography
					sx={{ fontSize: 14 }}
					color="text.secondary"
					gutterBottom>
					Case {procedure.caseId}
				</Typography>
				<Typography variant="h5" component="div">
					{procedure.procedure}
				</Typography>
				<Typography>Approach: {procedure.approach}</Typography>
				<Divider>
					<Chip label="EQUIPMENT" variant="outlined" />
				</Divider>
				{procedure.equipment.map((e: any) => (
					<Typography>{e}</Typography>
				))}
				{/* <Typography>Instrumentation</Typography> */}
				<Divider>
					<Chip label="INSTRUMENTATION" variant="outlined" />
				</Divider>
				{procedure.instrumentation.map((i: any) => (
					<Typography>{i}</Typography>
				))}
				<Divider>
					<Chip label="MEDICATIONS" variant="outlined" />
				</Divider>
				{procedure.medications.map((m: any) => (
					<Typography>{m}</Typography>
				))}
				<Divider>
					<Chip label="SKIN PREP" variant="outlined" />
				</Divider>
				{procedure.skinPrep.map((sp: any) => (
					<Typography>{sp}</Typography>
				))}
				<Divider>
					<Chip label="SUPPLIES" variant="outlined" />
				</Divider>
				{procedure.supplies.map((su: any) => (
					<Typography>{su}</Typography>
				))}
				<Divider>
					<Chip label="DRESSINGS" variant="outlined" />
				</Divider>
				{procedure.dressings.map((d: any) => (
					<Typography>{d}</Typography>
				))}
				<Divider>
					<Chip label="NOTES" variant="outlined" />
				</Divider>
				{procedure.notes.map((n: any) => (
					<Typography>{n}</Typography>
				))}
				<Divider>
					<Chip label="SUTURE AND USAGE" variant="outlined" />
				</Divider>

				{procedure.sutureUsage.map((su: any) => (
					<Box
						sx={{
							display: "flex",
							gap: "15px",
						}}>
						<Typography>{su.area}: </Typography>
						<Typography>{su.suture}</Typography>
					</Box>
				))}
			</CardContent>
		</Card>
	);
}
