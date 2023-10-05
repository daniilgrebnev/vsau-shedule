import {useState} from "react";

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
    const [stateDay, setStateDay] = useState<string>()


    const activeItem = (name: string) => {
        setStateDay(name.toLowerCase())
        console.log(stateDay)
    }
    return (
        <div className='flex w-full justify-between gap-1'>
            {
                weekDays.map((item, index) => (
                    <div className='w-full'>
                        <div
                            className={`bg-black overflow-hidden text-center ${item.name.toLowerCase() == stateDay ? 'w-[140px]' : 'w-[40px]'} p-3 rounded-lg transition-all`}
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
