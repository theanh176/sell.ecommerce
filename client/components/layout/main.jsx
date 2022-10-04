import { Box, Stack } from "@mui/material";
import React from "react";
import { Footer, Header } from "../common";

export default function Main({ children }) {
	return (
		<Box minHeight="100vh">
			<Box position="absolute" top={0} left={0} right={0} zIndex={1}>
				<Header />
			</Box>

			<Box component="main" flexGrow={1}>
				{children}
			</Box>

			<Footer />
		</Box>
	);
}
