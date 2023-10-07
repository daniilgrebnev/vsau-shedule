import {useState} from "react";
import weekData from "@/features/functions/weekInit";

const Week = () => {
    const weekDays = [
        {
            name: 'Понедельник',
            shortName: 'Пн',
            activeState: 0
        },
        {
            name: 'Вторник',
            shortName: 'Вт',
            activeState: -100
        },
        {
            name: 'Среда',
            shortName: 'Ср',
            activeState: -200
        },
        {
            name: 'Четверг',
            shortName: 'Чт',
            activeState: -300
        },
        {
            name: 'Пятница',
            shortName: 'Пт',
            activeState: -400
        },
        {
            name: 'Суббота',
            shortName: 'Сб',
            activeState: -500
        },

    ]

    const [stateDay, setStateDay] = useState<any>(weekData.dayOfWeek)
    const [activeTranslate, setActiveTranslate] = useState<any>(-400)
    const [touchPosition, setTouchPosition] = useState<any>(null)
// ...

    const activeItem = (name: string, translate: number) => {
        console.log(name)
        setStateDay(name.toLowerCase())
        setActiveTranslate(Number(translate))
    }
    const mouseStartHandler = (e: any) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }
    const mouseMoveHandler = (e: any) => {
        const touchDown = touchPosition
        const currentTouch = e.touches[0].clientX
        const diff = touchPosition - currentTouch

        if (touchDown === null) {
            return
        }
        if (diff < -5) {
            next()
        } else if (diff > 5) {
            prev()
        }

        setTouchPosition(null)
        return

    }

    const next = () => {

        const day = weekDays.find(item => item.activeState === activeTranslate + 100)
        setStateDay(day ? day.name.toLowerCase() : weekDays[weekDays.length - 1].name.toLowerCase())
        setActiveTranslate(day ? day.activeState : -400)
    }
    const prev = () => {

        const day = weekDays.find(item => item.activeState === activeTranslate - 100)
        setStateDay(day ? day.name.toLowerCase() : weekDays[0].name.toLowerCase())
        setActiveTranslate(day ? day.activeState : 0)
    }
    const styles = {
        transform: `translate(${activeTranslate}%, 0)`
    }

    return (
        <div className='w-full  flex flex-col h-[67dvh] relative justify-around'>
            <div className="absolute w-5 h-5 bg-red-reset bottom-0"></div>
            <div className="">
                <div className='flex  w-full justify-center items-center gap-x-1'>
                    {
                        weekDays.map((item) => (
                            <div className='z-50'>

                                <div key={item.name}
                                     onClick={() => activeItem(item.name, item.activeState)}
                                     className={`  ${item.name.toLowerCase() === weekData.dayOfWeek ? 'border-t-4 border-border-week-today' : 'border-t-4 border-border-week'} shadow-lg bg-bg-header overflow-hidden text-center ${item.name.toLowerCase() == stateDay ? 'w-[110px]' : ' w-[40px]'} text-sm flex items-center justify-center ease-in-out  h-12 rounded-lg duration-300 transition-all`}
                                >
                                    {item.name.toLowerCase() == stateDay ? item.name : item.shortName}

                                </div>


                            </div>
                        ))
                    }
                </div>

            </div>

            <div
                className={`flex w-full h-[100%]  relative bottom-0 left-0 overflow-hidden justify-between`}>
                {
                    weekDays.map((item) => (
                        <div style={styles} onTouchMove={mouseMoveHandler} onTouchStart={mouseStartHandler}
                             className='transition-all duration-300 ease-in-out h-full'>

                            <div

                                className={`transition-all ease-in-out  flex items-center justify-center h-full relative  bottom-0  w-screen overflow-hidden`}
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
