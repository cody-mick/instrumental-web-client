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
		</div>
	);
}
