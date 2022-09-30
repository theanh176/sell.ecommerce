import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cartSlice";

export default function ProductItemPhone(props) {
	const dispatch = useDispatch();
	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};
	const {
		item: { name, image, price, id },
	} = props;
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					sx={{ objectFit: "contain", margin: "25px 0" }}
					component="img"
					height="250"
					image="/iphone-3.png"
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{price}$
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions sx={{ justifyContent: "start" }}>
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
			</CardActions>
		</Card>
	);
}
