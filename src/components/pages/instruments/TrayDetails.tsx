import {
	Card,
	Divider,
	Grid,
	Paper,
	SpeedDial,
	SpeedDialAction,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useAtom } from "jotai";
import React from "react";
import { useParams } from "react-router-dom";
import { instrumentsAtom } from "../../../utilities/atoms/instrumentsAtom";
import TrayContents from "./TrayContents";

export default function TrayDetails() {
	const instruments = useAtom(instrumentsAtom);
	let params = useParams();
	let tray = instruments[0].find((ins: any) => ins.trayId === params.trayId);
	return (
		<Box sx={{ width: "75%", margin: "auto", marginTop: "15px" }}>
			<Card sx={{ padding: "15px" }}>
				<Grid
					container
					direction="row"
					alignItems="center"
					justifyContent="space-around">
					<Grid item xs={6}>
						<Typography>ID: {tray.trayId}</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography>Name: {tray.name}</Typography>
					</Grid>
				</Grid>
				<Divider />
				<TrayContents
					instruments={tray.instruments}
					supplies={tray.supplies}
				/>
			</Card>
		</Box>
	);
}
