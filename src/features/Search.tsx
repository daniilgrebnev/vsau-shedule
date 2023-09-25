'use client'
import React, {useState} from 'react'
import {closeSearch} from "@/store/slices/searchSlice";
import {useAppDispatch} from "@/hooks";
import {groupData} from "@/testArrays/test.data";

const Search = () => {
    const [groups] = useState(groupData)
    const [changeGroup, setChangeGroup] = useState(false)
    const dispatch = useAppDispatch()


    const sub_group_array = [{
        id: 0,
        name: 'A'
    },
        {
            id: 1,
            name: 'Б'
        },
    ]

    const groupHandler = (id: number) => {
        let groupId: number = id
        console.log(groupId)
        setChangeGroup(true)
        return groupId
    }
    const subGroupHandler = (id: number) => {
        const sub_groups_list = ['A', 'Б']
        let subGroup: string = sub_groups_list[id]
        console.log(subGroup)
        setChangeGroup(false)
        return subGroup
    }

    const writeRedux = () => {

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
                        changeGroup ? <div
                            className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
                            <div className="">

                                <h1 className='text-2xl text-center'>Выберете группу</h1>
                                {

                                    sub_group_array.map(i => (
                                        <div onClick={() => subGroupHandler(i.id)}
                                             className='p-12 rounded-lg bg-white text-center text-3xl font-semibold m-2 bg-opacity-30'
                                             key={i.id}>{i.name}</div>
                                    ))
                                }</div>

                        </div> : <></>
                    }
                    {
                        textInInput !== '' ?
                            groups.map(item => (
                                <div key={item.id} onClick={() => groupHandler(item.id)}
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
