'use client'
import React, {useState} from 'react'
import LogoIcon from "@/entities/icons/LogoIcon";
import SearchIcon from "@/entities/icons/SearchIcon";
import Search from "@/features/Search";

const Header = () => {
    const [openSearch, setOpenSearch] = useState(false)
    return (
        <div
            className='flex items-end w-full justify-between p-4 rounded-b-3xl bg-black'>
            <div className=""><LogoIcon fill='white' width={40}/></div>
            <div className="absolute bottom-0 left-0 w-5 h-5 bg-red-700 z-10"></div>
            <div className="text-center text-2xl font-semibold">Расписание</div>
            <div className="flex items-start justify-center relative -top-1" onClick={() => setOpenSearch(true)}>
                <SearchIcon fill='white' width={30}/>
            </div>
            {
                openSearch ? <div
                    className="absolute flex items-center justify-center top-0 left-0 w-full h-full bg-black bg-opacity-90 p-4">
                    <div className="bg-gray-900 border-1 border-white overflow-hidden rounded-xl w-[80%] h-[80%]">
                        <div className="absolute right-3 top-3 text-red-500 text-xl"
                             onClick={() => setOpenSearch(false)}>X
                        </div>
                        <Search/>
                    </div>
                </div> : <></>
            }


        </div>
    )
}
export default Header
