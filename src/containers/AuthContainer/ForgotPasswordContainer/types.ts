import { user_login_type } from "../../../constants/user";
export interface LoginFormType {
    Email: string;
    Password: string;
}

export type ForgotPasswordPayload = {
    parentId: string,
    password: string
}

export type LoginResponse = {
    email: string,
    token: string,
}