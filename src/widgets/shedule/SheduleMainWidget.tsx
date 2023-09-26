'use client'
import React from 'react'
import {useAppDispatch, useAppSelector} from "@/hooks";
import SheduleWidget from "@/widgets/shedule/SheduleWidget";
import SearchIcon from "@/entities/icons/SearchIcon";
import {searchHandler} from "@/store/slices/searchSlice";

const SheduleMainWidget = () => {

    const groups = useAppSelector(state => state.sheduleReducer.initialState.list)
    const dispatch = useAppDispatch()
    return (
        <div>{
            groups.length == 0 ?
                <div
                    className='className="w-full p-4 h-[90dvh] font-semibold text-2xl flex items-center justify-center'>
                    <div className="">
                        <div className="">Выберете группу</div>
                        <div
                            className="flex items-center  justify-between py-6 px-6 bg-black bg-opacity-70 rounded-lg mx-auto my-4 font-normal text-xl ">
                            <p className='flex items-center justify-center w-full'
                               onClick={() => dispatch(searchHandler())}>

                                <SearchIcon fill={'white'} width={50}/>
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
