'use client'
import { useAppDispatch } from '@/hooks'
import { closeSearch } from '@/store/slices/searchSlice'
import { getGroup } from '@/store/slices/sheduleCurrentSlice'
import axios, { AxiosResponse } from 'axios'
import { useState } from 'react'
import { dayScheduleConstructor } from './functions/getApi/scheduleArrayMiddleware'

export interface IGroup {
	id: number
	name: string
	faculty: number
}

const Search = () => {
	const [changeGroup, setChangeGroup] = useState(false)
	const dispatch = useAppDispatch()
	const [groupId, setGroupId] = useState<string>()
	const [subGroup, setSubGroup] = useState<string>()
	const [group, setGroup] = useState<IGroup[]>()

	let Groups: any[] | Promise<AxiosResponse<any, any>> = []
	const groupHandler = (id: string) => {
		setGroupId(id)
		dayScheduleConstructor(id)
		setChangeGroup(true)
	}

	if (groupId != null) {
		for (let i = 1; i <= 1; i++) {
			dispatch(closeSearch())
			dispatch(
				getGroup({
					groupId: groupId,
				})
			)
			break
		}
	}
	const setHandler = async (text: string) => {
		setGroup(
			await axios
				.get(
					`http://localhost:8000/api/v1/schedule/groups?search=${textInInput}`
				)
				.then(data => data.data)
		)
		console.log(Groups)

		setChangeGroup(true)
		setTextInInput(text)
	}

	const [textInInput, setTextInInput] = useState('')
	return (
		<div className='flex items-center justify-center w-full p-4'>
			<div
				className='absolute cursor-pointer right-3 top-3 font-semibold text-red-reset text-3xl'
				onClick={() => dispatch(closeSearch())}
			>
				X
			</div>
			<div className='w-full'>
				<div className='mx-auto border-b-white  border-b-2 mt-16  text-xl w-11/12'>
					<input
						type='text'
						onChange={event => setHandler(event.target.value)}
						placeholder='Пример: ТЭ-2-5'
						className='focus-within:outline-0 w-full  py-2 px-3 focus-within: focus-within:border-b-2   bg-black focus:outline-0 focus-within:border-0 bg-opacity-0 text-inherit'
					/>
				</div>
				<div className='w-11/12 mx-auto mt-10 h-[60dvh] overflow-y-auto'>
					{textInInput.length > 1 ? (
						group?.map(item => (
							<div
								key={item.id}
								onClick={() => groupHandler(item.id.toString())}
								className='cursor-pointer rounded-lg mb-4 border-b border-ai bg-bg-header w-full p-4 text-xl'
							>
								{item.name}
							</div>
						))
					) : (
						<p>Введите название группы</p>
					)}
				</div>
			</div>
		</div>
	)
}
export default Search
