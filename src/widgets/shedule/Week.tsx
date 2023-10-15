import { lessonTypes } from '@/entities/weekData/lessonTypes'
import { weekDays } from '@/entities/weekDay/weekDay'
import { getGroupSchedule } from '@/features/functions/getApi/api'
import { dayScheduleConstructor } from '@/features/functions/getApi/scheduleArrayMiddleware'

import weekData from '@/features/functions/weekInit'
// import anything from '@/testArrays/schedule.json'

import { useEffect, useState } from 'react'
import Lessons, { Root2 } from './lessons/Lessons'

interface IParity {
	numerator?: string
	denominator?: string
}

const Week = (activeParity: any) => {
	const [scheduleData, setScheduleData] = useState<Root2[]>([])
	const [parity] = useState(activeParity.activeParity)
	// const [numerator, setNumerator] = useState<any>([])

	const id = localStorage.getItem('groupId')

	useEffect(() => {
		async function fetchData() {
			if (id) {
				const data = await getGroupSchedule(id)
				const middleware = data
				setScheduleData(middleware)
			}
		}
		if (id) {
			dayScheduleConstructor(id)
		}

		fetchData()
	}, [])
	console.log()

	const types = lessonTypes

	const todayTranslate = weekDays.find(
		item => item.name.toLowerCase() == weekData.dayOfWeek
	)?.activeState

	// ...
	const [stateDay, setStateDay] = useState<any>(weekData.dayOfWeek)
	const [activeTranslate, setActiveTranslate] = useState<any>(todayTranslate)
	const [touchPosition, setTouchPosition] = useState<any>(null)

	const activeItem = (name: string, translate: number) => {
		setStateDay(name.toLowerCase())
		setActiveTranslate(Number(translate))
	}

	const mouseStartHandler = (e: any) => {
		const touchDown = e.touches[0].clientX
		setTouchPosition(touchDown)
	}
	const mouseMoveHandler = (e: any) => {
		const touchDown = touchPosition
		const currentTouch = e.touches[0].clientX
		const diff = touchPosition - currentTouch

		if (touchDown === null) {
			return
		}
		if (diff < -10) {
			next()
		} else if (diff > 10) {
			prev()
		}

		setTouchPosition(null)
		return
	}

	const next = () => {
		const day = weekDays.find(
			item => item.activeState === activeTranslate + 100
		)
		setStateDay(
			day
				? day.name.toLowerCase()
				: weekDays[weekDays.length - 1].name.toLowerCase()
		)
		setActiveTranslate(day ? day.activeState : -500)
	}

	const prev = () => {
		const day = weekDays.find(
			item => item.activeState === activeTranslate - 100
		)
		setStateDay(day ? day.name.toLowerCase() : weekDays[0].name.toLowerCase())
		setActiveTranslate(day ? day.activeState : 0)
	}
	const styles = {
		transform: `translate(${activeTranslate}%, 0)`,
	}

	return (
		<div className='w-full p-0 h-[60vh] relative '>
			{/*<div className="w-10 h-10 bg-red-reset absolute bottom-0 "></div>*/}
			{weekDays ? (
				<div className='flex  w-full justify-center items-center gap-x-1'>
					{weekDays.map((item, index) => (
						<div
							key={index}
							className='z-10 relative rounded-lg overflow-hidden'
						>
							<div
								key={item.name}
								onClick={() => activeItem(item.name, item.activeState)}
								className={`  ${
									item.name.toLowerCase() === weekData.dayOfWeek
										? 'border-t-4 border-border-week-today'
										: 'border-t-4 border-border-week'
								} shadow-lg bg-bg-header  text-center ${
									item.name.toLowerCase() == stateDay
										? 'w-[110px]'
										: ' w-[40px]'
								} text-sm flex items-center justify-center ease-in-out  h-12 rounded-lg duration-300 transition-all`}
							>
								{item.name.toLowerCase() == stateDay
									? item.name
									: item.shortName}
							</div>
							{parity == 'numerator' ? (
								<div className=' transition-all absolute bottom-0 w-full left-0  flex items-center justify-center'>
									{weekDays[item.weekday - 1]?.lessons?.numerator.map(
										(i, index) => (
											<div
												key={index}
												style={{
													background:
														types.find(color => color.type === i.type)?.color ||
														'#c47929',
												}}
												className={`w-full h-[4px] rounded-lg `}
											></div>
										)
									)}
								</div>
							) : (
								<div className='transition-all absolute bottom-0 w-full left-0 gap-x-0.5 flex items-center justify-center'>
									{weekDays[item.weekday - 1]?.lessons?.denominator?.map(
										(i, index) => (
											<div
												key={index}
												style={{
													background:
														types.find(color => color.type === i.type)?.color ||
														'#c47929',
												}}
												className={`w-full h-[4px] rounded-lg `}
											></div>
										)
									)}
								</div>
							)}
						</div>
					))}
				</div>
			) : (
				<div>ERROR</div>
			)}

			<div
				className={`flex w-[100%] mt-5 gap-x-0 py-2 h-[96%] overflow-y-scroll   overflow-x-hidden relative `}
			>
				{weekDays.map(item => (
					<div
						key={item.name}
						style={styles}
						onTouchMove={mouseMoveHandler}
						onTouchStart={mouseStartHandler}
						className='transition-all duration-300 ease-in-out h-full w-full'
					>
						<div
							className={`transition-all flex items-start justify-start ease-in-out  h-[95%] relative  bottom-0 max-w-[520px] w-[100dvw] overflow-x-hidden`}
						>
							<div className='w-full'>
								<Lessons weekday={item.weekday} parity={activeParity} />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default Week
