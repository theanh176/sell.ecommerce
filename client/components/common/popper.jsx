import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

export default function PopperPopupState(props) {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpen = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popper" : undefined;
	return (
		<PopupState variant="popper" popupId="demo-popup-popper">
			{(popupState) => (
				<div>
					<Button
						aria-describedby={id}
						onClick={handleOpen}
						variant="contained"
						{...bindToggle(popupState)}
						sx={{
							backgroundColor: "transparent",
							color: "black",
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
					<Popper
						id={id}
						open={open}
						anchorEl={anchorEl}
						sx={{ zIndex: 999 }}
						placement="bottom-start"
						disablePortal={true}
						{...bindPopper(popupState)}
						transition
					>
						{({ TransitionProps }) => (
							<Box marginTop={2}>
								<Fade {...TransitionProps} timeout={350}>
									<Paper>{props.children}</Paper>
								</Fade>
							</Box>
						)}
					</Popper>
				</div>
			)}
		</PopupState>
	);
}
