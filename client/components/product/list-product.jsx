import { Container, Grid } from "@mui/material";
import React from "react";
import ProductItemPhone from "./components/product-item-phone";

export default function ListProduct() {
	return (
		<Container maxWidth="xl" my={5}>
			<Grid
				container
				columns={{ xs: 4, sm: 8, md: 12 }}
				justifyContent="space-around"
			>
				{Array.from(Array(4)).map((_, index) => (
					<Grid item xs={2} sm={3} md={3} key={index} mb={3}>
						<ProductItemPhone />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
