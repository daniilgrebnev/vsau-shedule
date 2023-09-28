'use client'
import React from 'react'
import {useAppSelector} from "@/hooks";
import {groupData} from "@/testArrays/test.data";

const SheduleWidget = () => {

    const groups = useAppSelector(state => state.sheduleReducer.initialState.list)

    const currentArray = groups.length - 1
    const groupId = groups[currentArray].groupId
    const groupName = (groupData.find(item => item.id === Number(groupId)))?.name
    const subGroup = (groupData.find(item => item.id === Number(groupId)))?.sub_groups[Number(groups[currentArray].subGroup)]?.name
    
    return (
        <div className='w-full p-4 h-full flex items-center justify-center'>
            <div className="my-10">
                <div className="my-2 flex items-center justify-start">Выбранная подгруппа: <p
                    className='px-10 mx-3 py-2 bg-white bg-opacity-90 text-black rounded-lg'> {subGroup}</p>
                </div>
                <div className="my-2 flex items-center justify-start">Выбранная группа: <p
                    className='px-10 mx-3 py-2 bg-white  bg-opacity-90 text-black rounded-lg'>{groupName}</p>
                </div>
            </div>
        </div>
    )
}
export default SheduleWidget
