import { Box, Stack } from "@mui/material";
import React from "react";
import { Footer, Header } from "../common";

export default function Main({ children }) {
	return (
		<Stack minHeight="100vh">
			<Stack
				direction="column"
				position="absolute"
				top={0}
				left={0}
				right={0}
			>
				<Header />
			</Stack>

			<Box component="main" flexGrow={1}>
				{children}
			</Box>

			<Footer />
		</Stack>
	);
}
