
export const Slide = () => {
    return (
        <div className='h-full w-full rounded-xl'>
            <ul className='h-full flex flex-col justify-center items-center'>
                <li className='font-bold text-gray-500 transition-colors hover:bg-stone-950 py-3 w-full text-center'>#1</li>
                <li className='font-bold text-gray-500 transition-colors hover:bg-stone-950 py-3 w-full text-center'>#2</li>
                <li className='font-bold text-gray-500 transition-colors hover:bg-stone-950 py-3 w-full text-center'>#3</li>
                <li className='font-bold text-gray-500 transition-colors hover:bg-stone-950 py-3 w-full text-center'>#4</li>
                <li className='font-bold text-gray-500 transition-colors hover:bg-stone-950 py-3 w-full text-center'>#5</li>
                <li className='font-bold text-gray-500 transition-colors hover:bg-stone-950 py-3 w-full text-center'>#6</li>
            </ul>
        </div>
    );
}