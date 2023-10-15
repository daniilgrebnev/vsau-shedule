'use client'
import { useAppDispatch } from '@/hooks'
import { closeSearch } from '@/store/slices/searchSlice'
import { getGroup } from '@/store/slices/sheduleCurrentSlice'
import axios from 'axios'
import { useState } from 'react'

import { facultyTypes } from '@/entities/facultyTypes'
import Delete from '@/entities/icons/Delete'
import { capitalize } from './functions/capitalize'
import { dayScheduleConstructor } from './functions/getApi/scheduleArrayMiddleware'

export interface IGroup {
	id: number
	name: string
	faculty: number
}

const Search = () => {
	const [changeGroup, setChangeGroup] = useState(false)
	const dispatch = useAppDispatch()
	const [textInInput, setTextInInput] = useState('')
	const [groupId, setGroupId] = useState<string>()
	const [search, setSearch] = useState<string>('')
	const [group, setGroup] = useState<IGroup[]>()
	const [groupName, setGroupName] = useState<string>()

	let Groups: any[] = []
	const groupHandler = (id: string, name: string) => {
		setGroupId(id)
		dayScheduleConstructor(id)

		dispatch(closeSearch())
		dispatch(
			getGroup({
				groupId: id,
				groupName: name,
			})
		)
	}

	const setHandler = async (text: string) => {
		setSearch(text)
		console.log(text)

		if (text.length >= 1) {
			setGroup(
				await axios
					.get(
						`http://localhost:8000/api/v1/schedule/groups?search=${capitalize(
							text
						)}`
					)
					.then(data => data.data)
			)
		}

		setChangeGroup(true)
		setTextInInput(text)
	}

	return (
		<div className='flex items-center justify-center w-full p-4'>
			<div
				className='absolute cursor-pointer right-3 top-3 font-semibold text-red-reset text-3xl'
				onClick={() => dispatch(closeSearch())}
			>
				<Delete width={40} fill='#E4473F' />
			</div>
			<div className='w-full'>
				<div className='mx-auto border-b-white  border-b-2 mt-16  text-xl w-11/12'>
					<input
						type='text'
						onChange={event => setHandler(event.target.value)}
						placeholder='Пример: ТЭ2-5'
						className='focus-within:outline-0 w-full capitalize  py-2 px-3 focus-within: focus-within:border-b-2   bg-black focus:outline-0 focus-within:border-0 bg-opacity-0 text-inherit'
					/>
				</div>
				<div className='w-11/12 mx-auto mt-10 h-[60dvh] overflow-y-auto'>
					{search?.length !== 0 ? (
						<div>
							{group?.length !== 0 ? (
								group?.map(item => (
									<div className=''>
										<div
											style={{
												borderBottomColor:
													facultyTypes.find(i => i.num == item.faculty)
														?.color || 'white',
											}}
											key={item.id}
											onClick={() =>
												groupHandler(item.id.toString(), item.name)
											}
											className='cursor-pointer rounded-lg mb-4 border-b-2 border-ai bg-bg-header w-full p-4 text-xl'
										>
											{item.name}
										</div>
									</div>
								))
							) : (
								<div className='w-full justify-center text-left items-center  '>
									<div className=' py-3 px-6 rounded-lg text-xl mx-auto'>
										Не найдено
									</div>
								</div>
							)}
						</div>
					) : (
						<div className='w-full justify-center text-left items-center  '>
							<div className=' py-3 px-6 rounded-lg text-lg mx-auto'>
								Введите название группы <br /> Например: Тэ2-5
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
export default Search
