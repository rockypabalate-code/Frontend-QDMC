export type UserRole = "admin" | "user" | "hr" | "manager";
export type UserStatus = "active" | "pending" | "inactive";

export type User = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  password: string;
};

export type AuthSession = {
  token: string;
  user: User;
};
