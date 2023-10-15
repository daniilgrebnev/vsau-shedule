import WaitTextAnimate from '@/entities/Loading/WaitTextAnimate'
import { lessonTypes } from '@/entities/weekData/lessonTypes'
import { weekDays } from '@/entities/weekDay/weekDay'
import { getGroupSchedule } from '@/features/functions/getApi/api'
import moment from 'moment'
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
export type Root = Root2[]

export interface Root2 {
	weekday: number
	numerator: Numerator[]
	denominator: Denominator[]
}

export interface Numerator {
	time_start: string
	time_end: string
	name: string
	type: number
	teacher: string
	room: string
}

export interface Denominator {
	time_start: string
	time_end: string
	name: string
	type: number
	teacher: string
	room: string
}

const Lessons = ({ weekday, parity }: any) => {
	const [isRender, setIsRender] = useState<boolean>(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsRender(true)
		}, 1000)
		return () => clearTimeout(timer)
	})

	const [scheduleData, setScheduleData] = useState<Root2[]>()

	const id = localStorage.getItem('grpoupId')

	useEffect(() => {
		async function fetchData() {
			if (id) {
				const data = await getGroupSchedule(id || '')
				const middleware = data.data
				setScheduleData(middleware)
			}
		}
		fetchData()
	}, [])

	const types = lessonTypes
	// console.log()
	// console.log()
	const dayNum = moment().day()
	console.log(dayNum)
	// const time = moment('2023-10-12 08:30:00').fromNow()
	// console.log(time[0] === 'ч' ? time : 'Прошло')

	console.log()

	return (
		<div className='w-full'>
			{isRender ? (
				<div className='flex flex-col w-full h-[100%]   gap-y-2'>
					{weekDays ? (
						parity.activeParity == 'numerator' ? (
							weekDays[weekday - 1].lessons !== null ? (
								weekDays[weekday - 1]?.lessons?.numerator.map((item, index) => (
									<div className='transition-all' key={index}>
										<div className='p-2 bg-bg-header relative rounded-lg w-[90%] mx-auto'>
											<div className=' w-full text-left text-sm '>
												<div className=''>
													{item.time_start} - {item.time_end}
												</div>
											</div>
											<div className=''>
												<div className='mt-5 flex items-center w-full justify-start'>
													<div className=''>{item.name}</div>

													{item.room === 'NONE' ? (
														''
													) : (
														<div className='mx-3 px-2 py-1 bg-bg-main rounded-lg'>
															{item.room}
														</div>
													)}
												</div>
												<div
													style={{
														background: `${
															types.find(i => i.type === item.type)?.color ||
															'#c47929'
														}`,
													}}
													className={`absolute  font-semibold text-sm top-1 right-1 flex items-center justify-center bg-[] w-14 h-6 rounded-lg`}
												>
													{types.find(i => i.type === item.type)?.name || 'Общ'}
												</div>
												<div className='mt-2'>
													{item.teacher === 'NONE' ? '' : item.teacher}
												</div>
											</div>
										</div>
									</div>
								))
							) : (
								<div className='w-full h-[30dvh] absolute bottom-0 justify-center items-center text-center text-4xl'>
									<div className='bg-bg-header py-3 px-6 rounded-lg w-6/12 mx-auto'>
										Нет пар
									</div>
								</div>
							)
						) : weekDays[weekday - 1].lessons !== null ? (
							weekDays[weekday - 1]?.lessons?.denominator.map((item, index) => (
								<div className='transition-all' key={index}>
									<div className='p-2 bg-bg-header relative rounded-lg w-[90%] mx-auto'>
										<div className=' w-full text-left text-sm '>
											<div className=''>
												{item.time_start} - {item.time_end}
											</div>
										</div>
										<div className=''>
											<div className='mt-5 flex items-center w-full justify-start'>
												<div className=''>{item.name}</div>
												{item.room === 'NONE' ? (
													''
												) : (
													<div className='mx-3 px-2 py-1 bg-bg-main rounded-lg'>
														{item.room}
													</div>
												)}
											</div>
											<div
												style={{
													background: `${
														types.find(i => i.type === item.type)?.color ||
														'#c47929'
													}`,
												}}
												className={`absolute  font-semibold text-sm top-1 right-1 flex items-center justify-center bg-[] w-14 h-6 rounded-lg`}
											>
												{types.find(i => i.type === item.type)?.name || 'Общ'}
											</div>
											<div className='mt-2'>
												{item.teacher === 'NONE' ? '' : item.teacher}
											</div>
										</div>
									</div>
								</div>
							))
						) : (
							<div className='w-full h-[30dvh] absolute bottom-0 justify-center items-center text-center text-4xl'>
								<div className='bg-bg-header py-3 px-6 rounded-lg w-6/12 mx-auto'>
									Нет пар
								</div>
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
				<div className='w-full h-[40dvh] flex items-center justify-center'>
					<WaitTextAnimate />
				</div>
			)}
		</div>
	)
}
export default Lessons
