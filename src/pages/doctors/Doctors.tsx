import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { collection, getDocs } from "firebase/firestore";

import { useEffect, useState } from "react";

import AddDoctorModal from "../../components/pages/doctors/AddDoctorModal";
import { db } from "../../firebase";
import SimpleSnackBar from "../../components/common/notifications/SimpleSnackBar";
import DoctorsList from "../../components/pages/doctors/DoctorsList";

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

	const handleModalClose = () => setAddDoctorOpen(false);

	return (
		<div>
			<DoctorsList doctors={doctors} />
			{addDoctorOpen ? (
				<AddDoctorModal open={addDoctorOpen} handleClose={handleModalClose} />
			) : null}
			<SpeedDial
				ariaLabel="add doctor speed dial"
				sx={{ position: "absolute", bottom: 16, right: 16 }}
				icon={<HealthAndSafetyIcon />}>
				<SpeedDialAction
					key="add-doctor"
					icon="+"
					tooltipTitle="Add Doctor"
					onClick={() => setAddDoctorOpen(true)}
				/>
			</SpeedDial>
			<SimpleSnackBar />
		</div>
	);
}
