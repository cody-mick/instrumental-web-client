import {
	Box,
	Chip,
	Divider,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import React from "react";

export default function TrayContents({ contents }: any) {
	return (
		<Box>
			<Typography
				sx={{ textAlign: "center", marginTop: "15px", fontSize: 24 }}
			>
				Tray Contents
			</Typography>
			<Divider textAlign="left" sx={{ marginTop: "15px" }}>
				<Typography sx={{ fontSize: 16 }}>Instruments</Typography>
			</Divider>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Code</TableCell>
						<TableCell>Name</TableCell>
						<TableCell align="right">Quantity</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{contents.instruments.map((i: any) => (
						<TableRow key={i.name}>
							<TableCell sx={{ width: "150px" }}>
								{i.code}
							</TableCell>
							<TableCell>{i.name}</TableCell>
							<TableCell align="right">{i.quantity}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Box>
	);
}
