import { HealthAndSafety } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import InstrumentsDisplay from "../../components/pages/instruments/InstrumentsDisplay";
import { db } from "../../firebase";
import { instrumentsAtom } from "../../utilities/atoms/instrumentsAtom";

export default function Instruments() {
	const instruments = useAtom(instrumentsAtom);
	return (
		<div>
			<InstrumentsDisplay instruments={instruments[0]} />
			<SpeedDial
				ariaLabel="add instrument tray speed dial"
				sx={{ position: "absolute", bottom: 16, right: 16 }}
				icon={<HealthAndSafety />}
			>
				<SpeedDialAction
					key="add-instrument-set"
					icon="+"
					tooltipTitle="Add Tray"
					onClick={() => {}}
				/>
			</SpeedDial>
		</div>
	);
}
