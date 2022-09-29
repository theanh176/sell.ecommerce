import { Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Slider from "react-slick";
// import styled from "styled-components";
const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
};
const LISTBANNER = [
	{
		id: 1,
		url: "/iphone-1.png",
		name: "banner 1",
	},
	{
		id: 2,
		url: "/iphone-2.png",
		name: "banner 2",
	},
	{
		id: 3,
		url: "/iphone-3.png",
		name: "banner 3",
	},
];
export default function SliderBanner() {
	return (
		<Slider {...settings}>
			{LISTBANNER.map((item, index) => {
				return (
					<Container
						key={index}
						maxWidth="xl"
						sx={{
							display: "flex !important",
							justifyContent: "space-between",
							flexDirection:
								item.id % 2 === 0 ? "row" : "row-reverse",
						}}
					>
						<Stack
							direction="column"
							justifyContent="center"
							width={600}
							height={550}
							my="auto"
						>
							<img
								style={{ objectFit: "contain" }}
								height={360}
								src={item.url}
								alt={item.name}
							/>
						</Stack>
						<Stack
							direction="column"
							spacing={3}
							my="auto"
							alignItems={
								item.id % 2 === 0 ? "flex-end" : "flex-start"
							}
						>
							<Typography variant="h5">Sub title</Typography>
							<Typography variant="h3">Name product</Typography>
							<Typography variant="p">Content product</Typography>
							<Button
								sx={{
									border: "1px solid black",
									borderRadius: 0,
									width: "200px",
									color: "black",
									"&:hover": {
										color: "white",
										backgroundColor: "black",
									},
								}}
							>
								Start Shopping
							</Button>
						</Stack>
					</Container>
				);
			})}
		</Slider>
	);
}
// const Wrapper = styled.div`
// 	.slick-prev:before,
// 	.slick-next:before {
// 		font-family: "Font Awesome 5 Free";
// 		font-weight: 900;
// 		background-color: black;
// 		opacity: 1 !important;
// 		border-radius: 50%;
// 		font-size: 20px !important;
// 		position: absolute;
// 		width: 45px;
// 		height: 45px;
// 		display: flex;
// 		justify-content: space-around;
// 		align-items: center;
// 		filter: drop-shadow(1px 2px 8px rgba(0, 0, 0, 0.15));
// 	}
// 	.slick-prev:before {
// 		content: "\f053";
// 		left: 50px;
// 	}
// 	.slick-next:before {
// 		content: "\f054";
// 		right: 50px;
// 	}
// 	.slick-prev:hover:before,
// 	.slick-prev:focus:before,
// 	.slick-next:hover:before,
// 	.slick-next:focus:before {
// 		background: white;
// 	}
// 	.slick-dots {
// 		top: 95% !important;
// 	}
// `;
