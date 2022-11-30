import {
	Paper,
	Table,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import React from "react";

export default function InstrumentsDisplay({ instruments }: any) {
	console.log(instruments);
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Tray ID</TableCell>
						<TableCell>Name</TableCell>
					</TableRow>
				</TableHead>
				{instruments.map((ins: any) => (
					<TableRow>
						<TableCell>{ins.trayId}</TableCell>
						<TableCell>{ins.name}</TableCell>
					</TableRow>
				))}
			</Table>
		</TableContainer>
	);
}
