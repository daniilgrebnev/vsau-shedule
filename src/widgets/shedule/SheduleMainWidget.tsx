'use client'
import React from 'react'
import {useAppDispatch, useAppSelector} from "@/hooks";
import SearchIcon from "@/entities/icons/SearchIcon";
import {searchHandler} from "@/store/slices/searchSlice";
import SheduleWidget from "@/widgets/shedule/SheduleWidget";

const SheduleMainWidget = () => {
    const dispatch = useAppDispatch()
    const groups = useAppSelector(state => state.sheduleReducer.initialState.list)
    const groupId = groups[groups.length - 1]?.groupId
    const subGroup = groups[groups.length - 1]?.subGroup

    return (
        <div>{
            groupId == "null" && subGroup == "null" ?
                <div
                    className='className="w-full p-4 h-[90dvh] font-semibold text-2xl flex items-center justify-center'>
                    <div className="">
                        <div className="font-normal">Выберете группу</div>
                        <div
                            className="flex items-center  w-9/12 justify-between py-3 px-5 bg-black bg-opacity-70 rounded-lg mx-auto my-4 font-normal text-xl ">
                            <p>Поиск</p>
                            <p className='flex items-start justify-end w-full'
                               onClick={() => dispatch(searchHandler())}>

                                <SearchIcon fill={'white'} width={30}/>
                            </p>
                        </div>
                    </div>
                </div>
                :
                <SheduleWidget/>


        }</div>
    )
}
export default SheduleMainWidget
