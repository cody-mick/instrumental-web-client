import { collection, getDocs } from "firebase/firestore";
import create from "zustand";
import { db } from "../../firebase";

interface DoctorState {
	doctors: [];
	fetchDoctors: () => void;
}

const useDoctorsStore = create<DoctorState>((set) => ({
	doctors: [],
	fetchDoctors: async () => {
		const querySnapshot = await getDocs(collection(db, "doctors"));
		querySnapshot.forEach((doc) => {
			set({ doctors: doc.data() });
		});
	},
}));

export default useDoctorsStore;
