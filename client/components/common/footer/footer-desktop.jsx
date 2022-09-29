import { Box, AppBar, Grid, Link, Toolbar, Typography } from "@mui/material";
// import { Info, Security } from "@material-ui/icons";
import React from "react";

export default function FooterDesktop() {
	return (
		<AppBar
			position="static"
			elevation={0}
			component="footer"
			color="default"
		>
			<Toolbar style={{ justifyContent: "center" }}>
				<Typography variant="caption">©2022</Typography>
			</Toolbar>
		</AppBar>
	);
}
