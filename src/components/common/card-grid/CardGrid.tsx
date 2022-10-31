import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import DataCard from "./DataCard";

export default function CardGrid() {
	return (
		<Grid2 container spacing={2}>
			<Grid2 xs={6}>
				<DataCard />
			</Grid2>
			<Grid2 xs={6}>
				<DataCard />
			</Grid2>
			<Grid2 xs={6}>
				<DataCard />
			</Grid2>
			<Grid2 xs={6}>
				<DataCard />
			</Grid2>
		</Grid2>
	);
}
