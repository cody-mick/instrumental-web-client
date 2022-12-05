import { HealthAndSafety, MoreVert } from "@mui/icons-material";
import {
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
	const { deleteCaseHandler, loading } = useCaseDelete();

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
						{cases.map((c: any) => {
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
										<IconButton onClick={handleClick}>
											<MoreVert />
										</IconButton>
										<Menu
											id="case-edit-menu"
											MenuListProps={{
												"aria-labelledby":
													"long-button",
											}}
											anchorEl={anchorEl}
											open={open}
											onClose={handleClose}
											PaperProps={{
												style: {
													maxHeight: 48 * 4.5,
													width: "20ch",
												},
											}}>
											<MenuItem
												onClick={() =>
													setEditModal(true)
												}>
												Edit
											</MenuItem>
											<MenuItem
												onClick={() =>
													deleteCaseHandler(c.id)
												}>
												Delete
											</MenuItem>
										</Menu>
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
