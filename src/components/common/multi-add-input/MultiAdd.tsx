import { Close } from "@mui/icons-material";
import {
	Box,
	Button,
	Grid,
	IconButton,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";

export default function MultiAdd({ label, sectionTitle }: any) {
	const [inputs, setInputs] = useState([1]);
	const handleAdd = () => {
		setInputs([...inputs, inputs[inputs.length - 1] + 1]);
	};
	const handleRemove = (input: any) => {
		const itemToRemove = inputs.indexOf(input);
		if (itemToRemove > -1) {
			setInputs(inputs.filter((i) => inputs.indexOf(i) !== itemToRemove));
		}
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
			<Typography>{sectionTitle}</Typography>
			{inputs.map((input) => (
				<Grid container spacing={2}>
					<Grid item xs={10}>
						<TextField key={input} label={label} />
					</Grid>
					{inputs.length > 1 ? (
						<Grid item xs={2}>
							<IconButton
								onClick={() => handleRemove(input)}
								key={input}
							>
								<Close />
							</IconButton>
						</Grid>
					) : null}
				</Grid>
			))}
			<Button onClick={handleAdd}>Add</Button>
		</Box>
	);
}
