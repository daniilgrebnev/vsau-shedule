import React from 'react'
import {useAppSelector} from "@/hooks";
import anything from "@/testArrays/schedule.json"

const Lessons = ({day, id}: any) => {
    const Schedule = anything
    console.log(id)
    const getGroups = useAppSelector(state => state.sheduleReducer.initialState.list)

    const groupId = Number(getGroups[getGroups.length - 1].groupId)

    const currentShedule = Schedule.find(item => item.id === groupId)

    console.log(currentShedule?.lessons[5].numerator)

    return (

        <div className=" flex flex-col w-full   justify-center gap-y-2">
            {currentShedule?.lessons[id - 1]?.numerator.map(item => (
                <div
                    className='p-2 bg-bg-header relative rounded-lg w-[90%] mx-auto'>
                    <div className=" w-full text-left text-sm ">
                        <div className="">{item.time_start} - {item.time_end}</div>

                    </div>
                    <div className="">
                        <div className="mt-5 flex items-center w-full justify-start">
                            <div className="">{item.name}</div>
                            <div className="mx-3 px-2 py-1 bg-bg-main rounded-lg">{item.room}</div>
                        </div>
                        <div
                            className="absolute top-1 right-1 flex items-center justify-center bg-border-week w-14 h-6 rounded-lg">{item.type}</div>
                        <div className="mt-2">{item.teacher}</div>
                    </div>
                </div>
            ))}
        </div>

    )
}
export default Lessons
