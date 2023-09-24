import React from 'react'

const Search = () => {
    return (
        <div className=' flex items-center justify-center w-full p-4'>
            <div className="w-full">
                <div className="mx-auto border-b mt-16  text-xl w-11/12">
                    <input type='text'
                           placeholder='Пример: ТЭ-2-5'
                           className='focus-within:outline-0 w-full py-2 px-3 focus:border-0 bg-transparent focus:outline-0 focus-within:border-0 bg-opacity-10 text-inherit'/>
                </div>
                <div className="w-11/12 mx-auto mt-10">
                    <div className=" bg-opacity-30 border-b border-blue-600 bg-black w-full p-4 text-xl">ТЭ-2-5
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Search
