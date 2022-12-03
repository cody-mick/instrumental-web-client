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
import React, { useState } from "react";
import { casesAtom } from "../../utilities/atoms/casesAtom";
import { doctorsAtom } from "../../utilities/atoms/doctorsAtom";

export default function PrefCardHome() {
	const cases = useAtom(casesAtom);
	const doctors = useAtom(doctorsAtom);
	const [doctor, setDoctor] = useState("");
	const [procedure, setProcedure] = useState("");

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
				<InputLabel id="case-label">Case</InputLabel>
				<Select
					label="Doctor"
					labelId="case-label"
					value={procedure}
					onChange={(e) => setProcedure(e.target.value)}
				>
					{cases[0].map((c: any) => (
						<MenuItem key={c.caseId} value={c.procedure}>
							{c.procedure}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl fullWidth>
				<InputLabel id="doctor-label">Doctor</InputLabel>
				<Select
					label="Doctor"
					labelId="doctor-label"
					value={doctor}
					onChange={(e) => setDoctor(e.target.value)}
				>
					{doctors[0].map((d: any) => (
						<MenuItem key={d.firstName} value={d}>
							{d.firstName} {d.lastName}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<Button variant="contained">Get Preference Card</Button>
		</Box>
	);
}
