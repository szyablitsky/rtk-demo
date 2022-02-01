export type Chat = {
  id?: number;
  name?: string;
};

export type Firm = {
  id?: number;
  title?: string;
};

export type User = {
  id?: number;
  name?: string;
  email?: string;
  role?: string;
  firmId?: number;
  firm?: Firm;
};

export type Message = {
  id?: number;
  chatId?: number;
  chat?: Chat;
  userId?: number;
  user?: User;
  text?: string;
  readAt?: string;
  createdAt?: string;
};

export type Login = {
  email?: string;
  password?: string;
};
