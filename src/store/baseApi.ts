// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../app/store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3333",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", token);
    }

    return headers;
  },
});

export const baseApi = createApi({
  tagTypes: ["Firms", "Users", 'Chats', 'Messages'],
  baseQuery,
  endpoints: () => ({}),
});
