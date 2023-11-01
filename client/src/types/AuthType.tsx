import { ProfileData, UserData } from "./UserType"

export interface RegisterData {
    username: string,
    email: string,
    password: string
}

export interface ResultRegisterDanger {
    detail: string
}

export interface ResultRegisterSuccess {
    response: string
}

export interface LoginData {
    email: string,
    password: string
}

export interface ResultLoginDanger {
    detail: string
}

export interface ResultLoginSuccess {
    response: string,
    token: string,
    tokenType: string,
    body: {
        user: UserData,
        profile: ProfileData
    }
}
