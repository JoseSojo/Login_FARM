import { Dispatch, SetStateAction } from "react";
import { BASIC_URL } from "../constans";
import { TaskList } from "../types/TaskType";

export const ContainerTask = ({list, update}: {list:TaskList, update: Dispatch<SetStateAction<boolean>>}) => {

    const deleteItem = (id: string) => {
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
                "token":`${window.localStorage.getItem('token')}`
            }
        }
        fetch(`${BASIC_URL}/task/${id}`, requestOptions)
            .then(res => res.json())
            .then(response => {
                console.log(response);
                update(true);
            })
    }

    return (
        <ul className='grid w-full gap-3'>
            {
                list.map(item => (
                    <li key={item.id} className='bg-stone-300 grid grid-cols-[10%_40%_50%] w-full  py-2 rounded-xl'>
                        <input type='checkbox' />
                        <span className='text-md font-bold text-gray-800 flex justify-center items-center'>{item.title}</span>
                        <div className='flex'>
                            <button 
                                onClick={()=>{deleteItem(item.id)}}
                                className='flex-1 text-center font-mono py-2 text-lg font-bold bg-red-400 hover:bg-red-500'
                                >
                                eliminar
                            </button>    
                            <button className='flex-1 text-center font-mono py-2 text-lg font-bold bg-green-400 hover:bg-green-500'>actualizar</button>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}

