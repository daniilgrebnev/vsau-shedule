import React from 'react'

const Calendar = () => {
    return (
        <div className='border-4 w-[200px] relative rounded-lg border-white border-s'>
            <div className="py-1 bg-red-400 border-b-4 border-white text-center border-s text-xl ">Суббота</div>
            <div className="pt-6 flex items-center justify-center text-8xl">
                <p>30</p>
            </div>
            <div className=" text-center border-s text-2xl py-1  ">Сентября</div>
        </div>
    )
}
export default Calendar
