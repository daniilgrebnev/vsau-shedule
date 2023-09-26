'use client'
import Header from "@/widgets/Layout/Header";
import store from "@/store";
import React from "react";
import {Provider} from "react-redux";
import SheduleMainWidget from "@/widgets/shedule/SheduleMainWidget";


export default function Home() {

    return (
        <Provider store={store}>
            <main className="w-[524px] h-[100dvh] relative bg-gray-900 text-white overflow-hidden ">
                <div className="">
                    <Header/>
                </div>
                <SheduleMainWidget/>

            </main>
        </Provider>
    )
}
