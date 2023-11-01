import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const RouterProtect = () => {
    const auth = useAuth();
    console.log(auth.session);

    return auth.session ? <Outlet /> : <Navigate to='/login' />
}

export const RouterNotProtect = () => {
    const auth = useAuth();
    console.log(auth.session);

    return auth.session ? <Navigate to='/profile' /> : <Outlet />
}
