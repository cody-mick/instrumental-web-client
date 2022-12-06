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
import { useState } from "react";
import { Link } from "react-router-dom";
import SimpleSnackBar from "../../common/notifications/SimpleSnackBar";
import DeleteTrayWarning from "./DeleteTrayWarning";
import EditTrayDialog from "./EditTrayDialog";

export default function InstrumentsDisplay({ instruments }: any) {
	const [activeTray, setActiveTray] = useState({});
	const [activeTrayId, setActiveTrayId] = useState("");
	const [deleteWarning, setDeleteWarning] = useState(false);
	const [deleteSuccess, setDeleteSuccess] = useState(false);
	const [editTray, setEditTray] = useState(false);
	const [editSuccess, setEditSuccess] = useState(false);

	const onDeleteSuccess = () => {
		setDeleteWarning(false);
		setDeleteSuccess(true);
	};

	const handleDeleteClose = () => {
		setDeleteWarning(false);
	};

	const handleEditClose = () => {
		setEditTray(false);
	};

	const onEditSuccess = () => {
		setEditTray(false);
		setEditSuccess(true);
	};

	return (
		<Box>
			{deleteWarning ? (
				<DeleteTrayWarning
					open={deleteWarning}
					handleClose={handleDeleteClose}
					trayId={activeTrayId}
					onSuccess={onDeleteSuccess}
				/>
			) : null}
			<SimpleSnackBar
				open={deleteSuccess}
				handleClose={() => setDeleteSuccess(false)}
				message="Tray deleted successfully!"
			/>
			{editTray ? (
				<EditTrayDialog
					open={editTray}
					handleClose={handleEditClose}
					tray={activeTray}
					onSuccess={onEditSuccess}
				/>
			) : null}
			<SimpleSnackBar
				open={editSuccess}
				handleClose={() => setEditSuccess(false)}
				message="Tray changes saved successfully!"
			/>
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
											setActiveTray(ins);
											setEditTray(true);
										}}>
										<Edit />
									</IconButton>
									<IconButton
										onClick={() => {
											setActiveTrayId(ins.id);
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
