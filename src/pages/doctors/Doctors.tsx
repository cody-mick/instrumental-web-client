import { useAtom } from "jotai";
import React from "react";
import { doctorsAtom } from "../../utilities/atoms/doctorsAtom";

export default function Doctors() {
	const doctors = useAtom(doctorsAtom);
	console.log(doctors);
	return <div>Doctors</div>;
}
