import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FieldArray, Form, Formik } from "formik";
import React from "react";
import addCaseSchema from "../../../utilities/formValidationSchemas/addCaseSchema";
import useEditCase from "./useEditCase";

export default function EditCaseFormik({ procedure }: any) {
	const { loading, editCaseSubmissionHandler } = useEditCase();
	return (
		<div>
			<Formik
				initialValues={procedure}
				validationSchema={addCaseSchema}
				onSubmit={(values, caseId) =>
					editCaseSubmissionHandler(values, procedure.id)
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
							<TextField
								label="Case ID"
								value={values.caseId}
								onChange={handleChange("caseId")}
								onBlur={handleBlur("caseId")}
							/>
							<TextField
								label="Procedure"
								value={values.procedure}
								onChange={handleChange("procedure")}
								onBlur={handleBlur("procedure")}
								error={Boolean(
									errors.procedure && touched.procedure
								)}
							/>
							<TextField
								label="Approach"
								value={values.approach}
								onChange={handleChange("approach")}
								onBlur={handleBlur("approach")}
								error={Boolean(
									errors.approach && touched.approach
								)}
							/>
							<Typography>Instrument Trays</Typography>
							<FieldArray
								name="instrumentation"
								render={(arrayHelpers) => (
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											gap: "15px",
										}}>
										{values.instrumentation &&
										values.instrumentation.length > 0 ? (
											values.instrumentation.map(
												(
													instrument: any,
													index: any
												) => (
													<Box
														key={index}
														sx={{
															display: "flex",
															gap: "15px",
														}}>
														<TextField
															fullWidth
															name={`instrumentation[${index}]`}
															label="Tray"
															value={instrument}
															onChange={
																handleChange
															}
															onBlur={handleBlur}
															error={Boolean(
																errors.instrumentation &&
																	touched.instrumentation
															)}
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
											)
										) : (
											<Button
												type="button"
												onClick={() =>
													arrayHelpers.push("")
												}>
												Add a Tray
											</Button>
										)}
										{values.instrumentation &&
										values.instrumentation.length > 0 ? (
											<Button
												type="button"
												onClick={() =>
													arrayHelpers.push("")
												}>
												Add Tray
											</Button>
										) : null}
									</Box>
								)}
							/>
							<Typography>Equipment</Typography>
							<FieldArray
								name="equipment"
								render={(arrayHelpers) => (
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											gap: "15px",
										}}>
										{values.equipment &&
										values.equipment.length > 0 ? (
											values.equipment.map(
												(
													equipment: any,
													index: any
												) => (
													<Box
														key={index}
														sx={{
															display: "flex",
															gap: "15px",
														}}>
														<TextField
															fullWidth
															name={`equipment[${index}]`}
															label="Equipment"
															value={equipment}
															onChange={
																handleChange
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
											)
										) : (
											<Button
												type="button"
												onClick={() =>
													arrayHelpers.push("")
												}>
												Add Equipment
											</Button>
										)}
										{values.equipment &&
										values.equipment.length > 0 ? (
											<Button
												type="button"
												onClick={() =>
													arrayHelpers.push("")
												}>
												Add Equipment
											</Button>
										) : null}
									</Box>
								)}
							/>
							<Typography>Supplies</Typography>
							<FieldArray
								name="supplies"
								render={(arrayHelpers) => (
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											gap: "15px",
										}}>
										{values.supplies &&
										values.supplies.length > 0 ? (
											values.supplies.map(
												(supply: any, index: any) => (
													<Box
														key={index}
														sx={{
															display: "flex",
															gap: "15px",
														}}>
														<TextField
															fullWidth
															name={`supplies[${index}]`}
															label="Supply"
															value={supply}
															onChange={
																handleChange
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
											)
										) : (
											<Button
												type="button"
												onClick={() =>
													arrayHelpers.push("")
												}>
												Add Supplies
											</Button>
										)}
										{values.supplies &&
										values.supplies.length > 0 ? (
											<Button
												type="button"
												onClick={() =>
													arrayHelpers.push("")
												}>
												Add Supplies
											</Button>
										) : null}
									</Box>
								)}
							/>
							<Typography>Medications</Typography>
							<FieldArray
								name="medications"
								render={(arrayHelpers) => (
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											gap: "15px",
										}}>
										{values.medications &&
											values.medications.length > 0 &&
											values.medications.map(
												(
													medication: any,
													index: any
												) => (
													<Box
														key={index}
														sx={{
															display: "flex",
															gap: "15px",
														}}>
														<TextField
															fullWidth
															name={`medications[${index}]`}
															label="Medication"
															value={medication}
															onChange={
																handleChange
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
											Add Medication
										</Button>
									</Box>
								)}
							/>
							<Typography>Dressings</Typography>
							<FieldArray
								name="dressings"
								render={(arrayHelpers) => (
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											gap: "15px",
										}}>
										{values.dressings &&
											values.dressings.length > 0 &&
											values.dressings.map(
												(dressing: any, index: any) => (
													<Box
														key={index}
														sx={{
															display: "flex",
															gap: "15px",
														}}>
														<TextField
															fullWidth
															name={`dressings[${index}]`}
															label="Dressing"
															value={dressing}
															onChange={
																handleChange
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
											Add Dressing
										</Button>
									</Box>
								)}
							/>
							<Typography>Skin Prep</Typography>
							<FieldArray
								name="skinPrep"
								render={(arrayHelpers) => (
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											gap: "15px",
										}}>
										{values.skinPrep &&
											values.skinPrep.length > 0 &&
											values.skinPrep.map(
												(skinPrep: any, index: any) => (
													<Box
														key={index}
														sx={{
															display: "flex",
															gap: "15px",
														}}>
														<TextField
															fullWidth
															name={`skinPrep[${index}]`}
															label="Prep Item"
															value={skinPrep}
															onChange={
																handleChange
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
											Add Skin Prep
										</Button>
									</Box>
								)}
							/>
							<Typography>Suture Usage</Typography>
							<FieldArray
								name="sutureUsage"
								render={(arrayHelpers) => (
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											gap: "15px",
										}}>
										{values.sutureUsage.map(
											(su: any, index: any) => (
												<Box
													key={index}
													sx={{
														display: "flex",
														gap: "15px",
													}}>
													<TextField
														fullWidth
														name={`sutureUsage[${index}].area`}
														value={su.area}
														label="Area"
														onChange={handleChange}
													/>
													<TextField
														fullWidth
														name={`sutureUsage[${index}].suture`}
														value={su.suture}
														label="Suture"
														onChange={handleChange}
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
												arrayHelpers.push({
													area: "",
													suture: "",
												})
											}>
											Add Suture Usage
										</Button>
									</Box>
								)}
							/>
							<Typography>Notes</Typography>
							<FieldArray
								name="notes"
								render={(arrayHelpers) => (
									<Box
										sx={{
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
															gap: "15px",
														}}>
														<TextField
															fullWidth
															name={`notes[${index}]`}
															label="Note"
															value={note}
															onChange={
																handleChange
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
											Add Notes
										</Button>
									</Box>
								)}
							/>
							<Button
								type="submit"
								variant="contained"
								onClick={() => handleSubmit()}
								disabled={loading}>
								Submit
							</Button>
						</Box>
						{loading ? <CircularProgress /> : null}
					</Form>
				)}
			</Formik>
		</div>
	);
}
