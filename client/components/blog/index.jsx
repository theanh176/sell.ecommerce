import { Box, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import ProductItemNew from "../product/components/product-item-new";
import BlogItem from "./components/blog-item";

export default function BlogList() {
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					{/* <Typography
						border={"1px solid #f3f3f3"}
						bgcolor={"#f3f3f3"}
						p={1}
						display="flex"
						justifyContent={"center"}
						fontWeight="bold"
						variant="h5"
						mb={3}
					>
						Những bài viết liên quan Công Nghệ
					</Typography> */}
					<Stack spacing={4}>
						{[...new Array(6)].map(() => (
							<BlogItem />
						))}
					</Stack>
				</Grid>
				<Grid item xs={4}>
					{/* <Typography
						border={"1px solid #f3f3f3"}
						bgcolor={"#f3f3f3"}
						p={1}
						display="flex"
						justifyContent={"center"}
						fontWeight="bold"
						variant="h5"
						mb={3}
					>
						Sản phẩm mới
					</Typography> */}
					<Box mb={5} justifyContent="center" boxShadow={2} p={2}>
						<Typography variant="h6" fontWeight={"bold"} mb={2}>
							Sản phẩm liên quan
						</Typography>
						<img
							style={{ height: "200px", width: "200px" }}
							src="https://images.fpt.shop/unsafe/fit-in/200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/12/637985736585000612_samsung-galaxy-z-fold4-kem-dd-tra-gop.jpg"
							alt="image-phone"
						></img>
						<Stack spacing={2}>
							<Typography
								variant="h6"
								fontWeight={"bold"}
								sx={{ color: "blue" }}
							>
								Samsung Galaxy Z Fold4 5G 256GB
							</Typography>
							<Box display={"flex"}>
								<Rating />
								<Typography>(4) người đánh giá</Typography>
							</Box>
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
					<Box boxShadow={2} p={2}>
						<Typography variant="h6" fontWeight={"bold"} mb={2}>
							Sản phẩm nổi bật
						</Typography>
						<Stack spacing={1}>
							{[...new Array(4)].map(() => (
								<ProductItemNew />
							))}
						</Stack>
						<Typography
							display={"flex"}
							justifyContent="center"
							mt={3}
							sx={{
								cursor: "pointer",
								color: "blueviolet",
								"&:hover": {
									color: "blue",
								},
							}}
						>
							Xem thêm
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}
