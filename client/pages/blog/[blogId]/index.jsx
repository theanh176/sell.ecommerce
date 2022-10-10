import { Box } from "@mui/material";
import React from "react";
import BlogDetail from "../../../components/blog/blog-detail";
import ActiveLastBreadcrumb from "../../../components/common/breadcrumbs";
import { Seo } from "../../../components/common/seo";
import LayoutDefault from "../../../components/layout/layout-default";

const listName = ["Home", "Blog"];

export default function ProductDetail() {
	return (
		<Box>
			<Seo
				data={{
					title: "Sell Ecommerce | Next JS",
					description:
						"Step by step tutorials to build a full CRUD website using NextJS for beginners",
					url: "https://learn-nextjs-fawn.vercel.app/",
					thumbnailUrl:
						"https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png",
				}}
			/>
			<Box height={64} bgcolor="#f8f9fa" marginTop={-8}></Box>
			<ActiveLastBreadcrumb listName={listName} path={"/"} name={"Id"} />
			<BlogDetail />
		</Box>
	);
}
ProductDetail.Layout = LayoutDefault;
