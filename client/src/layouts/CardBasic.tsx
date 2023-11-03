import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const CardBasic: React.FC<Props> = ({ children }) => {

    return (
        <div className='bg-stone-400 w-full h-auto flex flex-col justify-center items-center rounded-xl p-5'>
            {children}
        </div>
    );
} 