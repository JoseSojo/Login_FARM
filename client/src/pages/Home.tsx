import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"

export const HomePage = () => {
    const auth = useAuth();

    if(auth.session === false) {
        return <Navigate to='/login' />
    }

    return (
        <>
            Home
        </>
    )
}