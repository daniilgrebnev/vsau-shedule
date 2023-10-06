import {useState} from "react";
import weekData from "@/features/functions/weekInit";

const Week = () => {
    const weekDays = [
        {
            name: 'Понедельник',
            shortName: 'Пн',
            activeState: '0'
        },
        {
            name: 'Вторник',
            shortName: 'Вт',
            activeState: '-100%'
        },
        {
            name: 'Среда',
            shortName: 'Ср',
            activeState: '-200%'
        },
        {
            name: 'Четверг',
            shortName: 'Чт',
            activeState: '-300%'
        },
        {
            name: 'Пятница',
            shortName: 'Пт',
            activeState: '-400%'
        },

    ]

    const [stateDay, setStateDay] = useState<string>(weekData.dayOfWeek)
    const [activeTranslate, setActiveTranslate] = useState(weekDays.find(name => name.name.toLowerCase() === weekData.dayOfWeek.toLowerCase())?.activeState)

    const activeItem = (name: string, translate: string) => {
        setStateDay(name.toLowerCase())
        setActiveTranslate(translate)
    }
    const styles = {
        transform: `translate(${activeTranslate}, 0)`
    }
    console.log(stateDay)
    console.log('today ' + weekData.dayOfWeek)
    console.log(activeTranslate)
    return (
        <div className='w-full mx-auto flex justify-center items-center'>
            <div className="">
                <div className='flex  w-full justify-center items-center gap-x-1'>
                    {
                        weekDays.map((item) => (
                            <div>

                                <div key={item.name}
                                     className={`  ${item.name.toLowerCase() === weekData.dayOfWeek ? 'border-t-4 border-green-400' : 'border-t-4 border-black'} bg-black overflow-hidden text-center ${item.name.toLowerCase() == stateDay ? 'w-[130px]' : ' w-[50px]'} flex items-center justify-center  h-12 rounded-lg transition-all`}
                                     onClick={() => activeItem(item.name, item.activeState)}>
                                    {item.name.toLowerCase() == stateDay ? item.name : item.shortName}

                                </div>


                            </div>
                        ))
                    }
                </div>

            </div>
            <div
                className={`flex w-full h-[60%]  absolute bottom-0 left-0 overflow-hidden justify-between`}>
                {
                    weekDays.map((item) => (
                        <div style={styles} className='transition-all'>
                            <div

                                className={`transition-all flex items-center justify-center h-full relative  bottom-0  w-screen overflow-hidden`}
                                key={item.name}>

                                <div className="text-4xl  w-10/12 h-[90%] flex items-center justify-center">
                                    {item.name}
                                </div>

                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Week
