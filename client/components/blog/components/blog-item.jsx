import { Avatar, Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";

export default function BlogItem() {
	const router = useRouter();
	return (
		<Box
			onClick={() => router.push(`/blog/phone-new`)}
			boxShadow={2}
			p={2}
			display={"flex"}
			sx={{
				transition: "transform .2s",
				cursor: "pointer",
				"&:hover": { transform: "scale(1.02)" },
			}}
		>
			<img
				style={{
					width: "300px",
					height: "200px",
					objectFit: "contain",
				}}
				src="https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/28/637999591446010198_ba-i-web-2-2809-03.jpg"
				alt="image-blog"
			></img>
			<Stack spacing={1} justifyContent="flex-end" mx={2} py={1}>
				<Typography fontWeight={"bold"}>
					Ưu đãi phòng chờ hạng thương gia dành cho chủ sở hữu Samsung
					Galaxy Z Fold4 và Galaxy Z Flip4
				</Typography>
				<Typography>
					Giờ đây, chủ sở hữu Samsung Galaxy Z Fold4 và Z Flip4 có thể
					tận hưởng phòng chờ miễn phí hạng thương gia tại nhiều sân
					bay trong cả nước mà không cần đặt chỗ trước.
				</Typography>
				<Stack
					direction="row"
					spacing={2}
					alignItems="center"
					justifyContent={"end"}
				>
					<Avatar />
					<Typography>The Anh - 9 ngày trước</Typography>
				</Stack>
			</Stack>
		</Box>
	);
}
