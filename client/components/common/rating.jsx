import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating() {
	const [value, setValue] = useState(5);

	return (
		<Box
			sx={{
				"& > legend": { mt: 2 },
			}}
		>
			<Rating
				name="simple-controlled"
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			/>
		</Box>
	);
}
