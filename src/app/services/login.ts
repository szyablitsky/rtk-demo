import { baseApi as api } from "../../store/baseApi";
import { Login } from "../../store/contracts";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation<LoginUserApiResponse, LoginUserApiArg>({
      query: (queryArg) => ({
        url: `/login`,
        method: "POST",
        body: queryArg.login,
      }),
    }),
  }),
  overrideExisting: false,
});

export { injectedRtkApi as loginApi };
export type LoginUserApiResponse = /** status 200 successful operation */ {
  key?: string;
};
export type LoginUserApiArg = {
  login: Login;
};

export const { useLoginUserMutation } = injectedRtkApi;
