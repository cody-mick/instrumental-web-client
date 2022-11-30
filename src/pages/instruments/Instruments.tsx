import { HealthAndSafety } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import InstrumentsDisplay from "../../components/pages/instruments/InstrumentsDisplay";
import { db } from "../../firebase";

export default function Instruments() {
	const [instruments, setInstruments] = useState();
	useEffect(() => {
		const getInstruments = async () => {
			const querySnapshot = await getDocs(
				collection(db, "instrumentTrays")
			);
			setInstruments(
				//@ts-ignore
				querySnapshot.docs.map((doc) => ({ ...doc.data() }))
			);
		};
		getInstruments();
	}, []);
	return (
		<div>
			<InstrumentsDisplay instruments={instruments} />
			<SpeedDial
				ariaLabel="add instrument tray speed dial"
				sx={{ position: "absolute", bottom: 16, right: 16 }}
				icon={<HealthAndSafety />}
			>
				<SpeedDialAction
					key="add-case"
					icon="+"
					tooltipTitle="Add Case"
					onClick={() => {}}
				/>
			</SpeedDial>
		</div>
	);
}
