import {
	Box,
	Button,
	CircularProgress,
	Divider,
	TextField,
	Typography,
} from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import addTraySchema from "../../../utilities/formValidationSchemas/addTraySchema";
import useEditTray from "./useEditTray";

export default function EditTrayFormik({ tray, onSuccess }: any) {
	const { loading, editTraySubmissionHandler } = useEditTray();
	return (
		<div>
			<Formik
				initialValues={tray}
				validationSchema={addTraySchema}
				onSubmit={(values) =>
					editTraySubmissionHandler(values, tray.id, onSuccess)
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
						<Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									width: "550px",
									gap: "15px",
									marginTop: "15px",
									marginBottom: "15px",
								}}>
								<TextField
									label="Tray ID"
									value={values.trayId}
									onChange={handleChange("trayId")}
									onBlur={handleBlur("trayId")}
									error={Boolean(
										errors.trayId && touched.trayId
									)}
									//@ts-ignore
									helperText={
										errors.trayId && touched.trayId
											? errors.trayId
											: ""
									}
								/>
								<TextField
									label="Name"
									value={values.name}
									onChange={handleChange("name")}
									onBlur={handleBlur("name")}
									error={Boolean(errors.name && touched.name)}
									//@ts-ignore
									helperText={
										errors.name && touched.name
											? errors.name
											: ""
									}
								/>
							</Box>
							<Typography>Contents:</Typography>
							<Divider />
							<Typography
								sx={{
									marginBottom: "15px",
								}}>
								Instruments
							</Typography>
							<FieldArray
								name="instruments"
								render={(arrayHelpers) => (
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											gap: "15px",
										}}>
										{values.instruments &&
										values.instruments.length > 0
											? values.instruments.map(
													(ins: any, index: any) => (
														<Box
															key={index}
															sx={{
																display: "flex",
																gap: "15px",
															}}>
															<TextField
																name={`instruments[${index}].code`}
																value={ins.code}
																label="Code"
																onChange={
																	handleChange
																}
															/>
															<TextField
																name={`instruments[${index}].name`}
																value={ins.name}
																label="Name"
																onChange={
																	handleChange
																}
																multiline
															/>
															<TextField
																type="number"
																name={`instruments[${index}].quantity`}
																value={
																	ins.quantity
																}
																label="Quantity"
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
											: null}
										<Button
											type="button"
											onClick={() =>
												arrayHelpers.push({
													code: "",
													name: "",
													quantity: 0,
												})
											}>
											Add Instrument
										</Button>
									</Box>
								)}
							/>
							<Divider />
							<Typography sx={{ marginBottom: "15px" }}>
								Supplies
							</Typography>
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
										values.supplies.length > 0
											? values.supplies.map(
													(sup: any, index: any) => (
														<Box
															key={index}
															sx={{
																display: "flex",
																gap: "15px",
															}}>
															<TextField
																name={`supplies[${index}].code`}
																value={sup.code}
																label="Code"
																onChange={
																	handleChange
																}
															/>
															<TextField
																name={`supplies[${index}].name`}
																value={sup.name}
																label="Name"
																onChange={
																	handleChange
																}
																multiline
															/>
															<TextField
																type="number"
																name={`supplies[${index}].quantity`}
																value={
																	sup.quantity
																}
																label="Quantity"
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
											: null}
										<Button
											type="button"
											onClick={() =>
												arrayHelpers.push({
													code: "",
													name: "",
													quantity: 0,
												})
											}>
											Add Supplies
										</Button>
									</Box>
								)}
							/>
						</Box>
						<Button
							fullWidth
							type="submit"
							onClick={() => handleSubmit}
							variant="contained">
							{loading ? <CircularProgress /> : "Save"}
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
