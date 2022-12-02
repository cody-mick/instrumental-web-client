import {
	Box,
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
			<Typography sx={{ textAlign: "center" }}>Contents</Typography>
			<Typography>Instruments</Typography>
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
							<TableCell>{i.code}</TableCell>
							<TableCell>{i.name}</TableCell>
							<TableCell align="right">{i.quantity}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Box>
	);
}
