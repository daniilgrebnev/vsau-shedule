import React from 'react'
import {useAppSelector} from "@/hooks";
import weekInit from "@/features/functions/weekInit";
import Week from "@/widgets/shedule/Week";
import groupss from "@/testArrays/groups.json"

const SheduleWidget = () => {

    const Groups = groupss

    const groups = useAppSelector(state => state.sheduleReducer.initialState.list)

    const currentArray = groups.length - 1

    const groupName = (Groups.find(item => item.id === Number(groups[currentArray].groupId)))?.name


    const weekData = weekInit
    return (
        <div className='px-2 py-1 h-full'>
            <div className="flex items-start mx-2 gap-1 text-center justify-between font-semibold text">
                <div
                    className="bg-bg-header rounded-bl-lg border-b-2 border-b-border-week px-3 w-1/2 py-2">{weekData.parity}</div>
                <div
                    className="bg-bg-header rounded-br-lg border-b-2 border-b-border-week px-3 w-1/2 py-2">{weekData.day}</div>
            </div>

            <div className="my-12 text-center"><span
                className='text-5xl font-semibold'>{groupName}</span></div>
            <div className='w-full  h-full flex items-center justify-center'>
                <Week/>
            </div>
        </div>
    )
}
export default SheduleWidget
