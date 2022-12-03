import { TextField } from "@mui/material";
import React from "react";
import MultiAdd from "../../common/multi-add-input/MultiAdd";

export default function AddCaseForm() {
	const handleSubmit = () => {};
	return (
		<form onSubmit={handleSubmit}>
			<TextField
				id="procedure-id-input"
				name="procedure-id"
				label="ID"
				type="text"
			/>
			<TextField
				id="procedure-name-input"
				name="procedure-name"
				label="Name"
				type="text"
			/>
			<TextField
				id="procedure-approach-input"
				name="procedure-approach"
				label="Approach"
				type="text"
			/>
			<TextField
				multiline
				id="procedure-notes-input"
				name="procedure-notes"
				label="Notes"
				type="text"
			/>
			<MultiAdd label="Instrumentation" sectionTitle="Instruments" />
		</form>
	);
}
