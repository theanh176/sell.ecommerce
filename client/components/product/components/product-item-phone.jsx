import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
	Box,
	Button,
	CardActionArea,
	CardActions,
	IconButton,
	Stack,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cartSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BasicRating from "../../common/rating";

export default function ProductItemPhone(props) {
	const router = useRouter();
	const [acitve, setActive] = useState(false);
	const dispatch = useDispatch();
	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};
	const {
		item: { name, image, price, id },
	} = props;

	const pathName =
		name
			.replace(/[`~!@#$%^&*()_|\s+|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-")
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/đ/g, "d")
			.replace(/Đ/g, "D") +
		"." +
		id;
	return (
		<Fragment>
			<Card
				onClick={() => router.push(`/phone/${pathName}`)}
				// onClick={() => console.log(pathName)}
				sx={{
					maxWidth: 300,
					maxHeight: 475,
					border: "1px solid #f3f3f3",
					boxShadow: "none",
					transition: "transform .2s",
					"&:hover": {
						transform: "scale(1.03)",
					},
				}}
			>
				<CardActionArea>
					<Stack
						direction={"row"}
						justifyContent="space-between"
						alignItems={"center"}
					>
						<Box
							bgcolor={"red"}
							color="white"
							p={1}
							width="fit-content"
						>
							-40%
						</Box>
						<IconButton
							onClick={(e) => {
								e.stopPropagation();
								setActive(!acitve);
							}}
						>
							{acitve ? (
								<FavoriteIcon
									fontSize="large"
									sx={{ color: "red" }}
								/>
							) : (
								<FavoriteBorderIcon
									fontSize="large"
									sx={{ color: "red" }}
								/>
							)}
						</IconButton>
					</Stack>
					<CardMedia
						sx={{
							objectFit: "contain",
							transition: "transform .2s",
							"&:hover": {
								// objectFit: "cover",
								transform: "scale(1.3)",
							},
						}}
						component="img"
						height="200"
						image="/iphone-3.png"
						alt="green iguana"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h6"
							fontWeight="bold"
							height={65}
						>
							{name}
						</Typography>
						<Stack direction="row" spacing={2} my={2}>
							<Box border="1px solid gray" px={1}>
								<Typography>6.1 inches</Typography>
							</Box>
							<Box border="1px solid gray" px={1}>
								<Typography>4 GB</Typography>
							</Box>
							<Box border="1px solid gray" px={1}>
								<Typography>64 GB</Typography>
							</Box>
						</Stack>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems={"center"}
						>
							<BasicRating />
							<Typography
								variant="h6"
								sx={{
									color: "red",
									fontWeight: "bold",
								}}
							>
								{price}$
							</Typography>
						</Stack>
					</CardContent>
				</CardActionArea>
				{/* <Box
					justifyContent={"center"}
					display="flex"
					p={2}
					backgroundColor="rgb(0,0,0,.1)"
					mr={3}
				>
					<Button
						size="large"
						sx={{
							border: "1px solid gray",
							color: "black",
							"&:hover": {
								color: "white",
								backgroundColor: "gray",
								border: "1px solid gray",
							},
						}}
						onClick={() => handleAddToCart(props.item)}
					>
						Add To Cart
					</Button>
				</Box> */}
			</Card>
		</Fragment>
	);
}
