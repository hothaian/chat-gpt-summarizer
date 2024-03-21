import { createApi, fetchBaseQuerry } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuerry({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `test`,
    }),
  }),
});
