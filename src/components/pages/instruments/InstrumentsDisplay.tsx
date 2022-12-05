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
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteTrayWarning from "./DeleteTrayWarning";

export default function InstrumentsDisplay({ instruments }: any) {
	const [activeTray, setActiveTray] = useState("");
	const [deleteWarning, setDeleteWarning] = useState(false);
	const handleDeleteClose = () => {
		setDeleteWarning(false);
	};
	return (
		<Box>
			{deleteWarning ? (
				<DeleteTrayWarning
					open={deleteWarning}
					handleClose={handleDeleteClose}
					trayId={activeTray}
				/>
			) : null}
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
									<IconButton
										onClick={() => {
											setActiveTray(ins.id);
											setDeleteWarning(true);
										}}>
										<Edit />
									</IconButton>
									<IconButton
										onClick={() => {
											setActiveTray(ins.id);
											setDeleteWarning(true);
										}}>
										<Delete />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
