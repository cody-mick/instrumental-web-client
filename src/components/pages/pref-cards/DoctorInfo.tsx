import { Grid, Paper, Typography } from "@mui/material";

export default function DoctorInfo({ doctor }: any) {
	return (
		<Paper
			sx={{
				margin: "auto",
				marginTop: "30px",
				width: 700,
				padding: "15px",
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography>
						Doctor: {doctor.firstName} {doctor.lastName}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography>Specialty: {doctor.specialty}</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography>
						Dominant Hand: {doctor.dominantHand}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography>Glove Size: {doctor.gloveSize}</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography>
						Music Preference:{" "}
						{doctor.musicPreference ? doctor.musicPreference : ""}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography>Notes:</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
}
