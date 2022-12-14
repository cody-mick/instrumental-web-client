import {
	Button,
	CircularProgress,
	FormControl,
	TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import addDoctorSchema, {
	addDoctorInitialValues,
} from "../../../utilities/formValidationSchemas/addDoctorSchema";
import useAddDoctorSubmission from "./useAddDoctorSubmission";

export default function AddDoctorFormik({ onSuccess }: any) {
	const { addDoctorSubmissionHandler, loading } = useAddDoctorSubmission();
	return (
		<div>
			<Formik
				initialValues={addDoctorInitialValues}
				validationSchema={addDoctorSchema}
				onSubmit={(values) =>
					addDoctorSubmissionHandler(values, onSuccess)
				}>
				{({
					handleSubmit,
					handleChange,
					handleBlur,
					values,
					errors,
					touched,
				}) => (
					<Form>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "15px",
							}}>
							<FormControl>
								<TextField
									label="First Name"
									value={values.firstName}
									onChange={handleChange("firstName")}
									onBlur={handleBlur("firstName")}
									// @ts-ignore
									error={
										errors.firstName && touched.firstName
									}
									helperText={
										errors.firstName && touched.firstName
											? errors.firstName
											: ""
									}
								/>
							</FormControl>
							<FormControl>
								<TextField
									label="Last Name"
									value={values.lastName}
									onChange={handleChange("lastName")}
									onBlur={handleBlur("lastName")}
									// @ts-ignore
									error={errors.lastName && touched.lastName}
									helperText={
										errors.lastName && touched.lastName
											? errors.lastName
											: ""
									}
								/>
							</FormControl>
							<FormControl>
								<TextField
									label="Specialty"
									value={values.specialty}
									onChange={handleChange("specialty")}
									onBlur={handleBlur("specialty")}
									// @ts-ignore
									error={
										errors.specialty && touched.specialty
									}
									helperText={
										errors.specialty && touched.specialty
											? errors.specialty
											: ""
									}
								/>
							</FormControl>
							<FormControl>
								<TextField
									label="Dominant Hand"
									value={values.dominantHand}
									onChange={handleChange("dominantHand")}
									onBlur={handleBlur("dominantHand")}
									// @ts-ignore
									error={
										errors.dominantHand &&
										touched.dominantHand
									}
									helperText={
										errors.dominantHand &&
										touched.dominantHand
											? errors.dominantHand
											: ""
									}
								/>
							</FormControl>
							<FormControl>
								<TextField
									label="Glove Size"
									value={values.gloveSize}
									onChange={handleChange("gloveSize")}
									onBlur={handleBlur("gloveSize")}
									// @ts-ignore
									error={
										errors.gloveSize && touched.gloveSize
									}
									helperText={
										errors.gloveSize && touched.gloveSize
											? errors.gloveSize
											: ""
									}
								/>
							</FormControl>
							<Button
								type="submit"
								onClick={() => handleSubmit}
								disabled={loading}>
								{loading ? <CircularProgress /> : "Add Doctor"}
							</Button>
						</Box>
					</Form>
				)}
			</Formik>
		</div>
	);
}
