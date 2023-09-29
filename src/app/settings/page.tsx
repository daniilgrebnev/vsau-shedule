'use client'
import React, {useState} from 'react'
import Link from "next/link";
import ResetIcon from "@/entities/icons/ResetIcon";
import {useRouter} from "next/navigation";

const Settings = () => {

    const [resetAlert, setResetAlert] = useState(false)
    const router = useRouter()
    const resetApp = () => {
        router.back()
        localStorage.clear()

    }

    const resetPopup = (bool: boolean) => {
        setResetAlert(bool)
    }
    return (
        <div className='w-[524px] h-[100dvh] relative bg-gray-900 text-white overflow-hidden p-5'>
            <div className="">
                <Link href='/'>
                    <div
                        className="px-4 py-2 w-1/3 text-black text-center bg-white font-semibold rounded-lg">&#8592; Назад
                    </div>
                </Link>
                <p className='mt-14 mb-4 text-center text-3xl'>Настройки</p>
                <div className="mx-10">
                    <div className="">
                        <div className="">
                            <div
                                className="text-xl font-semibold flex items-center justify-between text-center py-2 rounded-lg">
                                <p>Сброс приложения</p>
                                <div className="bg-red-600 text-white rounded-lg p-3 mx-4"
                                     onClick={() => resetPopup(true)}>
                                    <ResetIcon fill={`white`} width={20}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {resetAlert ?
                    <div
                        className='absolute bg-black bg-opacity-30 top-0 left-0 w-full h-full flex items-center justify-center '>
                        <div className="w-9/12 h-1/4 bg-gray-800 text-lg  rounded-lg relative overflow-hidden">
                            <div className=""></div>
                            <p className='w-full h-full text-center mt-12 text-white'>Вы уверены что хотите полностью
                                сбросить данные приложения?</p>
                            <div className="absolute w-full text-center bottom-0 h-10 grid grid-cols-2">
                                <div className="text-red-400 font-semibold h-full flex items-center justify-center"
                                     onClick={resetApp}>
                                    Да
                                </div>
                                <div className="text-green-300 font-semibold h-full flex items-center justify-center"
                                     onClick={() => resetPopup(false)}>
                                    Нет
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
                }

            </div>


        </div>
    )
}
export default Settings
