import { ReactNode, createContext, useState } from "react";
import { AuthInterface } from "../types/ContextType";



const InitialContext: AuthInterface = {
    session: false,
    updateSession: () => {}
}

export const AuthContext = createContext(InitialContext)

export function AuthProvide({ children }: {children: ReactNode}) {
    let sess: boolean;

    try {
        JSON.parse(`${window.localStorage.getItem('session')}`)
        sess = true
    } catch (error) {
        sess = false
    }

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
