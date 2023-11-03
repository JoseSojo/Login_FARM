export interface UserData {
    id: string,
    username: string,
    password: string,
    email: string,
    date: string,
    profile_id: string,
}

export interface ProfileData {
    city: string,
    country: string,
    id: string,
    photo_profile: string,
}

export interface CompletedUser {
    user: UserData,
    profile: ProfileData
}
