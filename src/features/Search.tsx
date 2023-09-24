import React from 'react'

const Search = () => {
    return (
        <div className=' flex items-center justify-center w-full'>
            <div className="w-full">
                <div className="mx-auto border-b  mt-16  text-xl w-full">
                    <input type='text'
                           placeholder='Поиск'
                           className='focus-within:outline-0 uppercase w-full py-2 px-3 focus:border-0 focus:outline-0 focus-within:border-0 bg-opacity-10 bg-black text-inherit'/>
                </div>
            </div>
        </div>
    )
}
export default Search
