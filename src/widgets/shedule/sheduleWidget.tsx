'use client'
import React from 'react'
import {useAppSelector} from "@/hooks";
import {groupData} from "@/testArrays/test.data";

const SheduleWidget = () => {

    const groups = useAppSelector(state => state.sheduleReducer.initialState.list)

    const currentArray = groups.length - 1
    const groupId = groups[currentArray].groupId
    const a = (groupData.find(item => item.id === groupId))?.name


    return (
        <div className='w-full p-4 h-full flex items-center justify-center'>
            <div className="my-10">
                <div className="my-2 flex items-center justify-start">Выбранная группа: <p
                    className='px-10 mx-3 py-2 bg-white bg-opacity-30 rounded-lg'> {groups[currentArray].sub_group}</p>
                </div>
                <div className="my-2 flex items-center justify-start">Выбранная подгруппа: <p
                    className='px-10 mx-3 py-2 bg-white bg-opacity-30 rounded-lg'>{a}</p></div>
            </div>
        </div>
    )
}
export default SheduleWidget
