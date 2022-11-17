import { Button } from "@mui/material";
import { collection, getDoc, getDocs, setDoc } from "firebase/firestore";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
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
	const [doctors, setDoctors] = useState<Doctor[]>([]);
	useEffect(() => {
		const getDoctors = async () => {
			const querySnapshot = await getDocs(collection(db, "doctors"));
			querySnapshot.forEach((doc) => {
				console.log(doc.data());
			});
		};
		getDoctors();
	}, []);

	console.log(doctors);

	// const doctors = useDoctorsStore((state) => state.doctors);
	// console.log("DOCTORS: ", doctors);

	return (
		<div>
			<Button variant="contained">Add Doctor</Button>
		</div>
	);
}
