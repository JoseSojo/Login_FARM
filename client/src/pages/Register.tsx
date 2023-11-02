import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { RegisterData } from "../types/AuthType";
import { useRegister } from "../hooks/useRegister";

export const RegisterPage = () => {
    const auth = useAuth();

    const [data, setData] = useState<RegisterData>({username:'',email:'',password:''});
    const navigate = useNavigate();

    if(auth.session === true) { 
        return <Navigate to='/login' />
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {   
        const newData: RegisterData = {
            ...data,
            [event.target.name]: event.target.value
        }

        setData(newData);
    }

    const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();  
        const resultHooks = useRegister(data);

        console.log(resultHooks);
        if (resultHooks !== false && resultHooks !== undefined) return navigate('/login');
    
        console.log('Oops... algo anda mal');
    }    

    return (
        <div className='w-full h-full flex justify-center items-center flex-col px-10 lg:px-0'>
            <h1 className='text-4xl font-mono font-bold'>Iniciar Sesión</h1>
            <form onSubmit={HandleSubmit} className='w-full lg:w-[40%] py-5 px-5 lg:px-10 rounded-xl shadow-lg bg-white'>
                <div className='grid'>
                    <label className='font-bold text-gray-700 text-lg pl-3'>Usuario</label>
                    <input onChange={handleChange} className='p-3 rounded-md border' name='username' placeholder='steven123' />
                </div>
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