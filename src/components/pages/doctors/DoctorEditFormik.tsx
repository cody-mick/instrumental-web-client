import { Button, CircularProgress, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { FieldArray, Form, Formik } from "formik";
import React from "react";
import addDoctorSchema from "../../../utilities/formValidationSchemas/addDoctorSchema";
import useEditDoctor from "./useEditDoctor";

export default function DoctorEditFormik({ doctor, onSuccess }: any) {
	const { loading, editDoctorSubmissionHandler } = useEditDoctor();
	return (
		<div>
			<Formik
				initialValues={doctor}
				validationSchema={addDoctorSchema}
				onSubmit={(values) =>
					editDoctorSubmissionHandler(values, doctor.id, onSuccess)
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
								margin: "15px",
							}}>
							<TextField
								label="First Name"
								value={values.firstName}
								onChange={handleChange("firstName")}
								onBlur={handleBlur("firstName")}
								error={Boolean(
									errors.firstName && touched.firstName
								)}
								//@ts-ignore
								helperText={
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
								error={Boolean(
									errors.lastName && touched.lastName
								)}
								//@ts-ignore
								helperText={
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
								error={Boolean(
									errors.specialty && touched.specialty
								)}
								//@ts-ignore
								helperText={
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
								error={Boolean(
									errors.dominantHand && touched.dominantHand
								)}
								//@ts-ignore
								helperText={
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
								error={Boolean(
									errors.gloveSize && touched.gloveSize
								)}
								//@ts-ignore
								helperText={
									errors.gloveSize && touched.gloveSize
										? errors.gloveSize
										: ""
								}
							/>
							<TextField
								label="Music Preference"
								value={values.musicPreference}
								onChange={handleChange("musicPreference")}
								onBlur={handleBlur("musicPreference")}
							/>
							<FieldArray
								name="notes"
								render={(arrayHelpers) => (
									<Box
										sx={{
											marginTop: "15px",
											marginBottom: "15px",
											display: "flex",
											flexDirection: "column",
											gap: "15px",
										}}>
										{values.notes &&
											values.notes.length > 0 &&
											values.notes.map(
												(note: any, index: any) => (
													<Box
														key={index}
														sx={{
															display: "flex",
														}}>
														<TextField
															name={`notes[${index}]`}
															label="Note"
															value={note}
															onChange={
																handleChange
															}
															onBlur={handleBlur}
															error={Boolean(
																errors.notes &&
																	touched.notes
															)}
															//@ts-ignore
															helperText={
																errors.notes &&
																touched.notes
																	? errors.notes
																	: ""
															}
														/>
														<Button
															type="button"
															onClick={() =>
																arrayHelpers.remove(
																	index
																)
															}>
															Remove
														</Button>
													</Box>
												)
											)}
										<Button
											type="button"
											onClick={() =>
												arrayHelpers.push("")
											}>
											Add Note
										</Button>
									</Box>
								)}
							/>
						</Box>
						<Button
							fullWidth
							type="submit"
							variant="contained"
							onClick={() => handleSubmit}>
							{loading ? <CircularProgress /> : "Save Changes"}
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
