import { Paper } from "@mui/material";
import DoctorDetailData from "./DoctorDetailData";
import NoDoctorSelected from "./NoDoctorSelected";

export default function DoctorDetail({ doctor }: any) {
	return (
		<Paper
			sx={{
				height: "350px",
				width: "300px",
				marginTop: "15px",
				padding: "25px",
			}}
		>
			{!doctor ? (
				<NoDoctorSelected />
			) : (
				<DoctorDetailData doctor={doctor} />
			)}
		</Paper>
	);
}
