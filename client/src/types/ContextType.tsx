import { Dispatch, SetStateAction } from "react";

export interface AuthInterface {
    session: boolean,
    updateSession: Dispatch<SetStateAction<boolean>>
}