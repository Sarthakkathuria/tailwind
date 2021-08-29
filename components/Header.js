import Image from "next/image";
import {SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon,
} from '@heroicons/react/solid';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
function Header() {

    const [searchInput,setSearchInput] = useState("");
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setendDate] = useState(new Date());
    const [guest,setGuest] = useState(1);
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    const resetInput = ()=> {
        setSearchInput("");
    };

    // function reset
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate);
    }
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
            <input 
            value = {searchInput}
            onChange= {(e) => setSearchInput(e.target.value)}
            className="flex-grow pl-5 bg-transparent outline-none text-sm" type="text" placeholder="Start your search"/>
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
       {/* flex grow allows you yo extend to all the space available if we dont want to allow to grow flex=grow-0  */}
       {/* col-span will allow to span across 3 colums of grid and mx-auto will adjust from both sides of div*/}
        {searchInput && 
        <div className ="flex flex-col col-span-3 mx-auto">
            <DateRangePicker ranges={[selectionRange]}
            minDate= {new Date()}
            rangeColors= {["#FD5B61"]}
            onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-4">
                <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                <UserIcon className='h-5'/>
                <input value= {guest} onChange= {e => setGuest(e.target.value)} type="number" min={1} className="w-12 pl-2 text-lg outline-none text-red-400"/> 
            </div>
            <div className="flex">
                <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
                <button className="flex-grow text-red-500">Search</button>
            </div>

        </div>
        }
        
        </header>   
    )
}

export default Header
