import { baseApi as api } from "../../store/baseApi";
import type { Firm } from "../../store/contracts";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFirms: build.query<GetFirmsApiResponse, GetFirmsApiArg>({
      query: () => ({ url: `/firms` }),
      providesTags: ["Users"],
    }),
    getFirm: build.query<GetFirmApiResponse, GetFirmApiArg>({
      query: (queryArg) => ({ url: `/firms/${queryArg.id}` }),
      providesTags: ["Users"],
    }),
  }),
  overrideExisting: false,
});

export { injectedRtkApi as firmsAPi };
export type GetFirmsApiResponse = /** status 200 successful operation */ Firm[];
export type GetFirmsApiArg = void;
export type GetFirmApiResponse = /** status 200 successful operation */ Firm;
export type GetFirmApiArg = { id: number };

export const { useGetFirmsQuery, useGetFirmQuery } = injectedRtkApi;
