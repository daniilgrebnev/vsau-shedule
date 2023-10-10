import { lessonTypes } from '@/entities/weekData/lessonTypes'
import { useEffect, useState } from 'react'

interface ILessons {
	weekday: number
	numerator: any[]
	denominator: any[]
}
interface ISchedule {
	id: number
	lessons: ILessons[]
}

const Lessons = ({ weekday, parity }: any) => {
	console.log(parity)

	const [scheduleData, setScheduleData] = useState<ISchedule>()
	useEffect(() => {
		fetch('https://mocki.io/v1/f4d05396-ac9f-45d6-8e31-858c473dcebd').then(
			res =>
				res
					.clone()
					.json()
					.then(data => setScheduleData(data[0]))
					.catch(err => {
						console.log(err)
					})
		)
	}, [])

	console.log(scheduleData)
	const types = lessonTypes

	// const currentColor = types.find()

	return (
		<div className='w-full'>
			<div className='flex flex-col w-full h-[100%]   gap-y-2'>
				{parity == 'numerator' ? (
					scheduleData?.lessons[weekday - 1]?.numerator.length !== 0 ? (
						scheduleData?.lessons[weekday - 1]?.numerator.map(item => (
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
					)
				) : scheduleData?.lessons[weekday - 1]?.denominator.length !== 0 ? (
					scheduleData?.lessons[weekday - 1]?.denominator.map(item => (
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
		</div>
	)
}
export default Lessons
