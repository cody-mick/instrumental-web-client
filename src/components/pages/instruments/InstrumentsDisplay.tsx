import { MoreVert } from "@mui/icons-material";
import {
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function InstrumentsDisplay({ instruments }: any) {
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
								<IconButton>
									<MoreVert />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
