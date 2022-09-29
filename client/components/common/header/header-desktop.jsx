import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import HeaderContact from "./components/header-contact";
import Navbar from "./components/navbar";

export default function Headerdesktop() {
	return (
		<>
			<HeaderContact />
			<Navbar />
		</>
	);
}
