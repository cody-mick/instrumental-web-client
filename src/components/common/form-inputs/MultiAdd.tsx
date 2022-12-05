import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { FieldArray } from "formik";

export default function MultiAdd({ fieldName, values }: any) {
	return (
		<Box>
			<FieldArray
				name={fieldName}
				render={(arrayHelpers) => (
					<Box>
						{values &&
							values.length > 0 &&
							values.map((v: any, index: any) => (
								<Box key={index}>
									<TextField name={`${fieldName}.${index}`} />
									<Button
										type="button"
										onClick={() =>
											arrayHelpers.remove(index)
										}>
										Remove
									</Button>
								</Box>
							))}
						<Button
							type="button"
							onClick={() =>
								arrayHelpers.push("")
							}>{`Add ${fieldName}`}</Button>
					</Box>
				)}
			/>
		</Box>
	);
}
