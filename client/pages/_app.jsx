import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { SWRConfig } from "swr";
import { createEmotionCache, theme } from "../utils/index";
import "../styles/globals.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { productsApi } from "../features/productsApi";
import cartReducer, { getTotals } from "../features/cartSlice";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import productsSlice, { productsFetch } from "../features/productsSlice";

const clientSideEmotionCache = createEmotionCache();
const store = configureStore({
	reducer: {
		products: productsSlice,
		cart: cartReducer,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware),
});

// store.dispatch(productsFetch());
// store.dispatch(getTotals());

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
				<ToastContainer />
				<SWRConfig
					value={{
						fetcher: (url) => axiosClient.put(url),
						shouldRetryOnError: false,
					}}
				>
					<Provider store={store}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</Provider>
				</SWRConfig>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
