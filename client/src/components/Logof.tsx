import { useAuth } from "../hooks/useAuth";

export const Logoff = () => {
    const auth = useAuth();

    const handleClick = () => {
        auth.updateSession(false);

    }

    return (
        <button
            onClick={()=> { handleClick }}
            className='w-[90%] mx-auto py-5 rounded-xl bg-cyan-400 hover:bg-cyan-500 font-bold font-mono'
        >
            salir    
        </button>
    );
}
