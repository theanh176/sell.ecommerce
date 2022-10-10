import React, { useState, useEffect, Fragment } from "react";
import Radio from "@mui/material/Radio";
import { Box, Stack, Typography } from "@mui/material";

export default function ColorRadioButtons(props) {
	const [selectedData, setSelectedData] = useState([]);
	const [selectedValue, setSelectedValue] = useState("black");

	useEffect(() => {
		setSelectedData(props.item);
	}, []);

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	const controlProps = (item) => ({
		checked: selectedValue === item,
		onChange: handleChange,
		value: item,
		name: "color-radio-button-demo",
		inputProps: { "aria-label": item },
	});
	return props.color ? (
		<Stack direction="row" spacing={2}>
			{selectedData.map((item, index) => {
				return (
					<Box>
						<Radio
							key={index}
							{...controlProps(item.name)}
							sx={{
								color: item.color,
								"&.Mui-checked": {
									color: item.color,
								},
							}}
						/>
						<Typography
							sx={{ color: item.color }}
							display={"flex"}
							justifyContent="center"
						>
							{item.color}
						</Typography>
					</Box>
				);
			})}
		</Stack>
	) : props.price ? (
		<Stack direction="row" spacing={2}>
			{selectedData.map((item, index) => {
				return (
					<Box display={"flex"}>
						<Radio
							key={index}
							{...controlProps(item.name)}
							sx={{
								color: item.color,
								"&.Mui-checked": {
									color: item.color,
								},
							}}
						/>
						<Typography display={"flex"} alignItems="center">
							{item.price}
						</Typography>
					</Box>
				);
			})}
		</Stack>
	) : (
		""
	);
}
