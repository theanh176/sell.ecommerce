import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

export default function ActiveLastBreadcrumb(props) {
	return (
		<Box
			my={3}
			role="presentation"
			onClick={handleClick}
			display="flex"
			justifyContent="center"
		>
			<Breadcrumbs aria-label="breadcrumb">
				<Typography sx={{ color: "black" }}>
					<Link href="/">Home</Link>
				</Typography>
				<Link href={props.path}>{props.name}</Link>
			</Breadcrumbs>
		</Box>
	);
}
