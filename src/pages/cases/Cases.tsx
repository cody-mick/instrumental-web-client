import { useAtom } from "jotai";
import CaseDisplay from "../../components/pages/cases/CasesDisplay";
import { casesAtom } from "../../utilities/atoms/casesAtom";

export default function Cases() {
	const cases = useAtom(casesAtom);

	console.log(cases);

	return (
		<div>
			<CaseDisplay cases={cases[0]} />
		</div>
	);
}
