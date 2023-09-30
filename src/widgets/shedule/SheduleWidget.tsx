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
        <div>
            <div className="flex items-center justify-between p-4 font-semibold text">
                <Calendar/>
                <div className="px-4 py-2 bg-white text-black rounded-lg bg-opacity-90">{weekData.parity}</div>
            </div>
            <div className='w-full p-4 h-full flex items-center justify-center'>


                <div className="my-10">
                    <div className="my-2 flex items-center justify-start">Выбранная подгруппа: <div
                        className='px-10 mx-3 font-normal py-2 bg-white bg-opacity-90 text-black rounded-lg'>{subGroup}</div>
                    </div>
                    <div className="my-2 flex items-center justify-start">Выбранная группа: <div
                        className='px-10 mx-3 font-normal py-2 bg-white  bg-opacity-90 text-black rounded-lg'>{groupName}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default SheduleWidget
