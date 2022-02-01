import { baseApi as api } from "../../store/baseApi";
import { User } from "../../store/contracts";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<GetUsersApiResponse, GetUsersApiArg>({
      query: (queryArg) => ({
        url: `/users`,
        params: { _expand: queryArg._expand },
      }),
      providesTags: ["Users"],
    }),
    addUser: build.mutation<AddUserApiResponse, AddUserApiArg>({
      query: (queryArg) => ({
        url: `/users`,
        method: "POST",
        body: queryArg.user,
      }),
      invalidatesTags: ["Users"],
    }),
    getUser: build.query<GetUserApiResponse, GetUserApiArg>({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}`,
        params: { _expand: queryArg._expand },
      }),
      providesTags: ["Firms", "Users"],
    }),
    updateUser: build.mutation<UpdateUserApiResponse, UpdateUserApiArg>({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.user,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
  overrideExisting: false,
});

export { injectedRtkApi as usersApi };
export type GetUsersApiResponse = /** status 200 successful operation */ User[];
export type GetUsersApiArg = {
  _expand?: "firm"[];
};
export type AddUserApiResponse = /** status 200 successful operation */ User;
export type AddUserApiArg = {
  user: User;
};
export type GetUserApiResponse = /** status 200 successful operation */ User;
export type GetUserApiArg = {
  /** ID of chat */
  id: number;
  _expand?: "firm"[];
};
export type UpdateUserApiResponse = /** status 200 successful operation */ User;
export type UpdateUserApiArg = {
  /** ID of chat */
  id: number;
  user: User;
};

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} = injectedRtkApi;
