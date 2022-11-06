import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import DataCard from "./DataCard";

export default function CardGrid() {
	return (
		<Grid2 container spacing={2} sx={{ margin: "1rem 2rem" }}>
			<Grid2 xs={6}>
				<DataCard text="Select a Case" navTo="cases" />
			</Grid2>
			<Grid2 xs={6}>
				<DataCard text="Doctors" navTo="doctors" />
			</Grid2>
			<Grid2 xs={6}>
				<DataCard text="Instrumentation" navTo="instruments" />
			</Grid2>
			<Grid2 xs={6}>
				<DataCard text="Supplies" navTo="supplies" />
			</Grid2>
		</Grid2>
	);
}
