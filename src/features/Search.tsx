'use client'
import React, {useState} from 'react'

const Search = () => {
    const groups = [{
        id: 1,
        name: 'Tэ2-5'
    },
        {
            id: 2,
            name: 'Tм2-5'
        },
        {
            id: 3,
            name: 'НТТС2-9'
        }
    ]


    const [textInInput, setTextInInput] = useState('')
    return (
        <div className=' flex items-center justify-center w-full p-4'>
            <div className="w-full">
                <div className="mx-auto border-b mt-16  text-xl w-11/12">
                    <input type='text'
                           onChange={(event) => setTextInInput(event.target.value)}
                           placeholder='Пример: ТЭ-2-5'
                           className='focus-within:outline-0 w-full py-2 px-3 focus:border-0 bg-transparent focus:outline-0 focus-within:border-0 bg-opacity-10 text-inherit'/>
                </div>
                <div className="w-11/12 mx-auto mt-10">
                    {
                        textInInput !== '' ?
                            groups.map(item => (
                                <div key={item.id}
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
