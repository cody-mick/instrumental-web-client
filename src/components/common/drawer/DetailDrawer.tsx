import { Drawer } from "@mui/material";
import React, { useState } from "react";

export default function DetailDrawer({ open, onClose, children }: any) {
	return (
		<div>
			<Drawer anchor="right" open={open} onClose={onClose}>
				{children}
			</Drawer>
		</div>
	);
}
