import { Search } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import {
	Box,
	InputAdornment,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	OutlinedInput,
} from "@mui/material";

export default function DoctorsList({ doctors, setDoctor }: any) {
	return (
		<div>
			<Box
				sx={{
					width: "100%",
					height: "100%",
					maxWidth: 360,
					bgcolor: "background.paper",
					marginTop: "5px",
					padding: "25px",
				}}
			>
				<OutlinedInput
					placeholder="Search..."
					endAdornment={
						<InputAdornment position="end">
							<Search />
						</InputAdornment>
					}
				/>
				<nav aria-label="main doctors list">
					<List>
						{doctors.map((d: any) => (
							<ListItem
								disablePadding
								key={d.name}
								onClick={() => setDoctor(d)}
							>
								<ListItemButton>
									<ListItemIcon>
										<Person />
									</ListItemIcon>
									<ListItemText
										primary={`${d.lastName}, ${d.firstName}`}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</nav>
			</Box>
		</div>
	);
}
