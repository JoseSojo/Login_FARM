import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const InitPage = () => {
    const auth = useAuth();

    if(auth.session === true) {
        return <Navigate to='/login' />
    }

    return (
        <>
            Init
        </>
    )
}