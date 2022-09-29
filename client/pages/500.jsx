import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import LayoutDefault from "../components/layout/layout-default";

export default function Page505() {
	return (
		<Box>
			<Link href="/">
				<a color="black">go back to home</a>
			</Link>
		</Box>
	);
}
Page505.Layout = LayoutDefault;
