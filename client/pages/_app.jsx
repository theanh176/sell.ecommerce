import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createEmotionCache, theme } from "../utils/index";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	const Layout = Component.Layout;

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
