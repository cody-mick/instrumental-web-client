import CaseInfo from "./CaseInfo";
import DoctorInfo from "./DoctorInfo";

export default function PreferenceCard({ doctor, procedure }: any) {
	return (
		<div>
			<DoctorInfo doctor={doctor} />
			<CaseInfo caseId={procedure.id} />
		</div>
	);
}
