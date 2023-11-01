import { useNavigate } from "react-router-dom";
import { LoginData } from "../types/AuthType";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export const LoginPage = () => {
    const [data, setData] = useState<LoginData>({email:'',password:''});
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {   
        const newData: LoginData = {
            ...data,
            [event.target.name]: event.target.value
        }
        setData(newData);
    }

    const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();  
        const resultHooks = useLogin(data);
        console.log('result', resultHooks);

        if (resultHooks) return navigate('/profile');
        console.log('Oops... algo anda mal');
    }    

    return (
        <div className='w-full h-full flex justify-center items-center flex-col px-10 lg:px-0'>
            <h1 className='text-4xl font-mono font-bold'>Iniciar Sesión</h1>
            <form onSubmit={HandleSubmit} className='w-full lg:w-[40%] py-5 px-5 lg:px-10 rounded-xl shadow-lg bg-white'>
                <div className='grid'>
                    <label className='font-bold text-gray-700 text-lg pl-3'>Correo Electrónico</label>
                    <input onChange={handleChange} type='email' className='p-3 rounded-md border' name='email' placeholder='steven123' />
                </div>
                <div className='grid'>
                    <label className='font-bold text-gray-700 text-lg pl-3'>Contraseña</label>
                    <input onChange={handleChange} type='password' className='p-3 rounded-md border' name='password' placeholder='steven123' />
                </div>
                <div className='flex justify-end mt-10'>
                    <input type='submit' className='p-3 rounded-md border bg-amber-500 hover:bg-amber-600 font-bold text-gray-950 w-[50%]' name='username' placeholder='steven123' />
                </div>
            </form>
        </div>
    )
}