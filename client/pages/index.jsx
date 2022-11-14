import { Box } from "@mui/material";
import { Seo } from "../components/common/seo";
import HomePage from "../components/home/home-page";
import Main from "../components/layout/main";
export default function Home() {
	return (
		<Box>
			<Seo
				data={{
					title: "Sell Ecommerce | Next JS",
					description:
						"Step by step tutorials to build a full CRUD website using NextJS for beginners",
					url: "https://sell-ecommerce-client-izde.vercel.app/",
					thumbnailUrl:
						"https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png",
				}}
			/>
			<HomePage />
		</Box>
	);
}

Home.Layout = Main;
