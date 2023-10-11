import weekInit from '@/features/functions/weekInit'
import { useAppSelector } from '@/hooks'
import groupss from '@/testArrays/groups.json'
import Week from '@/widgets/shedule/Week'
import { useState } from 'react'

const SheduleWidget = () => {
	const [activeParity, setActiveParity] = useState<string>(weekInit.parityEng)
	console.log(activeParity)

	const Groups = groupss

	const groups = useAppSelector(state => state.sheduleReducer.initialState.list)

	const currentArray = groups.length - 1

	const WeekCarousel = () => <Week activeParity={activeParity} />

	const groupName = Groups.find(
		item => item.id === Number(groups[currentArray].groupId)
	)?.name

	const weekParityHandler = (parity: string) => {
		setActiveParity(parity)
	}

	const weekData = weekInit
	return (
		<div className=' h-full'>
			<div className='flex items-start mx-2 mt-1 gap-1 text-center justify-center font-semibold text'>
				<div className='bg-bg-header rounded-lg border-b-2 border-b-border-week px-3 w-10/12 py-2'>
					{weekData.day}
				</div>
			</div>

			<div className='my-5 text-center'>
				<span className='text-3xl font-semibold'>{groupName}</span>
			</div>
			<div className='w-10/12 mx-auto overflow-hidden my-7  relative '>
				{/* <div className='absolute w-full h-[36px] bg-bg-header left-0 top-0 opacity-25'></div> */}
				<div
					className={`absolute rounded-lg w-1/2 h-full ${
						activeParity === 'numerator' ? 'left-[0%]' : 'left-[50%]'
					}  top-auto text-center bg-bg-header transition-all duration-200 d`}
				></div>
				<div className=' w-full z-20 flex  items-center text-center relative gap-0 justify-betwen h-full'>
					<div
						onClick={() => weekParityHandler('numerator')}
						className='w-full h-full relative py-1 px-3 text-center rounded-lg '
					>
						{weekInit.parityEng === 'numerator' && (
							<div className='absolute left-5 top-2 rounded-full w-3 h-3 bg-border-week'></div>
						)}
						Числитель
					</div>

					<div
						onClick={() => weekParityHandler('denominator')}
						className='w-full h-full py-1 px-3 relative text-center  border-1 border-solid'
					>
						{weekInit.parityEng === 'denominator' && (
							<div className='absolute left-2 top-2 rounded-full w-3 h-3 bg-border-week'></div>
						)}
						Знаменатель
					</div>
				</div>
			</div>
			<div className='w-full transition-all h-full flex items-center justify-center'>
				<WeekCarousel />
			</div>
		</div>
	)
}
export default SheduleWidget
