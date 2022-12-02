import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CardGrid from "../../components/common/card-grid/CardGrid";

export default function Home() {
	return (
		<div className="lineup">
			<div className="page-title">
				<CardGrid />
			</div>
		</div>
	);
}
