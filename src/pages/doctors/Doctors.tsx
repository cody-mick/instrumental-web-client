import { Button } from "@mui/material";
import {
	addDoc,
	collection,
	getDoc,
	getDocs,
	setDoc,
} from "firebase/firestore";
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
	useEffect(() => {
		const getDoctors = async () => {
			const querySnapshot = await getDocs(collection(db, "doctors"));
			querySnapshot.forEach((doc) => {
				// doctors.push(doc.data());
			});
		};
		getDoctors();
	}, []);

	const addDoctor = async () => {
		try {
			const docRef = await addDoc(collection(db, "doctors"), {
				name: "Ashley Mickelsen",
				dominantHand: "right",
				gloveSize: 8,
				specialty: "neurosurgery",
			});
			console.log("Doctor created with ID: ", docRef.id);
		} catch (e) {
			console.error("Could not complete request: ", e);
		}
	};

	return (
		<div>
			<Button variant="contained" onClick={addDoctor}>
				Add Doctor
			</Button>
		</div>
	);
}
