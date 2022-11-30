import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CardGrid from "../../components/common/card-grid/CardGrid";

export default function Home() {
	return (
		<div className="lineup">
			<div className="page-title">
				<Card sx={{ width: 400, marginTop: "16px" }}>
					<CardContent>
						<Link to="/prefcards">
							<Typography>Get a Preference Card</Typography>
						</Link>
					</CardContent>
				</Card>
				<CardGrid />
			</div>
		</div>
	);
}
