import React from 'react'
import LogoIcon from "@/entities/icons/LogoIcon";
import SearchIcon from "@/entities/icons/SearchIcon";

const Header = () => {
    return (
        <div
            className='flex items-end w-full justify-between p-4 rounded-b-3xl bg-opacity-50 bg-black'>
            <div className=""><LogoIcon fill='white' width={40}/></div>
            <div className="absolute bottom-0 left-0 w-5 h-5 bg-red-700 z-10"></div>
            <div className="text-center text-2xl font-semibold">Расписание</div>
            <div className="flex items-start justify-center relative -top-1">
                <SearchIcon fill='white' width={30}/>
            </div>
        </div>
    )
}
export default Header
