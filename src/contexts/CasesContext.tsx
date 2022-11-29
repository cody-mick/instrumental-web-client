import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";

//@ts-ignore
const CasesContext = createContext();

export const CasesProvider = ({ children }: any) => {
	const [cases, setCases] = useState([] || null);

	useEffect(() => {
		const getCases = async () => {
			const querySnapshot = await getDocs(collection(db, "cases"));
			//@ts-ignore
			setCases(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
		};
		return () => {
			getCases();
		};
	}, []);

	return (
		<CasesContext.Provider
			//@ts-ignore
			value={{ cases: cases, setCases: (cases) => setCases(cases) }}
		>
			{children}
		</CasesContext.Provider>
	);
};

export default CasesProvider;
export { CasesContext };
