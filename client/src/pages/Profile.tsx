import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useServiceUser } from "../hooks/useServiceUser";
import { FormTask } from "../components/FormTask";
import { CardBasic } from "../layouts/CardBasic";
import { ContainerTask } from "../components/ContainerTask";
import { TaskList } from "../types/TaskType";
import { useEffect, useState } from "react";
import { BASIC_URL } from "../constans";

export const ProfilePage = () => {
    const auth = useAuth();
    const {user} = useServiceUser();
    const [taskList, setTaskList] = useState<TaskList | null>(null);
    const [change, setChange] = useState(false);

    useEffect(()=>{
        if(change === false) return
        fetch(`${BASIC_URL}/task`, { "headers":{"token":`${window.localStorage.getItem('token')}`} })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                const task = response.body.lenght <= 0 ? null : response.body
                setTaskList(task);
                setChange(false);
            })


    }, [change])

    if(auth.session === false) {
        return <Navigate to='/login' />
    }

    return (
        <>
            <header className='w-full flex justify-evenly items-center bg-stone-400 rounded-t-xl'>
                <h2 className='text-xl flex items-center'><b className='text-cyan-900 text-4xl font-mono'>Welcome</b>, @{user.username} </h2>
                <nav>
                    <ul className='flex items-center'>
                        <li className='font-mono font-bold text-md text-gray-800 p-6 transition-colors hover:bg-stone-500 hover:text-gray-950 cursor-pointer'>
                            #1
                        </li>
                        <li className='font-mono font-bold text-md text-gray-800 p-6 transition-colors hover:bg-stone-500 hover:text-gray-950 cursor-pointer'>
                            #2
                        </li>
                        <li className='font-mono font-bold text-md text-gray-800 p-6 transition-colors hover:bg-stone-500 hover:text-gray-950 cursor-pointer'>
                            #3
                        </li>
                    </ul>
                </nav>
            </header>

            <main className='mt-5'>
                <h1 className='text-4xl font-mono text-stone-800 text-center'>CRUD FARM</h1>
                <div className='grid grid-cols-1 lg:grid-cols-[40%_60%] gap-5 px-10'>
                    <FormTask update={setChange} />
                    <div>
                        {
                            taskList !== null
                            ? <CardBasic>
                                <ContainerTask list={taskList} update={setChange} />
                            </CardBasic>
                            : <>
                                <button onClick={()=>{setChange(true)}}>
                                    ver tareas
                                </button>
                                {
                                    taskList !== null
                                    ? <>valla, parece que aun no tienes tareas</>
                                    : <></>
                                }
                            </>
                        }
                    </div>
                </div>
            </main>
            
        </>
    )
}