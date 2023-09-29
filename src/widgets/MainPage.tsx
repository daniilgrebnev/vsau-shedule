'use client'

import React from 'react'
import Header from "@/widgets/Layout/Header";
import SheduleMainWidget from "@/widgets/shedule/SheduleMainWidget";
import {useAppDispatch} from "@/hooks";
import {getGroup} from "@/store/slices/sheduleCurrentSlice";
import packages from '../../package.json'

const MainPage = () => {
    const dispatch = useAppDispatch()
    const version = packages.version
    const subGroup: any = localStorage.getItem("subGroup")
    if (typeof window !== "undefined") {

        if (subGroup !== null) {
            const groupId: any = window.localStorage.getItem("groupId")
            const subGroup: any = localStorage.getItem("subGroup")
            dispatch(getGroup({
                groupId: groupId,
                subGroup: subGroup
            }))
            console.log("Get in local")
        } else {
            console.log('SET in local')
            localStorage.setItem("groupId", '-1')
            localStorage.setItem("subGroup", '-1')
            const groupId: any = window.localStorage.getItem("groupId")
            const subGroup: any = localStorage.getItem("subGroup")
            dispatch(getGroup({
                groupId: groupId,
                subGroup: subGroup
            }))

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
}
export default MainPage
