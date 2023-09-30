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
        <div className='p-2'>
            <div className="flex items-end justify-between px-4 font-semibold text">
                <div className="grid grid-rows-2 justify-around items-center ">
                    <p className="text-3xl rounded-lg text-center py-2">{groupName}<span
                        className="lowercase">{subGroup}</span></p>
                    <div
                        className="rounded-lg overflow-hidden bg-opacity-90 w-[150px] relative text-xl text-center text-white">
                        <div className={`w-full bg-green-600 top-1/2 left-0 h-1/2 absolute z-10`}></div>
                        <div className="py-3 relative z-40">Числитель</div>
                        <div className="w-full relative z-40 h-[5px] bg-white "></div>
                        <div className="py-3 relative z-40">Знаменатель</div>
                    </div>
                </div>
                <Calendar month={weekData.month} day={weekData.day} dayOfWeek={weekData.dayOfWeek}/>

            </div>
            <div className='w-full p-4 h-full flex items-center justify-center'>


            </div>
        </div>
    )
}
export default SheduleWidget
