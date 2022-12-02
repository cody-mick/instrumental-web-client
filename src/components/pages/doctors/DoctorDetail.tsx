import { Paper } from "@mui/material";
import DoctorDetailData from "./DoctorDetailData";
import NoDoctorSelected from "./NoDoctorSelected";

export default function DoctorDetail({ doctor }: any) {
	return (
		<Paper
			sx={{
				maxHeight: "550px",
				width: "300px",
				marginTop: "15px",
				padding: "25px",
			}}
		>
			{Object.keys(doctor).length === 0 ? (
				<NoDoctorSelected />
			) : (
				<DoctorDetailData doctor={doctor} />
			)}
		</Paper>
	);
}
