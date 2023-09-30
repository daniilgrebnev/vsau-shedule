import React from 'react'

interface ICalendar {
    day: string
    dayOfWeek: string
    month: string
}

const Calendar = ({day, dayOfWeek, month}: ICalendar) => {

    return (
        <div className='border-4 border-gray-200 w-[150px] relative rounded-lg h-'>
            <div className="absolute w-full -top-4 left-0 z-40 flex items-center justify-center">
                <div className=" w-9/12 flex items-center justify-between">
                    <div className="h-4 w-1 bg-gray-200"></div>
                    <div className="h-4 w-1 bg-gray-200"></div>
                </div>
            </div>
            <div
                className="first-letter:uppercase py-1 border-b-4 border-white text-center border-s text-xl ">{dayOfWeek}</div>
            <div className="pt-6 flex items-center justify-center text-6xl font-semibold">
                <p>{day}</p>
            </div>
            <div className="first-letter:uppercase text-center text-xl py-1">{month}</div>
        </div>
    )
}
export default Calendar
