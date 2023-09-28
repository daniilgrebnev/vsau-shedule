'use client'
import store from "@/store";


import React from "react";
import {Provider} from "react-redux";
import MainPage from "@/pages/MainPage";


export default function Home() {

    return (
        <Provider store={store}>
            <main className="w-[524px] h-[100dvh] relative bg-gray-900 text-white overflow-hidden ">
                <MainPage/>
            </main>
        </Provider>
    )
}
