import { Delete, Edit, HealthAndSafety, MoreVert } from "@mui/icons-material";
import {
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	Menu,
	MenuItem,
	Paper,
	SpeedDial,
	SpeedDialAction,
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
import AddCaseModal from "./AddCaseModal";
import useCaseDelete from "./useCaseDelete";

export default function CasesDisplay({ cases }: any) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const [editModal, setEditModal] = useState(false);
	const [addCaseModal, setAddCaseModal] = useState(false);
	const [deleteWarning, setDeleteWarning] = useState(false);
	const [selectedCase, setSelectedCase] = useState("");
	const { deleteCaseHandler, loading } = useCaseDelete();

	const closeDeleteWarning = () => {
		setDeleteWarning(false);
	};

	return (
		<div>
			<TableContainer
				component={Paper}
				sx={{
					maxWidth: "50%",
					padding: "15px",
					margin: "auto",
					marginTop: "15px",
				}}>
				<Table sx={{ maxWidth: 950 }}>
					<TableHead>
						<TableRow>
							<TableCell>Case ID</TableCell>
							<TableCell>Case Name</TableCell>
							<TableCell align="center">Options</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cases.map((c: any, index: any) => {
							return (
								<TableRow key={c.caseId}>
									<TableCell>{c.caseId}</TableCell>
									<TableCell>
										<Link
											to={`/cases/${c.caseId}`}
											style={{
												textDecoration: "none",
												color: "inherit",
											}}>
											{c.procedure}
										</Link>
									</TableCell>

									<TableCell align="center">
										<IconButton
											onClick={() => setEditModal(true)}>
											<Edit />
										</IconButton>
										<IconButton
											onClick={() => {
												setDeleteWarning(true);
												setSelectedCase(c.id);
											}}>
											<Delete />
										</IconButton>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			{addCaseModal ? (
				<AddCaseModal
					open={addCaseModal}
					handleClose={() => setAddCaseModal(false)}
				/>
			) : null}
			<Dialog open={deleteWarning} onClose={closeDeleteWarning}>
				<DialogTitle>Delete Case</DialogTitle>
				<DialogContent>
					{loading ? (
						<CircularProgress />
					) : (
						<Box>
							<DialogContentText>
								Delete Case {selectedCase}?
							</DialogContentText>
							<DialogActions>
								<Button onClick={closeDeleteWarning}>No</Button>
								<Button
									onClick={() =>
										deleteCaseHandler(selectedCase)
									}>
									Yes
								</Button>
							</DialogActions>
						</Box>
					)}
				</DialogContent>
			</Dialog>
			<SpeedDial
				ariaLabel="add case speed dial"
				sx={{ position: "absolute", bottom: 16, right: 16 }}
				icon={<HealthAndSafety />}>
				<SpeedDialAction
					key="add-case"
					icon="+"
					tooltipTitle="Add Case"
					onClick={() => setAddCaseModal(!addCaseModal)}
				/>
			</SpeedDial>
		</div>
	);
}
