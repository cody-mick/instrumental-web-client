import { Delete, Edit, MoreVert } from "@mui/icons-material";
import {
	IconButton,
	Menu,
	MenuItem,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function InstrumentsDisplay({ instruments }: any) {
	console.log(instruments[0].contents.instruments[0].name);

	return (
		<TableContainer
			component={Paper}
			sx={{ width: "75%", margin: "auto", marginTop: "15px" }}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Tray ID</TableCell>
						<TableCell align="center">Name</TableCell>
						<TableCell align="right">Options</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{instruments.map((ins: any) => (
						<TableRow key={ins.name}>
							<TableCell>{ins.trayId}</TableCell>
							<TableCell align="center">
								<Link
									to={`/instruments/${ins.trayId}`}
									style={{
										textDecoration: "none",
										color: "inherit",
									}}>
									{ins.name}
								</Link>
							</TableCell>
							<TableCell align="right">
								<IconButton onClick={() => {}}>
									<Edit />
								</IconButton>
								<IconButton onClick={() => {}}>
									<Delete />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
