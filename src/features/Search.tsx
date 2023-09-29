'use client'
import React, {useState} from 'react'
import {closeSearch} from "@/store/slices/searchSlice";
import {useAppDispatch} from "@/hooks";
import {groupData} from "@/testArrays/test.data";
import {getGroup} from "@/store/slices/sheduleCurrentSlice";

const Search = () => {

    const [changeGroup, setChangeGroup] = useState(false)
    const dispatch = useAppDispatch()
    const [groupId, setGroupId] = useState<string>()
    const [subGroup, setSubGroup] = useState<string>()

    const sub_group_array = [
        {
            id: 0,
            name: 'A'
        },
        {
            id: 1,
            name: 'Б'
        },

    ]


    const groupHandler = (id: string) => {
        setGroupId(id)
        setChangeGroup(true)


    }


    if (subGroup != null) {

        if (groupId != null) {
            for (let i = 1; i <= 1; i++) {

                dispatch(closeSearch())
                dispatch(getGroup({
                    groupId: groupId,
                    subGroup: subGroup
                }))
                break

            }
        }
    }


    const [textInInput, setTextInInput] = useState('')
    return (
        <div className=' flex items-center justify-center w-full p-4'>
            <div className="absolute cursor-pointer right-3 top-3 text-red-500 font-black text-3xl"
                 onClick={() => dispatch(closeSearch())}>X
            </div>
            <div className="w-full">
                <div className="mx-auto border-b mt-16  text-xl w-11/12">
                    <input type='text'
                           onChange={(event) => setTextInInput(event.target.value)}
                           placeholder='Пример: ТЭ-2-5'
                           className='focus-within:outline-0 w-full py-2 px-3 focus:border-0 bg-transparent focus:outline-0 focus-within:border-0 bg-opacity-10 text-inherit'/>
                </div>
                <div className="w-11/12 mx-auto mt-10">
                    {
                        changeGroup ?
                            <div
                                className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-100 flex items-center justify-center">
                                <div className="">

                                    <h1 className='text-2xl my-10 left-0 text-center'>Выберете
                                        подгруппу</h1>
                                    <div className="flex items-center justify-between">

                                        {
                                            sub_group_array.map(item => (
                                                <div
                                                    key={item.id}
                                                    onClick={() => setSubGroup(item.id.toString())}
                                                    className='p-10 relative shadow-lg shadow-blue-600 overflow-hidden rounded-lg bg-white text-black text-opacity-70 text-center text-3xl font-semibold m-5 bg-opacity-90'
                                                >
                                                    {/*<div*/}
                                                    {/*    className="w-36 absolute left-0 bottom-2 h-3 bg-blue-200 -rotate-45"></div>*/}
                                                    {item.name}
                                                </div>
                                            ))
                                        }
                                    </div>


                                </div>

                            </div> : <></>
                    }
                    {
                        textInInput !== '' ?
                            groupData.map(item => (
                                <div key={item.id} onClick={() => groupHandler(item.id.toString())}
                                     className=" bg-opacity-5 cursor-pointer rounded-lg mb-4 border-b border-blue-600 bg-white w-full p-4 text-xl">
                                    {item.name}
                                </div>
                            ))

                            :
                            <p>Введите название группы</p>
                    }

                </div>
            </div>

        </div>
    )
}
export default Search
