import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (count) => ({
        url: `/products?limit=${count}`,
      }),
      providesTags: ["Product"],
    }),
    getDeteilProduct: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetDeteilProductQuery } = productApi;
