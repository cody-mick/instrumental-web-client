import { createContext, useContext } from "react";

const FirestoreContext = createContext();

const useFirestore = () => {
	const firestoreContext = useContext(FirestoreContext);
};
