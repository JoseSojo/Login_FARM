import { ReactNode } from "react";
import { Slide } from "../components/Slide";

interface Props {
    children: ReactNode
}

export const BasciLayout: React.FC<Props> = ({children}) => {

    return (
        <div className='flex flex-col gap-y-5 w-full min-h-screen bg-stone-900 lg:p-5 p-3'>
            <div className='grid grid-cols-1 lg:grid-cols-[20%_80%] h-full flex-1'>
                <Slide />
                <div className='bg-stone-200 h-full rounded-xl'>
                    {children}
                </div>
            </div>
        </div>
    )
}