import {
	Button,
	CircularProgress,
	Divider,
	TextField,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { FieldArray, Form, Formik, validateYupSchema } from "formik";
import addTraySchema, {
	addTrayInitialValues,
} from "../../../utilities/formValidationSchemas/addTraySchema";
import useAddTray from "./useAddTray";

export default function AddTrayFormik({ onSuccess }: any) {
	const { loading, addTraySubmissionHandler } = useAddTray();

	return (
		<div>
			<Formik
				initialValues={addTrayInitialValues}
				validationSchema={addTraySchema}
				onSubmit={(values) =>
					addTraySubmissionHandler(values, onSuccess)
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
									error={
										Boolean(errors.trayId) && touched.trayId
									}
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
									error={Boolean(errors.name) && touched.name}
									helperText={
										errors.name && touched.name
											? errors.name
											: ""
									}
								/>
							</Box>
							<Typography>Contents:</Typography>
							<Divider />
							<Typography>Instruments</Typography>
							<FieldArray
								name="instruments"
								render={(arrayHelpers) => (
									<Box>
										{values.instruments.map(
											(ins: any, index) => (
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
														onChange={handleChange}
													/>
													<TextField
														name={`instruments[${index}].name`}
														value={ins.name}
														label="Name"
														onChange={handleChange}
														multiline
													/>
													<TextField
														type="number"
														name={`instruments[${index}].quantity`}
														value={ins.quantity}
														label="Quantity"
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
							<Typography>Supplies</Typography>
							<FieldArray
								name="supplies"
								render={(arrayHelpers) => (
									<Box>
										{values.supplies.map(
											(sup: any, index) => (
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
														onChange={handleChange}
													/>
													<TextField
														name={`supplies[${index}].name`}
														value={sup.name}
														label="Name"
														onChange={handleChange}
														multiline
													/>
													<TextField
														type="number"
														name={`supplies[${index}].quantity`}
														value={sup.quantity}
														label="Quantity"
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
							{loading ? <CircularProgress /> : "Create Tray"}
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
