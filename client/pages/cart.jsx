import { Box } from "@mui/material";
import React from "react";
import { Seo } from "../components/common/seo";
import LayoutDefault from "../components/layout/layout-default";
import ShoppingCart from "../components/shopping-cart";

export default function Cart() {
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
			<ShoppingCart />
		</Box>
	);
}
Cart.Layout = LayoutDefault;
