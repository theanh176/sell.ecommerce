import {
	Box,
	Container,
	Divider,
	Grid,
	Stack,
	Typography,
	Link as LinkMui,
	Button,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import ActiveLastBreadcrumb from "../common/breadcrumbs";
import ItemCart from "./components/product-item-cart";

export default function ShoppingCart() {
	return (
		<Box mb={8}>
			<ActiveLastBreadcrumb name={"cart"} path={"/cart"} />
			<Typography
				variant="h2"
				fontWeight="bold"
				display="flex"
				justifyContent="center"
				mb={5}
			>
				SHOPPING CART
			</Typography>
			<Container>
				<Grid container spacing={2} mb={5}>
					<Grid item xs={8}>
						<Box bgcolor="#f8f9fa">
							<Grid container py={2}>
								<Grid
									item
									xs={4}
									display="flex"
									justifyContent="center"
								>
									<Typography fontWeight="bold">
										ITEM
									</Typography>
								</Grid>
								<Grid
									item
									xs={2}
									display="flex"
									justifyContent="center"
								>
									<Typography fontWeight="bold">
										PRICE
									</Typography>
								</Grid>
								<Grid
									item
									xs={3}
									display="flex"
									justifyContent="center"
								>
									<Typography fontWeight="bold">
										QUANTITY
									</Typography>
								</Grid>
								<Grid
									item
									xs={2}
									display="flex"
									justifyContent="center"
								>
									<Typography fontWeight="bold">
										TOTAL
									</Typography>
								</Grid>
								<Grid item xs={1}></Grid>
							</Grid>
						</Box>
						<Box>
							<ItemCart />
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Stack
							direction="column"
							bgcolor="#f8f9fa"
							px={3}
							py={2}
							spacing={2}
						>
							<Box>
								<Typography fontWeight="bold">
									ORDER SUMMARY
								</Typography>
							</Box>
							<Stack direction="column" spacing={2}>
								<Box
									display="flex"
									justifyContent="space-between"
								>
									<Typography>Order Subtotal</Typography>
									<Typography>$1998</Typography>
								</Box>
								<Divider />
								<Box
									display="flex"
									justifyContent="space-between"
								>
									<Typography>
										Shipping and handling
									</Typography>
									<Typography>$10</Typography>
								</Box>
								<Divider />
								<Box
									display="flex"
									justifyContent="space-between"
								>
									<Typography>Tax</Typography>
									<Typography>$0</Typography>
								</Box>
								<Divider />
								<Box
									display="flex"
									justifyContent="space-between"
								>
									<Typography>Total</Typography>
									<Typography>$2008</Typography>
								</Box>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
				<Box display="flex" justifyContent="space-between">
					<Link href={"/"}>
						<LinkMui sx={{ color: "GrayText", cursor: "pointer" }}>
							CONTINUE SHOPPING
						</LinkMui>
					</Link>
					<Button
						sx={{
							color: "white",
							backgroundColor: "black",
							border: "3px solid white",
							borderRadius: "none",
							"&:hover": {
								color: "white",
								backgroundColor: "black",
								border: "3px solid gray",
							},
						}}
					>
						PROCEED TO CHECKOUT
					</Button>
				</Box>
			</Container>
		</Box>
	);
}
