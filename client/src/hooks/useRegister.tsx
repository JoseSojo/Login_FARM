import { BASIC_URL } from "../constans";
import { RegisterData } from "../types/AuthType";

export const useRegister = (data: RegisterData): boolean => {
    const SendDataPost = (data: RegisterData): boolean => {
        const RequesOptions = {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }

        try {
            fetch(`${BASIC_URL}/auth/register`, RequesOptions)
                .then((res) => {
                    if (!res.ok) return res.ok as boolean;   
                    return res.json();
                })
                .then((response) => {
                    if(response.response == 'SUCCESS_AUTH_REGISTER') return true
                })

            return true
        } catch (error) {
            return false
        }
    }

    try {
        if(data.email == '' && data.password == '' && data.username == '' ) throw new Error('DATA_NOT_COMPLETED')

        const resultQuery: boolean = SendDataPost(data)
        return resultQuery
        
    } catch (error) {
        console.log(error)
        return false
    }
}
