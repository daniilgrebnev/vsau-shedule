'use client'
import React from 'react'
import {useAppSelector} from "@/hooks";
import SheduleWidget from "@/widgets/shedule/sheduleWidget";

const SheduleMainWidget = () => {

    const groups = useAppSelector(state => state.sheduleReducer.initialState.list)

    return (
        <div>{
            groups.length == 0 ? <div className="w-full p-4 h-full flex items-center justify-center">
                Выберете группу
            </div> : <SheduleWidget/>

        }</div>
    )
}
export default SheduleMainWidget
