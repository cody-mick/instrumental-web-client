import React, { useState } from "react";

export default function DetailDrawer({ anchorPoint }: any) {
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer =
		(anchorPoint: any, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "shift")
			)
				return;
			setState({ ...state, [anchorPoint]: open });
		};

	return <div>DetailDrawer</div>;
}
