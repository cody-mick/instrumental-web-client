import { array, number, object, string } from "yup";

const errorMessage = "This field cannot be left blank";

export const addTrayInitialValues = {
	trayId: "",
	name: "",
	contents: [],
};

const addTraySchema = object({
	trayId: string(),
	name: string(),
	instruments: array().of(
		object().shape({
			code: string(),
			name: string(),
			quantity: number(),
		})
	),
	supplies: array().of(
		object().shape({
			code: string(),
			name: string(),
			quantity: number(),
		})
	),
});

export default addTraySchema;
