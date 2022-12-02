import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

export default function InstrumentsDisplay({ instruments }: any) {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Tray ID</TableCell>
						<TableCell>Name</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{instruments.map((ins: any) => (
						<TableRow>
							<TableCell>{ins.trayId}</TableCell>
							<TableCell>{ins.name}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
