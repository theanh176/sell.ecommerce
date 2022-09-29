import { Box, Stack } from "@mui/material";
import React from "react";
import { Footer, Header } from "../common";

export default function LayoutDefault({ children }) {
	return (
		<Stack minHeight="100vh">
			<Header />

			<Box component="main" flexGrow={1}>
				{children}
			</Box>

			<Footer />
		</Stack>
	);
}
