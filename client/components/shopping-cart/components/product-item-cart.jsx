import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export default function ItemCart() {
	return (
		<Grid container py={1}>
			<Grid item xs={4}>
				<Box display="flex" alignItems="center">
					<img
						style={{
							height: "80px",
							width: "80px",
							objectFit: "contain",
						}}
						src="/iphone-3.png"
					></img>
					<Box>
						<Typography fontWeight="bold">
							Iphone 13 Pro Max
						</Typography>
						<Typography>Black 512gb</Typography>
					</Box>
				</Box>
			</Grid>
			<Grid
				item
				xs={2}
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Typography>$999</Typography>
			</Grid>
			<Grid
				item
				xs={3}
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<IconButton>
					<RemoveIcon size={24} />
				</IconButton>
				<Box border={"1px solid gray"} py={1} px={3}>
					<Typography>2</Typography>
				</Box>
				<IconButton>
					<AddIcon size={24} />
				</IconButton>
			</Grid>
			<Grid
				item
				xs={2}
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Typography>$1998</Typography>
			</Grid>
			<Grid
				item
				xs={1}
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<IconButton>
					<CloseIcon size={24} />
				</IconButton>
			</Grid>
		</Grid>
	);
}
