import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const rapidApiKey1 = import.meta.env.REACT_RAPID_API_ARTICLE_KEY;
const rapidApiKey = "cb7b710f52mshe38f81889d65693p15941djsn902ec3ea4183";

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        baseUrl: 'https://gpt-summarization.p.rapidapi.com/summarize',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'gpt-summarization.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi
