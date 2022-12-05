import { array, object, string } from "yup";

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
	caseId: string().required(),
	procedure: string().required(),
	approach: string().required(),
	instrumentation: array().of(string()).required(),
	equipment: array().of(string()),
	supplies: array().of(string()),
	medications: array().of(string()),
	dressings: array().of(string()),
	skinPrep: array().of(string()),
	sutureUsage: array().of(
		object().shape({
			area: string(),
			suture: string(),
		})
	),
	notes: array().of(string()),
});

export default addCaseSchema;
