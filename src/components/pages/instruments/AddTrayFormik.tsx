import { Divider, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FieldArray, Form, Formik } from "formik";
import addTraySchema, {
	addTrayInitialValues,
} from "../../../utilities/formValidationSchemas/addTraySchema";

export default function AddTrayFormik() {
	return (
		<div>
			<Formik
				initialValues={addTrayInitialValues}
				validationSchema={addTraySchema}
				onSubmit={() => {}}>
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
							<TextField
								label="Tray ID"
								value={values.trayId}
								onChange={handleChange("trayId")}
								onBlur={handleBlur("trayId")}
								error={Boolean(errors.trayId) && touched.trayId}
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
							<Typography>Contents</Typography>
							<Divider />
							<Typography>Instruments</Typography>
							<FieldArray
								name="instruments"
								render={(arrayHelpers) => <Box></Box>}
							/>
						</Box>
					</Form>
				)}
			</Formik>
		</div>
	);
}
