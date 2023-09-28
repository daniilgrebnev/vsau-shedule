'use client'

import React from 'react'
import Header from "@/widgets/Layout/Header";
import SheduleMainWidget from "@/widgets/shedule/SheduleMainWidget";
import {useAppDispatch} from "@/hooks";
import {getGroup} from "@/store/slices/sheduleCurrentSlice";

const MainPage = () => {
    const dispatch = useAppDispatch()
    if (typeof window !== "undefined") {
        const groupId: any = window.localStorage.getItem("groupId")
        const subGroup: any = localStorage.getItem("subGroup")
        dispatch(getGroup({
                groupId: groupId,
                subGroup: subGroup
            }
        ))
    }
    return (
        <div>
            <div className="">
                <Header/>
            </div>
            <SheduleMainWidget/>
        </div>
    )
}
export default MainPage
