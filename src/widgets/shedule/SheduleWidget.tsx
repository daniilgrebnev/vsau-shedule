import React from 'react'
import {useAppSelector} from "@/hooks";
import {groupData} from "@/testArrays/test.data";
import weekInit from "@/features/functions/weekInit";

const SheduleWidget = () => {


    const groups = useAppSelector(state => state.sheduleReducer.initialState.list)

    const currentArray = groups.length - 1
    const groupId = groups[currentArray]?.groupId
    const groupName = (groupData.find(item => item.id === Number(groupId)))?.name
    const subGroup = (groupData.find(item => item.id === Number(groupId)))?.sub_groups[Number(groups[currentArray].subGroup)]?.name


    const weekData = weekInit
    return (
        <div className='p-4 py-1'>
            <div className="flex items-start justify-between font-semibold text">
                <div className="bg-black rounded-bl-lg px-3 py-1">{weekData.parity}</div>
                <div className="bg-black px-3 py-1 first-letter:uppercase">{weekData.dayOfWeek}</div>
                <div className="bg-black rounded-br-lg px-3 py-1">{weekData.day}</div>
            </div>

            <div className="mt-7 text-center"><span
                className='text-2xl font-semibold'>{groupName}{subGroup}</span></div>
            <div className='w-full p-4 h-full flex items-center justify-center'>
                

            </div>
        </div>
    )
}
export default SheduleWidget
