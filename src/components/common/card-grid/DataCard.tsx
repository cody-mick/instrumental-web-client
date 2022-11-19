import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function DataCard({ text, navTo }: any) {
	return (
		<div>
			<Link to={`/${navTo}`} style={{ textDecoration: "none" }}>
				<Card sx={{ minWidth: 275, "&:hover": { cursor: "pointer" } }}>
					<CardContent>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom>
							Quick Action
						</Typography>
						<Typography variant="h5" component="div">
							{text}
						</Typography>
					</CardContent>
				</Card>
			</Link>
		</div>
	);
}
