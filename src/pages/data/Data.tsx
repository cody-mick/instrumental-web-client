import { collection, getDocs } from "@firebase/firestore";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doctorsAtom } from "../../utilities/atoms/doctorsAtom";

export default function Data() {
	// const [doctors, setDoctors] = useState([]);
	// const doctorsCollectionRef = collection(db, "doctors");
	const doctors = useAtom(doctorsAtom);

	console.log(doctors);

	// useEffect(() => {
	//   const getDoctors = async () => {
	//     const rawData = await getDocs(doctorsCollectionRef);
	//     const data = [];
	//     rawData.forEach((doc) => {
	//       data.push(doc.data());
	//     });
	//     console.log(data);
	//   };

	//   getDoctors();
	// }, []);

	return <div>Data</div>;
}
