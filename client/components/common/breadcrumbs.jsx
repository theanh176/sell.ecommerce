import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

export default function ActiveLastBreadcrumb(props) {
	const ListName = props.listName;
	return (
		<Box
			my={3}
			role="presentation"
			onClick={handleClick}
			display="flex"
			justifyContent="center"
		>
			<Breadcrumbs aria-label="breadcrumb">
				{ListName && ListName.length > 0 ? (
					ListName.map((item, index) => {
						return (
							<Typography sx={{ color: "black" }} key={index}>
								<Link href="/">{item}</Link>
							</Typography>
						);
					})
				) : (
					<Typography sx={{ color: "black" }}>
						<Link href="/">Home</Link>
					</Typography>
				)}
				<Link href={props.path}>{props.name}</Link>
			</Breadcrumbs>
		</Box>
	);
}
