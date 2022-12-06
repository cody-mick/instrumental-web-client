import { array, number, object, string } from "yup";

export const addDoctorInitialValues = {
	firstName: "",
	lastName: "",
	specialty: "",
	dominantHand: "",
	gloveSize: "",
};

const addDoctorSchema = object({
	firstName: string().required("This field cannot be blank"),
	lastName: string().required("This field cannot be blank"),
	specialty: string().required("This field cannot be blank"),
	dominantHand: string().required("This field cannot be blank"),
	gloveSize: number(),
	musicPreference: string(),
	notes: array().of(string()),
});

export default addDoctorSchema;
