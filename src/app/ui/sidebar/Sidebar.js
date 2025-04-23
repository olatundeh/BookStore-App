import Link from 'next/link';
import NavLinks from './NavLinks';
import Logo from './Logo';

const Sidebar = () => {
    return (
        <div>
            <Link href="/store" className='bg-purple-500 flex h-20 items-end justify-start rounded-md p-4'>
                <div className='w-32 md:w-40'>
                    <Logo/>
                </div>
            </Link>
            <NavLinks />
            <form>
                <button>Sign Out</button>
            </form>
        </div>
    );
}

export default Sidebar;