import PHOTO from '../assets/profile.jpg';
import { useServiceUser } from '../hooks/useServiceUser';
import { CardBasic } from '../layouts/CardBasic';
import { Logoff } from './Logof';

export const Slide = () => {
    const {user, profile} = useServiceUser();
    const photo = profile.photo_profile === '' ? PHOTO : 'this';

    return (
        <div className='hidden lg:flex flex-col justify-center lg:justify-between h-full p-5'>
            <CardBasic>
                <img src={photo} className='w-[200px] h-[200px] rounded-full' />
                <h2 className='mt-5 text-xl text-cyan-700 font-bold'>@{user.username}</h2>
                <h5 className='text-md text-cyan-900 font-mono'>{user.email}</h5>
            </CardBasic>

            <CardBasic>
                <Logoff />
            </CardBasic>
        </div>
    );
}