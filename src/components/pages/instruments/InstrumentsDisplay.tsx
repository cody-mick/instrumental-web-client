import { MoreVert } from "@mui/icons-material";
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
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<TableContainer
			component={Paper}
			sx={{ width: "75%", margin: "auto", marginTop: "15px" }}
		>
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
									}}
								>
									{ins.name}
								</Link>
							</TableCell>
							<TableCell align="right">
								<IconButton onClick={handleClick}>
									<MoreVert />
								</IconButton>
								<Menu
									id="instrument-options-menu"
									MenuListProps={{
										"aria-labelledby": "long-button",
									}}
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
									PaperProps={{
										style: {
											maxHeight: 48 * 4.5,
											width: "20ch",
										},
									}}
								>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
