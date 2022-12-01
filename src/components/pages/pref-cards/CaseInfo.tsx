import { Divider, Grid, Paper, Typography } from "@mui/material";

export default function CaseInfo() {
	return (
		<Paper
			sx={{
				margin: "auto",
				marginTop: "15px",
				width: 700,
				padding: "15px",
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography>Case ID:</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography>Case:</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography>Approach:</Typography>
				</Grid>
				<Grid item xs={12}>
					Notes:
				</Grid>
				<Grid item xs={12}>
					Some sample case notes
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Typography>Equipment</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Typography>Instruments</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Typography>Supplies</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Typography>Suture</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Typography>Skin Prep</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Typography>Dressings</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Typography>Medication</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
}
