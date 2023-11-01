import { BASIC_URL } from "../constans";
import { LoginData, ResultLoginSuccess } from "../types/AuthType";

export const useLogin = (data: LoginData) => {
    const SendDataPost = (data: LoginData) => {
        const RequesOptions = {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }

        try {
            fetch(`${BASIC_URL}/auth/login`, RequesOptions)
                .then((res) => {
                    console.log(res);
                    if (!res.ok) return res.ok as boolean;   
                    return res.json();
                })
                .then((response: ResultLoginSuccess) => {
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
                        window.localStorage.setItem('session', JSON.stringify(true));

                        return true
                    }
                    throw new Error ('IS_NOT_MESAGE_ESPECIFIQUITE')
                })

            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    try {
        if(data.email == '' && data.password == '') throw new Error('DATA_NOT_COMPLETED')

        const resultQuery: boolean = SendDataPost(data)
        return resultQuery
        
    } catch (error) {
        console.log(error)
        return false
    }
}
