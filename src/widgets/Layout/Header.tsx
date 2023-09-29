'use client'
import React, {useState} from 'react'
import LogoIcon from "@/entities/icons/LogoIcon";
import Search from "@/features/Search";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {searchHandler} from "@/store/slices/searchSlice";
import SettingsIcon from "@/entities/icons/SettingsIcon";
import Link from "next/link";
import SearchIcon from "@/entities/icons/SearchIcon";

const Header = () => {
    const open = useAppSelector(store => store.searchReducer.open)
    const dispatch = useAppDispatch()
    const [openSearch, setOpenSearch] = useState(open)
    console.log(openSearch)
    return (
        <div
            className='flex items-end w-full justify-between p-4 rounded-b-2xl bg-black'>
            <div className="flex items-end justify-between">
                <div className="flex items-center"><LogoIcon fill='white' width={40}/></div>

                <div className="text-center text-2xl font-semibold ml-3">Расписание</div>
            </div>
            <div className="flex items-center justify-between w-1/5">
                <div className="flex items-start justify-center relative -top-1"
                     onClick={() => dispatch(searchHandler())}>
                    <SearchIcon fill='white' width={30}/>
                </div>
                <div className="flex items-start justify-center relative -top-1">
                    <Link href='settings'>
                        <SettingsIcon fill='white' width={30}/>
                    </Link>
                </div>
            </div>
            {
                open ? <div
                    className="absolute transition-all flex items-center justify-center top-0 left-0 w-full h-full bg-black bg-opacity-90 ">
                    <div className="bg-gray-900 border-1 border-white overflow-hidden w-full h-full ">
                        <Search/>
                    </div>
                </div> : <></>
            }


        </div>
    )
}
export default Header
