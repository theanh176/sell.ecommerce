import {
	Box,
	Button,
	Checkbox,
	Container,
	Divider,
	FormControlLabel,
	FormGroup,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import ControlledAccordions from "../common/accordion";
import ActiveLastBreadcrumb from "../common/breadcrumbs";
import BasicPopover from "../common/popover";
import Media from "../common/skeleton";
import SliderBanner from "../common/slider";
import MinimumDistanceSlider from "../common/slider-price";
import { useGetAllProductsQuery } from "../../features/productsApi";
import ProductItemPhone from "../product/components/product-item-phone";
import { BsSortDown, BsSortUp } from "react-icons/bs";
import PopperPopupState from "../common/popper";

const LIST_DEVICE = [
	{
		id: 1,
		name: "Điện thoại",
		path: "/phone",
	},
	{
		id: 2,
		name: "Laptop",
		path: "/laptop",
	},
	{
		id: 3,
		name: "Máy tính bảng",
		path: "/tablet",
	},
	{
		id: 4,
		name: "PC - Màn hình",
		path: "/pc",
	},
];
const LIST_CONFIGURAT = [
	{
		id: 1,
		configurat: "Giá",
	},
	{
		id: 2,
		configurat: "Loại điện thoại",
		tag: ["Android", "Điện thoại phổ thông", "iPhone (iOS)"],
	},
	{
		id: 3,
		configurat: "Dung lượng RAM",
		tag: ["Dưới 4GB", "4GB - 6GB", "8GB - 12GB", "12GB trở lên"],
	},
	{
		id: 4,
		configurat: "PC - Màn hình",
		tag: ["Dưới 32GB", "32GB - 64GB", "128GB - 256GB", "Trên 512GB"],
	},
];
const LIST_TRADEMARK = [
	{
		id: 1,
		name: "Apple",
		url: "https://cdn.cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_71_.png",
	},
	{
		id: 2,
		name: "SamSung",
		url: "https://cdn.cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_72_.png",
	},
	{
		id: 3,
		name: "Xiaomi",
		url: "https://cdn.cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_73_.png",
	},
	{
		id: 4,
		name: "Oppo",
		url: "https://cdn.cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_74_.png",
	},
	{
		id: 5,
		name: "Vivo",
		url: "https://cdn.cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_75_.png",
	},
	{
		id: 6,
		name: "Nokia",
		url: "https://cdn.cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_76_.png",
	},
	{
		id: 7,
		name: "Realme",
		url: "https://cdn.cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_77_.png",
	},
	{
		id: 8,
		name: "Asus",
		url: "https://cdn.cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_78_.png",
	},
];

export default function CategoryShop() {
	const { data, error, isLoading } = useGetAllProductsQuery();
	return (
		<Box>
			<Box bgcolor="#f8f9fa" marginTop={-10}>
				<SliderBanner />
			</Box>
			<Box>
				<ActiveLastBreadcrumb name={"shop"} path={"/shop"} />
				<Container maxWidth="xl">
					<Stack direction="column" spacing={1}>
						<Box>
							<ControlledAccordions name={"Thương Hiệu"}>
								<FormGroup>
									<Stack direction={"row"} flexWrap="wrap">
										{LIST_TRADEMARK.map((item, index) => {
											return (
												<Button
													sx={{
														color: "black",
														border: "1px solid gray",
														marginRight: "40px",
														marginBottom: "20px",
													}}
													key={index}
												>
													<img
														style={{
															height: "40px",
															width: "100px",
															objectFit:
																"contain",
														}}
														src={item.url}
														alt={item.name}
													></img>
												</Button>
											);
										})}
									</Stack>
								</FormGroup>
							</ControlledAccordions>
						</Box>
						<Box>
							<ControlledAccordions name={"Chọn theo tiêu chí"}>
								<FormGroup>
									<Stack direction={"row"} flexWrap="wrap">
										{LIST_CONFIGURAT.map((item, index) => {
											return (
												<Box key={index}>
													<BasicPopover
														name={item.configurat}
													>
														<Box
															p={2}
															width="450px"
															display="flex"
															flexWrap={"wrap"}
														>
															{item.tag
																?.length ? (
																item.tag.map(
																	(
																		item,
																		index
																	) => {
																		return (
																			<Button
																				key={
																					index
																				}
																				sx={{
																					marginRight:
																						"8px",
																					marginBottom:
																						"4px",
																					borderRadius:
																						"20px",
																					color: "black",
																					background:
																						"#f3f4f6",
																					border: "1px solid #e5e7eb",
																					"&:hover":
																						{
																							background:
																								"gray",
																						},
																				}}
																			>
																				{
																					item
																				}
																			</Button>
																		);
																	}
																)
															) : (
																<MinimumDistanceSlider />
															)}
														</Box>
													</BasicPopover>
												</Box>
											);
										})}
									</Stack>
								</FormGroup>
							</ControlledAccordions>
						</Box>
					</Stack>
					<Box my={3}>
						<Typography variant="h5" fontWeight="bold" mb={2}>
							Sắp xếp theo
						</Typography>
						<Stack direction="row" spacing={3}>
							<Button
								sx={{
									color: "black",
									border: "1px solid black",
									"&:hover": {
										border: "1px solid black",
									},
								}}
								variant="outlined"
								startIcon={<BsSortUp />}
							>
								Cao đến thấp
							</Button>
							<Button
								sx={{
									color: "black",
									border: "1px solid black",
									"&:hover": {
										border: "1px solid black",
									},
								}}
								variant="outlined"
								startIcon={<BsSortDown />}
							>
								Thấp đên cao
							</Button>
						</Stack>
					</Box>
					<Box>
						{isLoading ? (
							<Media loading />
						) : error ? (
							<Typography>Error</Typography>
						) : (
							<Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
								{data.map((item, index) => (
									<Grid
										item
										xs={2}
										sm={2.2}
										md={2.2}
										key={index}
										mb={3}
										mr={1}
									>
										<ProductItemPhone item={item} />
									</Grid>
								))}
							</Grid>
						)}
					</Box>
				</Container>
			</Box>
		</Box>
	);
}
