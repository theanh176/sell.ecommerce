import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://63365a4e8aa85b7c5d2b5551.mockapi.io/api/v1/products/",
	}),
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: () => "products",
		}),
	}),
});

export const { useGetAllProductsQuery } = productsApi;
