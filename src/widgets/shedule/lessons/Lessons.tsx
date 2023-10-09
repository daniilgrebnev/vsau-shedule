import { lessonTypes } from '@/entities/weekData/lessonTypes'
import { useAppSelector } from '@/hooks'
import anything from '@/testArrays/schedule.json'

const Lessons = ({ id }: any) => {
	const types = lessonTypes
	const Schedule = anything

	const getGroups = useAppSelector(
		state => state.sheduleReducer.initialState.list
	)

	const groupId = Number(getGroups[getGroups.length - 1].groupId)

	const currentShedule = Schedule.find(item => item.id === groupId)

	// const currentColor = types.find()

	return (
		<div className=' flex flex-col w-full h-[100%]   gap-y-2'>
			{currentShedule?.lessons[id - 1]?.numerator.length !== 0 ? (
				currentShedule?.lessons[id - 1]?.numerator.map(item => (
					<div>
						<div className='p-2 bg-bg-header relative rounded-lg w-[90%] mx-auto'>
							<div className=' w-full text-left text-sm '>
								<div className=''>
									{item.time_start} - {item.time_end}
								</div>
							</div>
							<div className=''>
								<div className='mt-5 flex items-center w-full justify-start'>
									<div className=''>{item.name}</div>
									<div className='mx-3 px-2 py-1 bg-bg-main rounded-lg'>
										{item.room}
									</div>
								</div>
								<div
									style={{
										background: `${
											types.find(i => i.type === item.type)?.color
										}`,
									}}
									className={`absolute  font-semibold text-sm top-1 right-1 flex items-center justify-center bg-[] w-14 h-6 rounded-lg`}
								>
									{types.find(i => i.type === item.type)?.name}
								</div>
								<div className='mt-2'>{item.teacher}</div>
							</div>
						</div>
					</div>
				))
			) : (
				<div className='w-full h-full justify-center items-center text-center text-3xl'>
					Нет пар
				</div>
			)}
		</div>
	)
}
export default Lessons
