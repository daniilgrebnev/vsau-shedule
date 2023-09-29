'use client'
import store from "@/store";


import React, {useEffect, useState} from "react";
import {Provider} from "react-redux";
import MainPage from "@/widgets/MainPage";
import LogoIcon from "@/entities/icons/LogoIcon";


export default function Home() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        let timeFunc = setTimeout(() => {
            setDomLoaded(true);
        }, 2000)

        return () => {
            clearTimeout(timeFunc)
        }

    }, []);

    return (

        <Provider store={store}>
            {domLoaded ?
                <main className="w-[524px] h-[100dvh] relative bg-gray-900 text-white overflow-hidden ">
                    <MainPage/>
                </main> :
                <div className='w-[524px] relative h-[100dvh] bg-gray-900 flex items-center justify-center'>
                    <div className=" flex items-center flex-col justify-between h-8/12 ">
                        <div className="animate-bounce">
                            <LogoIcon fill={`white`} width={150}/>
                        </div>
                        <p className='text-gray-900 bg-white bg-opacity-70 px-6 rounded-lg py-3 my-10 font-semibold text-2xl text-center'>
                            Загрузка расписания...
                        </p>
                    </div>
                </div>
            }

        </Provider>

    )
}
