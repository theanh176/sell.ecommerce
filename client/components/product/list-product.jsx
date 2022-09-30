import { Container, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useGetAllProductsQuery } from "../../features/productsApi";
import Media from "../common/skeleton";
import ProductItemPhone from "./components/product-item-phone";

export default function ListProduct() {
	const { data, error, isLoading } = useGetAllProductsQuery();
	return (
		<Fragment>
			{isLoading ? (
				<Media loading />
			) : error ? (
				<Typography>Error</Typography>
			) : (
				<Container maxWidth="xl" my={5}>
					<Grid
						container
						columns={{ xs: 4, sm: 8, md: 12 }}
						justifyContent="space-around"
					>
						{data.slice(0, 4).map((item, index) => (
							<Grid item xs={2} sm={3} md={3} key={index} mb={3}>
								<ProductItemPhone item={item} />
							</Grid>
						))}
					</Grid>
				</Container>
			)}
		</Fragment>
	);
}
