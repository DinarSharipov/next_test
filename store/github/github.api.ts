import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerResponse } from '../../models/server';
import { IUser } from '../../models/user';

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (build) => ({
    searchUsers: build.query<ServerResponse<IUser>, string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
        },
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getUserRepos: build.query<any, string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
});

export const {
  useSearchUsersQuery,
  useLazyGetUserReposQuery,
} = githubApi;
