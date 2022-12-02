import {
	Box,
	Button,
	Card,
	Divider,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stepper,
} from "@mui/material";
import { useAtom } from "jotai";
import React from "react";
import { casesAtom } from "../../utilities/atoms/casesAtom";
import { doctorsAtom } from "../../utilities/atoms/doctorsAtom";

export default function PrefCardHome() {
	const cases = useAtom(casesAtom);
	const doctors = useAtom(doctorsAtom);
	console.log(doctors);
	return (
		<Box
			sx={{
				maxWidth: 420,
				margin: "auto",
				marginTop: "15px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: "15px",
			}}
		>
			<FormControl fullWidth>
				<InputLabel id="doctor-label">Doctor</InputLabel>
				<Select label="Doctor" labelId="doctor-label">
					{doctors[0].map((d: any) => (
						<MenuItem
							key={d.firstName}
							value={`${d.firstName} ${d.lastName}`}
						>
							{d.firstName} {d.lastName}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl fullWidth>
				<InputLabel id="case-label">Case</InputLabel>
				<Select label="Doctor" labelId="case-label">
					{cases[0].map((c: any) => (
						<MenuItem key={c.caseId} value={c.procedure}>
							{c.procedure}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<Button variant="contained">Get Preference Card</Button>
		</Box>
	);
}
