import { useContext } from "react";
import CaseDisplay from "../../components/pages/cases/CasesDisplay";
import { CasesContext } from "../../contexts/CasesContext";

export default function Cases() {
	//@ts-ignore
	const { cases, setCases } = useContext(CasesContext);

	console.log(cases);

	return (
		<div>
			<CaseDisplay cases={cases} />
		</div>
	);
}
