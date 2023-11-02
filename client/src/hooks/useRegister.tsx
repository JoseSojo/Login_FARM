import { BASIC_URL } from "../constans";
import { RegisterData } from "../types/AuthType";

export const useRegister = (data: RegisterData) => {
    const SendDataPost = async (data: RegisterData) => {
        const RequesOptions = {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }

        try {
            const res = await fetch(`${BASIC_URL}/auth/register`, RequesOptions)

            console.log(res);
            if (!res.ok) throw new Error('ERROR_IN_REGISTER');
            const response = res.json();

            console.log(response)
            return response
        } catch (error) {
            console.log(error);
            return false
        }
    }

    try {
        if(data.email == '' && data.password == '' && data.username == '' ) throw new Error('DATA_NOT_COMPLETED')

        SendDataPost(data)
            .then(val => {
                return val
            })
            .catch(err => {
                console.log(err);
                return false
            })
        
    } catch (error) {
        console.log(error)
        return false
    }
}
