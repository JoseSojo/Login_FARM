import { ReactNode } from "react";
import { Navbar } from "../components/Navigation";

interface Props {
    children: ReactNode
}

export const BasciLayout: React.FC<Props> = ({children}) => {

    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}