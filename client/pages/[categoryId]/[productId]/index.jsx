import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ActiveLastBreadcrumb from "../../../components/common/breadcrumbs";
import { Seo } from "../../../components/common/seo";
import LayoutDefault from "../../../components/layout/layout-default";
import ProductItemDetail from "../../../components/product-detail";
import useSWR from "swr";

const listName = ["Home", "Phone"];
const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

export default function ProductDetail() {
	const [isProductId, setIsProductId] = useState();
	useEffect(() => {
		let { pathname } = window.location;
		let id = pathname.split(".")[1];
		if (id > 0) {
			setIsProductId(id);
			console.log(id);
		}
	}, []);

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
			<ProductItemDetail />
		</Box>
	);
}
ProductDetail.Layout = LayoutDefault;
