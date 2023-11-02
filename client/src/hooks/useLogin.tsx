import { BASIC_URL } from "../constans";
import { LoginData } from "../types/AuthType";

export const useLogin = (data: LoginData) => {
    const SendDataPost = async (data: LoginData): Promise<boolean> => {
        const RequesOptions = {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }

        try {
            const res = await fetch(`${BASIC_URL}/auth/login`, RequesOptions);
            console.log(res);
            if (!res.ok) throw new Error('ERROR_IN_LOGIN');
            window.localStorage.setItem('session', JSON.stringify(true));

            const response = await res.json();
            if(response.response == 'SUCCESS_AUTH_LOGIN') {
                const saveUser = {
                    id: `${response.body.user.id}`,
                    username: `${response.body.user.username}`,
                    password: '',
                    email: `${response.body.user.email}`,
                    date: `${response.body.user.date}`,
                    profile_id: `${response.body.user.profile_id}`
                }

                const saveProfile = {
                    id: `${response.body.profile.id}`,
                    country: `${response.body.profile.country}`,
                    city: `${response.body.profile.city}`,
                    photo_profile: `${response.body.profile.photo_profile}`
                }  

                window.localStorage.setItem('token', `${response.token}`)
                window.localStorage.setItem('profile', JSON.stringify(saveProfile));
                window.localStorage.setItem('user', JSON.stringify(saveUser));

                return true
            }

            return false
        } catch (error) {
            console.log(error);
            return false
        }
    }

    try {
        if(data.email == '' && data.password == '') throw new Error('DATA_NOT_COMPLETED')

        return SendDataPost(data)
        
    } catch (error) {
        console.log(error)
        return false
    }
}
