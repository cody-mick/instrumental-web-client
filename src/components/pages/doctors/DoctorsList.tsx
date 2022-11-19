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
import React from "react";

export default function DoctorsList({ doctors }: any) {
	return (
		<Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
			<nav aria-label="main doctors list">
				<List>
					{doctors.map((d: any) => (
						<ListItem disablePadding key={d.name}>
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
	);
}
