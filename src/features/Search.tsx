'use client'
import React, {useState} from 'react'
import {closeSearch} from "@/store/slices/searchSlice";
import {useAppDispatch} from "@/hooks";
import {getGroup} from "@/store/slices/sheduleCurrentSlice";
import groupss from "@/testArrays/groups.json"

const Search = () => {

    const [changeGroup, setChangeGroup] = useState(false)
    const dispatch = useAppDispatch()
    const [groupId, setGroupId] = useState<string>()
    const [subGroup, setSubGroup] = useState<string>()

    const Groups = groupss
    const groupHandler = (id: string) => {
        setGroupId(id)
        setChangeGroup(true)


    }


    if (groupId != null) {
        for (let i = 1; i <= 1; i++) {

            dispatch(closeSearch())
            dispatch(getGroup({
                groupId: groupId,
            }))
            break

        }
    }


    const [textInInput, setTextInInput] = useState('')
    return (
        <div className='flex items-center justify-center w-full p-4'>
            <div className="absolute cursor-pointer right-3 top-3 font-semibold text-red-reset text-3xl"
                 onClick={() => dispatch(closeSearch())}>X
            </div>
            <div className="w-full">
                <div className="mx-auto border-b-white  border-b-2 mt-16  text-xl w-11/12">
                    <input type='text'
                           onChange={(event) => setTextInInput(event.target.value)}
                           placeholder='Пример: ТЭ-2-5'
                           className='focus-within:outline-0 w-full  py-2 px-3 focus-within: focus-within:border-b-2   bg-black focus:outline-0 focus-within:border-0 bg-opacity-0 text-inherit'/>
                </div>
                <div className="w-11/12 mx-auto mt-10 h-[60dvh] overflow-y-auto">

                    {
                        textInInput !== '' ?
                            Groups.map(item => (
                                <div key={item.id} onClick={() => groupHandler(item.id.toString())}
                                     className="cursor-pointer rounded-lg mb-4 border-b border-ai bg-bg-header w-full p-4 text-xl">
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
