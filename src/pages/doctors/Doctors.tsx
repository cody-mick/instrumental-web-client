import { collection, getDocs } from "firebase/firestore";
import { useAtom } from "jotai";
import { db } from "../../firebase";
import { doctorsAtom } from "../../utilities/atoms/doctorsAtom";

export default function Doctors() {
	const [doctors, setDoctors] = useAtom(doctorsAtom);
	const doctorsCollectionRef = collection(db, "doctors");
	const getDoctors = async () => {
		const rawData = await getDocs(doctorsCollectionRef);
		const data: any = [];
		rawData.forEach((doc) => {
			data.push(doc.data());
		});
		console.log(data);
	};

	return <div>Doctors</div>;
}
