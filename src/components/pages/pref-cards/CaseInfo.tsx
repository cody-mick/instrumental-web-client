import { Divider, Grid, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { CasesContext } from "../../../contexts/CasesContext";

export default function CaseInfo() {
	//@ts-ignore
	const { cases } = useContext(CasesContext);
	const procedure = cases.find((c: any) => c.caseId === "at0001");

	return (
		<Paper
			elevation={3}
			sx={{
				margin: "auto",
				marginTop: "15px",
				marginBottom: "15px",
				width: 700,
				padding: "15px",
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography>Case ID: {procedure.caseId}</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography>Case: {procedure.procedure}</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography>Approach: {procedure.approach}</Typography>
				</Grid>
				<Grid item xs={12}>
					Notes:
				</Grid>
				<Grid item xs={12}>
					Some sample case notes
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Typography>Equipment</Typography>
					<Grid container spacing={2}>
						{procedure.equipment.map((equip: any) => (
							<Grid item xs={6}>
								{equip}
							</Grid>
						))}
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Typography>Instruments</Typography>
					<Grid container spacing={2}>
						{procedure.instrumentation.map((ins: any) => (
							<Grid item xs={6}>
								{ins}
							</Grid>
						))}
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Typography>Supplies</Typography>
					<Grid container spacing={2}>
						{procedure.supplies.map((sup: any) => (
							<Grid item xs={6}>
								{sup}
							</Grid>
						))}
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Typography>Suture</Typography>
					<Grid container spacing={2}>
						{Object.keys(procedure.sutureUsage).map((u) => (
							<Grid item xs={6}>
								{`${u}: ${procedure.sutureUsage[u]}`}
							</Grid>
						))}
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Typography>Skin Prep</Typography>
					<Grid container spacing={2}>
						{procedure.skinPrep.map((sp: any) => (
							<Grid item xs={6}>
								{sp}
							</Grid>
						))}
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Typography>Dressings</Typography>
					<Grid container spacing={2}>
						{procedure.dressings.map((d: any) => (
							<Grid item xs={6}>
								{d}
							</Grid>
						))}
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Typography>Medication</Typography>
					<Grid container spacing={2}>
						{procedure.medications.map((med: any) => (
							<Grid item xs={6}>
								{med}
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
}