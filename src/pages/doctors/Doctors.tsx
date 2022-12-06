import { SpeedDial, SpeedDialAction } from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { useState } from "react";
import AddDoctorModal from "../../components/pages/doctors/AddDoctorModal";
import SimpleSnackBar from "../../components/common/notifications/SimpleSnackBar";
import DoctorsList from "../../components/pages/doctors/DoctorsList";
import DoctorDetail from "../../components/pages/doctors/DoctorDetail";
import { useAtom } from "jotai";
import { doctorsAtom } from "../../utilities/atoms/doctorsAtom";

export default function Doctors() {
	const doctors = useAtom(doctorsAtom);
	const [addDoctorOpen, setAddDoctorOpen] = useState(false);
	const [activeDoctor, setActiveDoctor] = useState({});
	const [addSuccess, setAddSuccess] = useState(false);

	const onAddSuccess = () => {
		setAddSuccess(false);
		setAddDoctorOpen(false);
	};

	const handleModalClose = () => setAddDoctorOpen(false);
	const setDoctor = (doctor: any) => setActiveDoctor(doctor);

	return (
		<div className="doctors-page">
			<DoctorsList doctors={doctors[0]} setDoctor={setDoctor} />
			<DoctorDetail doctor={activeDoctor} />
			{addDoctorOpen ? (
				<AddDoctorModal
					open={addDoctorOpen}
					handleClose={handleModalClose}
					onSuccess={onAddSuccess}
				/>
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
			<SimpleSnackBar
				open={addSuccess}
				handleClose={() => setAddSuccess(false)}
				message="Doctor added successfully!"
			/>
		</div>
	);
}
