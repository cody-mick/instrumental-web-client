import { HealthAndSafety } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import SimpleSnackBar from "../../components/common/notifications/SimpleSnackBar";
import AddTrayModal from "../../components/pages/instruments/AddTrayModal";
import InstrumentsDisplay from "../../components/pages/instruments/InstrumentsDisplay";
import { db } from "../../firebase";
import { instrumentsAtom } from "../../utilities/atoms/instrumentsAtom";

export default function Instruments() {
	const instruments = useAtom(instrumentsAtom);
	const [addTray, setAddTray] = useState(false);
	const [addSuccess, setAddSuccess] = useState(false);
	const handleAddModalClose = () => {
		setAddTray(false);
	};
	const onAddSuccess = () => {
		setAddTray(false);
		setAddSuccess(true);
	};
	return (
		<div>
			<InstrumentsDisplay instruments={instruments[0]} />
			{addTray ? (
				<AddTrayModal
					open={addTray}
					handleClose={handleAddModalClose}
					onSuccess={onAddSuccess}
				/>
			) : null}
			<SimpleSnackBar
				open={addSuccess}
				handleClose={() => setAddSuccess(false)}
				message="Tray created successfully!"
			/>
			<SpeedDial
				ariaLabel="add instrument tray speed dial"
				sx={{ position: "absolute", bottom: 16, right: 16 }}
				icon={<HealthAndSafety />}>
				<SpeedDialAction
					key="add-instrument-set"
					icon="+"
					tooltipTitle="Add Tray"
					onClick={() => setAddTray(true)}
				/>
			</SpeedDial>
		</div>
	);
}
