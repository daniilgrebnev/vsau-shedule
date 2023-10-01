import React from 'react'

interface ICalendar {
    day: string
    dayOfWeek: string
    month: string
}

const Calendar = ({day, dayOfWeek, month}: ICalendar) => {

    return (
        <div className=' w-[150px] relative rounded-lg overflow-hidden'>
            <div className="absolute w-full -top-4 left-0 z-40 flex items-center justify-center">
                <div className=" w-9/12 flex items-center justify-between">
                    <div className="h-4 w-1 bg-gray-200"></div>
                    <div className="h-4 w-1 bg-gray-200"></div>
                </div>
            </div>
            <div
                className="first-letter:uppercase py-1 border-b-4 border-transparent mb-1 bg-black text-center text-xl ">{dayOfWeek}</div>
            <div className="pt-6 bg-black flex items-center justify-center text-6xl font-semibold">
                <p>{day}</p>
            </div>
            <div className="first-letter:uppercase bg-black text-center text-xl py-1">{month}</div>
        </div>
    )
}
export default Calendar
