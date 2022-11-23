import { InboxRounded } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DetailDrawer from "../../common/drawer/DetailDrawer";
import DoctorDetail from "./DoctorDetail";

export default function DoctorsList({ doctors }: any) {
	const [doctorDetailOpen, setDoctorDetailOpen] = useState(false);
	const handleDoctorDetailClose = () => setDoctorDetailOpen(false);
	const [activeDoctor, setActiveDoctor] = useState({});

	return (
		<div>
			<Box
				sx={{
					width: "100%",
					maxWidth: 360,
					bgcolor: "background.paper",
				}}
			>
				<nav aria-label="main doctors list">
					<List>
						{doctors.map((d: any) => (
							<ListItem
								disablePadding
								key={d.name}
								onClick={() => {
									setDoctorDetailOpen(true);
									setActiveDoctor(d);
								}}
							>
								<ListItemButton>
									<ListItemIcon>
										<Person />
									</ListItemIcon>
									<ListItemText primary={d.name} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</nav>
			</Box>
			<DetailDrawer
				open={doctorDetailOpen}
				onClose={handleDoctorDetailClose}
			>
				<DoctorDetail doctor={activeDoctor} />
			</DetailDrawer>
		</div>
	);
}
