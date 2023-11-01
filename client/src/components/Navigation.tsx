import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="py-3 px-10 rounded-xl flex justify-between items-center">
            <h1 className='font-bold font-mono text-4xl text-gray-200'>FARM</h1>
            <ul className='flex gap-x-5 text-blue-500 hover:text-blue-600 font-bold'>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
            </ul>
        </nav>
    );
};