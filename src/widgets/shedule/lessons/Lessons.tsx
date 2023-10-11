import WaitTextAnimate from '@/entities/Loading/WaitTextAnimate'
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

const Lessons = ({ weekday, parity, stateDay }: any) => {
	const [isRender, setIsRender] = useState<boolean>(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsRender(true)
		}, 1000)
		return () => clearTimeout(timer)
	})

	console.log(parity)
	const [day, setDay] = useState(stateDay)
	console.log(stateDay)

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

	console.log(scheduleData && 'loading')
	const types = lessonTypes

	// const currentColor = types.find()

	return (
		<div className='w-full'>
			{isRender ? (
				<div className='flex flex-col w-full h-[100%]   gap-y-2'>
					{scheduleData ? (
						parity == 'numerator' ? (
							scheduleData?.lessons[weekday - 1]?.numerator.length !== 0 ? (
								scheduleData?.lessons[weekday - 1]?.numerator.map(item => (
									<div className='transition-all'>
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
								<div className='transition-all'>
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
					) : (
						<div className=''>
							<div className='w-[90%] mx-auto mb-3 h-32 rounded-lg bg-bg-header animation-skeleton'>
								<div className='animation-skeleton-line'></div>
							</div>
							<div className='w-[90%] mx-auto h-32 rounded-lg bg-bg-header animation-skeleton'>
								<div className='animation-skeleton-line  bg-light-blue'></div>
							</div>
						</div>
					)}
				</div>
			) : (
				<div className='w-full h-[30dvh] flex items-center justify-center'>
					<WaitTextAnimate />
				</div>
			)}
		</div>
	)
}
export default Lessons
