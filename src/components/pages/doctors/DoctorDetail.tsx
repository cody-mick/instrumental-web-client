import { Divider } from "@mui/material";
import React from "react";

export default function DoctorDetail({ doctor }: any) {
	return (
		<div style={{ width: 450 }}>
			<p>{doctor.name}</p>
			<p>{doctor.specialty}</p>
			<p>{doctor.dominantHand}</p>
			<p>{doctor.gloveSize}</p>
			<p>{doctor?.musicPreference}</p>
		</div>
	);
}
