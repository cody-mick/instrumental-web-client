import { array, number, object, string } from "yup";

export const addDoctorInitialValues = {
	firstName: "",
	lastName: "",
	specialty: "",
	dominantHand: "",
	gloveSize: "",
};

const addDoctorSchema = object({
	firstName: string().required(),
	lastName: string().required(),
	specialty: string().required(),
	dominantHand: string().required(),
	gloveSize: number(),
	// musicPreference: string(),
	// notes: array().of(string()),
});

export default addDoctorSchema;
