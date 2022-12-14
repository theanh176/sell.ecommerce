import { Box } from "@mui/material";
import React, { Fragment } from "react";
import ListProduct from "../product/list-product";
import SliderBanner from "./components/slider-banner";
import SliderProduct from "./components/slider-product";

export default function HomePage() {
	return (
		<Fragment>
			<Box bgcolor="#f8f9fa">
				<SliderBanner />
			</Box>
			<Box my={5} sx={{ flexGrow: 1 }}>
				<ListProduct />
			</Box>
			<Box>{/* <SliderProduct /> */}</Box>
			<Box height={1000}></Box>
		</Fragment>
	);
}
