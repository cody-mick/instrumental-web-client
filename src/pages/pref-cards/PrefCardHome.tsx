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
import React from "react";

export default function PrefCardHome() {
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
					<MenuItem>Doctor1</MenuItem>
					<MenuItem>Doctor2</MenuItem>
					<MenuItem>Doctor3</MenuItem>
				</Select>
			</FormControl>
			<FormControl fullWidth>
				<InputLabel id="case-label">Case</InputLabel>
				<Select label="Doctor" labelId="case-label">
					<MenuItem>Case1</MenuItem>
					<MenuItem>Case2</MenuItem>
					<MenuItem>Case3</MenuItem>
				</Select>
			</FormControl>
			<Button variant="contained">Get Preference Card</Button>
		</Box>
	);
}
