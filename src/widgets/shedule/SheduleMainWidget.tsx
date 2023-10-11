'use client'
import SearchIcon from '@/entities/icons/SearchIcon'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { searchHandler } from '@/store/slices/searchSlice'
import SheduleWidget from '@/widgets/shedule/SheduleWidget'

const SheduleMainWidget = () => {
	const dispatch = useAppDispatch()
	const groups = useAppSelector(state => state.sheduleReducer.initialState.list)
	const groupId = groups[groups.length - 1]?.groupId

	return (
		<div>
			{groupId == '-1' ? (
				<div className='className="w-full h-[90dvh] font-semibold text-2xl flex items-center justify-center'>
					<div className='px-4 '>
						<div className='font-normal'>Выберете группу</div>
						<div className='flex items-center  w-9/12 justify-between py-3 px-5 bg-bg-header bg-opacity-70 rounded-lg mx-auto my-4 font-normal text-xl '>
							<p>Поиск</p>
							<p
								className='flex items-start justify-end w-full'
								onClick={() => dispatch(searchHandler())}
							>
								<SearchIcon fill={'white'} width={30} />
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className='h-full'>
					<SheduleWidget />
				</div>
			)}
		</div>
	)
}
export default SheduleMainWidget
