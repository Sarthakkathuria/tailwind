import Image from "next/image";
import {SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon,
} from '@heroicons/react/solid';


function Header() {
    return (
        // z index is used to always keep header on top and header is sticky and will stick at top for grid view 
        // and grid view has 3 col shadow   
        <header className="sticky top-0 z-50 grid grid-cols-3 
        bg-white shadow-md p-5 md:px-10">     
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            {/* Left  */}
            <Image 
                src='https://links.papareact.com/qd3'
                layout = 'fill'
                objectFit ="contain" objectPosition ="left"
            />
        </div>
        {/* Middle */}
        <div className="flex items-center md:border-2 rounded-full
        py-2 ">
            <input className="flex-grow pl-5 bg-transparent outline-none text-sm" type="text" placeholder="Start your search"/>
            {/* initially it is hidden once we use md:inline-flex it will be visible is full screen */}
            <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 icon
            text-white rounded-full p-2 cursor-pointer md:mx-2"/>
        </div>
            {/* Right */}
        <div className="flex items-center justify-end text-gray-500 space-x-4">
            <p className="hidden md:inline">Become a host</p>
            <GlobeAltIcon className="h-6 cursor-pointer" />
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                <MenuIcon  className="h-6"/>
                <UserCircleIcon className="h-6" />
            </div>
        </div>

        
        </header>   
    )
}

export default Header
