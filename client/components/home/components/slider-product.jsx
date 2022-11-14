import { Container } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import ProductItemPhone from "../../product/components/product-item-phone";

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
};

const PHONE = {
	id: 1,
	name: "iPhone 12 Pro Max 128GB",
	image: "https://cdn.tgdd.vn/Products/Images/42/220834/iphone-12-pro-max-green-600x600.jpg",
	price: 32990000,
	description: "iPhone 12 Pro Max 128GB",
	rating: 5,
	category: "phone",
};

export default function SliderProduct() {
	return (
		<Container maxWidth={"xl"}>
			<Slider {...settings}>
				<ProductItemPhone item={PHONE} />
				<ProductItemPhone item={PHONE} />
				<ProductItemPhone item={PHONE} />
				<ProductItemPhone item={PHONE} />
				<ProductItemPhone item={PHONE} />
				<ProductItemPhone item={PHONE} />
				<ProductItemPhone item={PHONE} />
			</Slider>
		</Container>
	);
}
