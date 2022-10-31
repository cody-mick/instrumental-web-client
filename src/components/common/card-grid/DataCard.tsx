import { Card, CardContent, Typography } from "@mui/material";

export default function DataCard() {
	return (
		<div>
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						Quick Action
					</Typography>
					<Typography variant="h5" component="div">
						Select a Case
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
