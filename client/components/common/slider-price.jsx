import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

function valuetext(value) {
	return `${value}$`;
}

const minDistance = 10;

export default function MinimumDistanceSlider() {
	const [value1, setValue1] = useState([0, 1000]);
	const [valueHigh, setValueHigh] = useState(value1[1]);
	const [valueLow, setValueLow] = useState(value1[0]);

	const handleChange1 = (event, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setValue1([
				Math.min(newValue[0], value1[1] - minDistance),
				value1[1],
			]);
			setValueLow(Math.min(newValue[0], value1[1] - minDistance));
		} else {
			setValue1([
				value1[0],
				Math.max(newValue[1], value1[0] + minDistance),
			]);
			setValueHigh(Math.max(newValue[1], value1[0] + minDistance));
		}
	};

	return (
		<Box sx={{ width: 400 }} mt={3} mx={1}>
			<Slider
				getAriaLabel={() => "Minimum distance"}
				value={value1}
				onChange={handleChange1}
				valueLabelDisplay="auto"
				getAriaValueText={valuetext}
				disableSwap
				min={0}
				max={2000}
			/>
			<Box display="flex" justifyContent={"space-between"}>
				<Typography>{valueLow}$</Typography>
				<Typography>{valueHigh}$</Typography>
			</Box>
		</Box>
	);
}
