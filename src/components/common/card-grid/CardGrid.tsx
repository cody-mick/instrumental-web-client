import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import DataCard from "./DataCard";

export default function CardGrid() {
	return (
		<Grid2 container spacing={2} sx={{ margin: "1rem 2rem" }}>
			<Grid2 xs={12}>
				<DataCard text="Get a Preference Card" navTo="get-prefcard" />
			</Grid2>
			<Grid2 xs={4}>
				<DataCard text="View Cases" navTo="cases" />
			</Grid2>
			<Grid2 xs={4}>
				<DataCard text="View Doctors" navTo="doctors" />
			</Grid2>
			<Grid2 xs={4}>
				<DataCard text="View Instruments" navTo="instruments" />
			</Grid2>
		</Grid2>
	);
}
