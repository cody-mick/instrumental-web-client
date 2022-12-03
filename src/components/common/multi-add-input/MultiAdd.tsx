import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function MultiAdd({ label, sectionTitle }: any) {
	const [inputs, setInputs] = useState([1]);
	const handleAdd = () => {
		setInputs([...inputs, inputs[inputs.length - 1] + 1]);
	};
	console.log(inputs);

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
			<Typography>{sectionTitle}</Typography>
			{inputs.map((input) => (
				<TextField key={input} label={label} />
			))}
			<Button onClick={handleAdd}>Add</Button>
		</Box>
	);
}
