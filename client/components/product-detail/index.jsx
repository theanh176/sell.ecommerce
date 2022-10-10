import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import BasicModal from "../common/modal";
import ColorRadioButtons from "../common/radio";
import BasicRating from "../common/rating";
import SliderBanner from "../common/slider-image";

const LIST_COLOR = [
	{
		id: 0,
		name: "black",
		color: "black",
	},
	{
		id: 1,
		name: "red",
		color: "red",
	},
	{
		id: 2,
		name: "green",
		color: "green",
	},
];

const LIST_PRICE = [
	{
		id: 0,
		name: "price 1",
		color: "gray",
		price: "39.000.000đ",
	},
	{
		id: 1,
		name: "pr1ce 2",
		color: "gray",
		price: "41.000.000đ",
	},
	{
		id: 2,
		name: "price 3",
		color: "gray",
		price: "43.000.000đ",
	},
];

const LIST_TTCT = [
	{
		id: 0,
		title: "6.2 inch, Chính: 7.6 inch, Dynamic AMOLED 2X, WXGA+, 1768 x 2208 Pixels",
	},
	{
		id: 1,
		title: "50.0 MP + 12.0 MP + 10.0 MP",
	},
	{
		id: 2,
		title: "10.0 MP",
	},
	{
		id: 3,
		title: "Snapdragon 8+ Gen 1",
	},
	{
		id: 4,
		title: "256 GB",
	},
];

export default function ProductItemDetail() {
	const router = useRouter();
	return (
		<Fragment>
			<Container sx={{ marginBottom: "20px" }}>
				<Box
					display="flex"
					justifyContent={"space-between"}
					alignItems="center"
				>
					<Typography p={2} variant="h5" fontWeight="bold">
						iPhone 11 64GB I Chính hãng VN/A
					</Typography>
					<BasicRating />
				</Box>
				<Divider sx={{ margin: "10px 0" }} />
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				>
					<Grid item xs={5}>
						<Box border={"1px solid gray"} borderRadius={"10px"}>
							<SliderBanner />
						</Box>
						<Box
							mt={5}
							bgcolor={"#f3f3f3"}
							pb={1}
							border="1px solid rgba(0, 0, 0, 0.12)"
							// borderRadius="10px"
						>
							<Typography p={1} variant="h6">
								Thông số kỹ thuật
							</Typography>
							<Divider />
							<ul style={{ "list-style-type": "circle" }}>
								{LIST_TTCT.map((item, index) => {
									return (
										<li
											sx={{ fontSize: "13px" }}
											key={index}
										>
											{item.title}
										</li>
									);
								})}
							</ul>
							<BasicModal />
						</Box>
					</Grid>
					<Grid item xs={7}>
						<Stack spacing={2}>
							<Box
								display="flex"
								justifyContent={"space-between"}
								alignItems="center"
							>
								<Stack direction={"row"} alignItems="center">
									<Typography
										p={1}
										variant="h5"
										fontWeight="bold"
										color={"red"}
									>
										37.990.000₫
									</Typography>
									<Typography
										variant="h6"
										color={"gray"}
										sx={{ textDecoration: "line-through" }}
									>
										41.990.000₫
									</Typography>
								</Stack>
								{/* <Stack direction={"row"} alignItems="center">
									<BasicRating />
								</Stack> */}
							</Box>
							<Box>
								<ColorRadioButtons
									item={LIST_PRICE}
									price={true}
								/>
							</Box>
							<Box>
								<ColorRadioButtons
									item={LIST_COLOR}
									color={true}
								/>
							</Box>
							<Box
								bgcolor={"#f3f3f3"}
								border="1px solid rgba(0, 0, 0, 0.12)"
							>
								<Typography p={1} variant="h6">
									Khuyến mãi đặc biệt
								</Typography>
								<Divider />
								<Stack p={1} spacing={1}>
									<Typography>
										Giảm ngay 3.000.000đ
									</Typography>
									<Typography>Trả góp 0%</Typography>
									<Typography>
										Thu cũ trợ giá ngay 5 triệu + FPT Shop
										trợ giá thêm 15% đến 3 triệu Xem chi
										tiết
									</Typography>
									<Typography>
										Giảm 30% Sim MobiFone Siêu Data 3T -
										2GB/ngày - miễn phí 3 tháng - giá chỉ
										266.000đ
									</Typography>
									<Typography>
										Tặng PMH 100.000đ mua Nồi chiên không
										dầu – Máy hút bụi – Máy lọc nước
									</Typography>
								</Stack>
							</Box>
							<Button
								onClick={() => router.push(`/cart`)}
								sx={{
									border: "1px solid red",
									borderRadius: 0,
									display: "flex",
									width: "-webkit-fill-available",
									color: "red",
									"&:hover": {
										color: "white",
										backgroundColor: "red",
									},
								}}
							>
								MUA NGAY
							</Button>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
}
