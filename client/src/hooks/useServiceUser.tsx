import { CompletedUser, ProfileData, UserData } from "../types/UserType";


export const useServiceUser = (): CompletedUser => {
    const user: UserData = JSON.parse(`${window.localStorage.getItem('user')}`);
    const profile: ProfileData = JSON.parse(`${window.localStorage.getItem('profile')}`);

    const forReturn:CompletedUser = {
        user: user,
        profile: profile
    }

    return forReturn;
}