import { Card, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useAtom } from "jotai";
import React from "react";
import { useParams } from "react-router-dom";
import { instrumentsAtom } from "../../../utilities/atoms/instrumentsAtom";

export default function TrayDetails() {
	const instruments = useAtom(instrumentsAtom);
	let params = useParams();
	let tray = instruments[0].find((ins: any) => ins.trayId === params.trayId);
	console.log("TRAY: ", tray);
	return <Box>{tray.name}</Box>;
}
