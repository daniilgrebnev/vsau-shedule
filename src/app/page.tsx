'use client'
import Header from "@/widgets/Layout/Header";
import store from "@/store";
import React from "react";
import {Provider} from "react-redux";


export default function Home() {
    return (
        <Provider store={store}>
            <main className="w-[524px] h-[100dvh] relative bg-gray-900 text-white overflow-hidden ">
                <div className="">
                    <Header/>
                </div>
                <div className="w-full p-4 h-full flex items-center justify-center">
                    Выберете группу
                </div>
            </main>
        </Provider>
    )
}
