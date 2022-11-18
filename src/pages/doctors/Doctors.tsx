import {
	Button,
	Card,
	Paper,
	SpeedDial,
	SpeedDialAction,
	SpeedDialIcon,
	TextField,
} from "@mui/material";
import {
	addDoc,
	collection,
	getDoc,
	getDocs,
	setDoc,
} from "firebase/firestore";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import AddDoctorForm from "../../components/pages/doctors/AddDoctorForm";
import AddDoctorModal from "../../components/pages/doctors/AddDoctorModal";
import { db } from "../../firebase";
import { doctorsAtom } from "../../utilities/atoms/doctorsAtom";
import useDoctorsStore from "../../utilities/state-hooks/doctors";

interface Doctor {
	doctorName: string;
	specialty: string;
	gloveSize?: number;
	dominantHand?: string;
}

export default function Doctors() {
	const [doctors, setDoctors] = useState([]);
	const [addDoctorOpen, setAddDoctorOpen] = useState(false);

	useEffect(() => {
		const getDoctors = async () => {
			const querySnapshot = await getDocs(collection(db, "doctors"));
			//@ts-ignore
			setDoctors(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
		};
		getDoctors();
	}, []);

	console.log(doctors);
	console.log(addDoctorOpen);

	return (
		<div>
			{addDoctorOpen ? <AddDoctorModal /> : null}
			<SpeedDial
				ariaLabel="add doctor speed dial"
				sx={{ position: "absolute", bottom: 16, right: 16 }}
				icon={<SpeedDialIcon />}>
				<SpeedDialAction
					key="add-doctor"
					icon="+"
					tooltipTitle="Add Doctor"
					onClick={() => setAddDoctorOpen(!addDoctorOpen)}
				/>
			</SpeedDial>
		</div>
	);
}
