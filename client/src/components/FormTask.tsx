import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";
import { CardBasic } from "../layouts/CardBasic";
import { BASIC_URL } from "../constans";

export const FormTask = ({update}: {update: Dispatch<SetStateAction<boolean>>}) => {

    const [title, setTitle] = useState('');

    const handleSubmit = (event: FormEvent ) => {
        event.preventDefault();
        const send = { title: title }
        const requesOptions = {
            method: 'POST',
            headers: {
                "token": `${window.localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(send)
        }

        fetch(`${BASIC_URL}/task`, requesOptions)
            .then(res => res.json())
            .then((response) => {
                console.log(response)
                update(true);
            })


    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    return (
        <CardBasic>
            <form className='w-[95%]  mx-auto h-auto p-5 bg-stone-300 rounded-xl' onSubmit={handleSubmit}>
                <h1 className='text-xl text-center font-bold text-cyan-900'>Crear Tarea</h1>
                <div className='grid grid-cols-[30%_70%] lg:grid-cols-1'>
                    <label htmlFor="" className='text-lg font-mono text-gray-700 font-bold'>Titulo</label>
                    <input onChange={handleChange} type='text' name='title' placeholder='Mi titulo es....' className='rounded-md w-full p-3 bg-gray-100 focus:outline-none' />
                </div>
                <div className='grid grid-cols-[30%_70%] lg:grid-cols-1'>
                    <input type='submit' className='font-bold cursor-pointer rounded-md w-full p-3 bg-cyan-400 hover:bg-cyan-500 mt-4 focus:outline-none' />
                </div>
            </form>
        </CardBasic>
    );
}
