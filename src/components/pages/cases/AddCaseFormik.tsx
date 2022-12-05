import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FieldArray, Form, Formik } from "formik";
import { ArraySchema } from "yup";
import addCaseSchema, {
	addCaseInitialValues,
} from "../../../utilities/formValidationSchemas/addCaseSchema";
import MultiAdd from "../../common/form-inputs/MultiAdd";
import useAddCaseFormSubmission from "./useAddCaseFormSubmission";

export default function AddCaseFormik() {
	const { addCaseSubmissionHandler, loading } = useAddCaseFormSubmission();
	return (
		<div>
			<Formik
				initialValues={addCaseInitialValues}
				validationSchema={addCaseSchema}
				onSubmit={addCaseSubmissionHandler}>
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
								error={Boolean(errors.caseId) && touched.caseId}
								helperText={
									errors.caseId && touched.caseId
										? errors.caseId
										: ""
								}
							/>
							<TextField
								label="Procedure"
								value={values.procedure}
								onChange={handleChange("procedure")}
								onBlur={handleBlur("procedure")}
								error={Boolean(
									errors.procedure && touched.procedure
								)}
								helperText={
									errors.procedure && touched.procedure
										? errors.procedure
										: ""
								}
							/>
							<TextField
								label="Approach"
								value={values.approach}
								onChange={handleChange("approach")}
								onBlur={handleBlur("approach")}
								error={Boolean(
									errors.approach && touched.approach
								)}
								helperText={
									errors.approach && touched.approach
										? errors.approach
										: ""
								}
							/>
							<Typography>Instrument Trays</Typography>
							<FieldArray
								name="instrumentation"
								render={(arrayHelpers) => (
									<Box>
										{values.instrumentation &&
										values.instrumentation.length > 0 ? (
											values.instrumentation.map(
												(instrument, index) => (
													<Box key={index}>
														<TextField
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
															helperText={
																errors.instrumentation &&
																touched.instrumentation
																	? errors
																			.instrumentation[
																			index
																	  ]
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
									<Box>
										{values.equipment &&
										values.equipment.length > 0 ? (
											values.equipment.map(
												(equipment, index) => (
													<Box key={index}>
														<TextField
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
									<Box>
										{values.supplies &&
										values.supplies.length > 0 ? (
											values.supplies.map(
												(supply, index) => (
													<Box key={index}>
														<TextField
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
									<Box>
										{values.medications &&
											values.medications.length > 0 &&
											values.medications.map(
												(medication, index) => (
													<Box key={index}>
														<TextField
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
									<Box>
										{values.dressings &&
											values.dressings.length > 0 &&
											values.dressings.map(
												(dressing, index) => (
													<Box key={index}>
														<TextField
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
									<Box>
										{values.skinPrep &&
											values.skinPrep.length > 0 &&
											values.skinPrep.map(
												(skinPrep, index) => (
													<Box key={index}>
														<TextField
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
									<Box>
										{values.sutureUsage.map(
											(su: any, index) => (
												<Box key={index}>
													<TextField
														name={`sutureUsage[${index}].area`}
														value={su.area}
														label="Area"
														onChange={handleChange}
													/>
													<TextField
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
									<Box>
										{values.notes &&
											values.notes.length > 0 &&
											values.notes.map((note, index) => (
												<Box key={index}>
													<TextField
														name={`notes[${index}]`}
														label="Note"
														value={note}
														onChange={handleChange}
														multiline
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
											))}
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
								onClick={() => handleSubmit}
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
