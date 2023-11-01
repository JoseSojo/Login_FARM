import { useContext } from "react";
import { AuthContext } from "../context/SessionContext";


export const useAuth = () => useContext(AuthContext);
