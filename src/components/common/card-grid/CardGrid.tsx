import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import DataCard from "./DataCard";

export default function CardGrid() {
	return (
		<Grid2 container spacing={2} sx={{ margin: "1rem 2rem" }}>
			<Grid2 xs={6}>
				<DataCard text="Select a Case" />
			</Grid2>
			<Grid2 xs={6}>
				<DataCard text="Doctors" />
			</Grid2>
			<Grid2 xs={6}>
				<DataCard text="Instrumentation" />
			</Grid2>
			<Grid2 xs={6}>
				<DataCard text="Supplies" />
			</Grid2>
		</Grid2>
	);
}
