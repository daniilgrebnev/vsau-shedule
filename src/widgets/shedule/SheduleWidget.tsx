import React from 'react'
import {useAppSelector} from "@/hooks";
import {groupData} from "@/testArrays/test.data";
import weekInit from "@/features/functions/weekInit";
import Calendar from "@/features/Calendar";

const SheduleWidget = () => {


    const groups = useAppSelector(state => state.sheduleReducer.initialState.list)

    const currentArray = groups.length - 1
    const groupId = groups[currentArray]?.groupId
    const groupName = (groupData.find(item => item.id === Number(groupId)))?.name
    const subGroup = (groupData.find(item => item.id === Number(groupId)))?.sub_groups[Number(groups[currentArray].subGroup)]?.name


    const weekData = weekInit
    return (
        <div className='p-4'>
            <div className="flex items-end justify-between font-semibold text">
                <div className="flex flex-col relative h-full justify-between items-center ">

                    <div
                        className="rounded-lg border-4 py-3 px-6 bg-opacity-90 relative text-lg text-center text-white">
                        {weekData.parity}
                    </div>
                    
                    <p className="text-5xl rounded-lg  text-center py-7">{groupName}<span
                        className="lowercase">{subGroup}</span></p>
                </div>

                <Calendar month={weekData.month} day={weekData.day} dayOfWeek={weekData.dayOfWeek}/>

            </div>
            <div className='w-full p-4 h-full flex items-center justify-center'>


            </div>
        </div>
    )
}
export default SheduleWidget
