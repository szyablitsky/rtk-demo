import { baseApi as api } from "../../store/baseApi";
import type { Chat, User } from "../../store/contracts";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getChats: build.query<GetChatsApiResponse, GetChatsApiArg>({
      query: () => ({ url: '/chats' }),
      providesTags: ['Chats'],
    }),
    addChat: build.mutation<AddChatApiResponse, AddChatApiArg>({
      query: () => ({ url: '/chats', method: 'POST' }),
      invalidatesTags: ['Users'],
    }),
    getChat: build.query<GetChatApiResponse, GetChatApiArg>({
      query: (queryArg) => ({ url: `/chats/${queryArg.id}` }),
      providesTags: ['Chats', 'Messages'],
    }),
    updateChat: build.mutation<UpdateChatApiResponse, UpdateChatApiArg>({
      query: (queryArg) => ({ url: `/chats/${queryArg.id}`, method: 'PATCH' }),
      invalidatesTags: ['Users'],
    }),
    getChatUsers: build.query<GetChatUsersApiResponse, GetChatUsersApiArg>({
      query: (queryArg) => ({
        url: `/user-chats`,
        params: { chatId: queryArg.chatId, _expand: queryArg._expand },
      }),
      providesTags: ['Users', 'Chats'],
    }),
  }),
  overrideExisting: false,
});

export { injectedRtkApi as chatApi };
export type GetChatsApiResponse = /** status 200 successful operation */ Chat[];
export type GetChatsApiArg = void;
export type AddChatApiResponse = /** status 200 successful operation */ Chat;
export type AddChatApiArg = {
  chat: Chat;
};
export type GetChatApiResponse = /** status 200 successful operation */ Chat;
export type GetChatApiArg = {
  id: number;
};
export type UpdateChatApiResponse = /** status 200 successful operation */ Chat;
export type UpdateChatApiArg = {
  id: number;
  chat: Chat;
};
export type GetChatUsersApiResponse =
  /** status 200 successful operation */ User[];
export type GetChatUsersApiArg = {
  chatId?: number;
  _expand?: ("user" | "chat")[];
};

export const {
  useGetChatsQuery,
  useAddChatMutation,
  useGetChatQuery,
  useUpdateChatMutation,
  useGetChatUsersQuery,
} = injectedRtkApi;
