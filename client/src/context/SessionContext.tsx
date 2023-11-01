import { ReactNode, createContext, useState } from "react";
import { AuthInterface } from "../types/ContextType";



const InitialContext: AuthInterface = {
    session: false,
    updateSession: () => {}
}

export const AuthContext = createContext(InitialContext)

export function AuthProvide({ children }: {children: ReactNode}) {
    const sess = JSON.parse(`${window.localStorage.getItem('session')}`) ? true : false
    const [session, setSession] = useState(sess);
    
    return (
        <AuthContext.Provider value={{
            session: session,
            updateSession: setSession
        }} >
            {children}
        </AuthContext.Provider>
    )
}
