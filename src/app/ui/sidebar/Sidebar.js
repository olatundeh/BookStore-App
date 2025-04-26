import Link from 'next/link';
import NavLinks from './NavLinks';
import { ArrowLeftCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import Logo from './Logo';

const Sidebar = () => {
    return (
        <div>
            <Link href="/store" className='bg-purple-500 mb-4 flex h-20 items-end justify-start rounded-md p-4'>
                <div className='w-32 md:w-40'>
                    <Logo/>
                </div>
            </Link>
            <div className='flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
                <NavLinks />
                <form>
                    <button className='flex h-[48px] grow items-center justify-center gap-2 rounded-md'> 
                        <ArrowLeftOnRectangleIcon className='w-6'/>
                    </button>
                </form>
            </div>  
        </div>
    );
}

export default Sidebar;