import { array, object, string } from "yup";

const errorMessage = "This field cannot be left blank";

export const addCaseInitialValues = {
	caseId: "",
	procedure: "",
	approach: "",
	instrumentation: [],
	equipment: [],
	supplies: [],
	medications: [],
	dressings: [],
	skinPrep: [],
	sutureUsage: [],
	notes: [],
};

const addCaseSchema = object({
	caseId: string().required(errorMessage),
	procedure: string().required(errorMessage),
	approach: string().required(errorMessage),
	instrumentation: array().of(string().required(errorMessage)),
	equipment: array().of(string().required(errorMessage)),
	supplies: array().of(string().required(errorMessage)),
	medications: array().of(string().required(errorMessage)),
	dressings: array().of(string().required(errorMessage)),
	skinPrep: array().of(string().required(errorMessage)),
	sutureUsage: array().of(
		object().shape({
			area: string().required(errorMessage),
			suture: string().required(errorMessage),
		})
	),
	notes: array().of(string()),
});

export default addCaseSchema;
