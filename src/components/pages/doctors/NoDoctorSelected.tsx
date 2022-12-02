import { NoAccounts } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function NoDoctorSelected() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "40px",
			}}
		>
			<Typography>No Doctor Selected</Typography>
			<NoAccounts sx={{ color: "lightgray", fontSize: 64 }} />
			<Typography sx={{ fontFamily: "Quicksand" }}>
				Please select a doctor to see details
			</Typography>
		</Box>
	);
}
