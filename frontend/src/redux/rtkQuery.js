import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api', 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) =>({
        url:'auth/login',
        method:'POST',
        body:data
      })
    }),
    // getPostById: builder.query({
    //   query: (id) => `/posts/${id}`, // Define endpoint with a dynamic parameter
    // }),
  }),
});

export const { useLoginMutation } = apiSlice;