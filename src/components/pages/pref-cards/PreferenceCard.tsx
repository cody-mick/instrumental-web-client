import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import { casesAtom } from "../../../utilities/atoms/casesAtom";
import { doctorsAtom } from "../../../utilities/atoms/doctorsAtom";
import CaseInfo from "./CaseInfo";
import DoctorInfo from "./DoctorInfo";

export default function PreferenceCard() {
	const doctors = useAtom(doctorsAtom);
	const cases = useAtom(casesAtom);
	let params = useParams();
	const doctor = doctors[0].find((d: any) => d.id === params.doctorId);
	const procedure = cases[0].find((c: any) => c.caseId === params.caseId);

	return (
		<div>
			<DoctorInfo doctor={doctor} />
			<CaseInfo procedure={procedure} />
		</div>
	);
}
