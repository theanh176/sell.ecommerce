import React, { useState, useEffect } from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";

export default function BasicPopover(props) {
	const [anchorEl, setAnchorEl] = useState(null);
	const [active, setActive] = useState(false);

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	const handleOpen = (event) => {
		setAnchorEl(event.currentTarget);
		setActive(true);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setActive(false);
	};
	useEffect(() => {
		return () => {
			document.addEventListener("scroll", () => {
				handleClose();
			});
		};
	}, [anchorEl]);

	return (
		<div>
			<Button
				aria-describedby={id}
				variant="contained"
				onClick={handleOpen}
				sx={{
					backgroundColor: "transparent",
					color: "black",
					boxShadow: `${active ? "2" : "none"}`,
					border: "1px solid #e5e7eb",
					marginRight: "10px",
					"&:hover": {
						backgroundColor: "transparent",
						color: "black",
					},
				}}
			>
				{props.name}
			</Button>
			<Popover
				disableScrollLock={true}
				sx={{ marginTop: "10px" }}
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				{props.children}
			</Popover>
		</div>
	);
}
