import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import addDoctorSchema, {
	addDoctorInitialValues,
} from "../../../utilities/formValidationSchemas/addDoctorSchema";

export default function AddDoctorFormik() {
	return (
		<div>
			<Formik
				initialValues={addDoctorInitialValues}
				validationSchema={addDoctorSchema}
				onSubmit={() => {}}>
				{({
					handleSubmit,
					handleChange,
					handleBlur,
					values,
					errors,
					touched,
				}) => (
					<Box>
						<Typography>Add a Doctor</Typography>
						<TextField
							label="First Name"
							value={values.firstName}
							onChange={handleChange("firstName")}
							onBlur={handleBlur("firstName")}
							// @ts-ignore
							error={
								errors.firstName && touched.firstName
									? errors.firstName
									: ""
							}
						/>
						<TextField
							label="Last Name"
							value={values.lastName}
							onChange={handleChange("lastName")}
							onBlur={handleBlur("lastName")}
							// @ts-ignore
							error={
								errors.lastName && touched.lastName
									? errors.lastName
									: ""
							}
						/>
						<TextField
							label="Specialty"
							value={values.specialty}
							onChange={handleChange("specialty")}
							onBlur={handleBlur("specialty")}
							// @ts-ignore
							error={
								errors.specialty && touched.specialty
									? errors.specialty
									: ""
							}
						/>
						<TextField
							label="Dominant Hand"
							value={values.dominantHand}
							onChange={handleChange("dominantHand")}
							onBlur={handleBlur("dominantHand")}
							// @ts-ignore
							error={
								errors.dominantHand && touched.dominantHand
									? errors.dominantHand
									: ""
							}
						/>
						<TextField
							label="Glove Size"
							value={values.gloveSize}
							onChange={handleChange("gloveSize")}
							onBlur={handleBlur("gloveSize")}
							// @ts-ignore
							error={
								errors.gloveSize && touched.gloveSize
									? errors.gloveSize
									: ""
							}
						/>
						<Button onClick={() => handleSubmit}>Submit</Button>
					</Box>
				)}
			</Formik>
		</div>
	);
}
