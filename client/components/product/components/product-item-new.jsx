import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";

export default function ProductItemNew() {
	return (
		<Fragment>
			<Divider />
			<Box display="flex" px={2} mt={2}>
				<img
					style={{ width: "80px", height: "80px" }}
					src="https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/28//637816821904059670_oppo-reno7-dd.jpg"
					alt="phone new"
				></img>
				<Stack spacing={2} ml={2}>
					<Typography>OPPO Reno7 5G 8GB - 256GB</Typography>
					<Typography
						sx={{
							cursor: "pointer",
							color: "blueviolet",
							"&:hover": {
								color: "blue",
							},
						}}
					>
						Xem chi tiết
					</Typography>
				</Stack>
			</Box>
		</Fragment>
	);
}
