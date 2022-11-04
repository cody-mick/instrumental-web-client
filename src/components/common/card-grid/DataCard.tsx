import { Card, CardContent, Typography } from "@mui/material";

export default function DataCard({ text }: any) {
	return (
		<div>
			<Card sx={{ minWidth: 275, "&:hover": { cursor: "pointer" } }}>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						Quick Action
					</Typography>
					<Typography variant="h5" component="div">
						{text}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
