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
			<div className='flex items-start mx-2 mt-1 gap-1 text-center justify-between font-semibold text'>
				<div className='bg-bg-header rounded-bl-lg border-b-2 border-b-border-week px-3 w-1/2 py-2'>
					{weekData.parityRu}
				</div>
				<div className='bg-bg-header rounded-br-lg border-b-2 border-b-border-week px-3 w-1/2 py-2'>
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
					}  top-auto text-center bg-bg-header transition-all`}
				></div>
				<div className=' w-full z-20 flex  items-center text-center relative gap-3 justify-around h-full'>
					<div
						onClick={() => weekParityHandler('numerator')}
						className='w-full h-full py-1 px-3 text-center '
					>
						Числитель
					</div>

					<div
						onClick={() => weekParityHandler('denominator')}
						className='w-full h-full py-1 px-3 text-center'
					>
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
