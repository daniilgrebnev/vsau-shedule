import {useState} from "react";
import weekData from "@/features/functions/weekInit";

const Week = () => {
    const weekDays = [
        {
            name: 'Понедельник',
            shortName: 'Пн'
        },
        {
            name: 'Вторник',
            shortName: 'Вт'
        },
        {
            name: 'Среда',
            shortName: 'Ср'
        },
        {
            name: 'Четверг',
            shortName: 'Чт'
        },
        {
            name: 'Пятница',
            shortName: 'Пт'
        },

    ]
    const [stateDay, setStateDay] = useState<string>(weekData.dayOfWeek)


    const activeItem = (name: string) => {
        setStateDay(name.toLowerCase())
    }
    console.log(stateDay)
    console.log('today ' + weekData.dayOfWeek)
    return (
        <div className='flex w-full justify-between gap-1'>
            {
                weekDays.map((item) => (
                    <div className='w-full' key={item.name}>
                        <div
                            className={`${item.name.toLowerCase() === weekData.dayOfWeek ? 'border-t-4 border-green-400' : 'border-t-4 border-black'} bg-black overflow-hidden text-center ${item.name.toLowerCase() == stateDay ? 'w-[150px]' : 'w-[50px]'}  py-3 rounded-lg transition-all`}
                            onClick={() => activeItem(item.name)}>
                            {item.name.toLowerCase() == stateDay ? item.name : item.shortName}

                        </div>

                    </div>
                ))
            }
        </div>
    )
}
export default Week
