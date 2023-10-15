'use client'

import { useAppDispatch } from '@/hooks'
import { getGroup } from '@/store/slices/sheduleCurrentSlice'
import Header from '@/widgets/Layout/Header'
import SheduleMainWidget from '@/widgets/shedule/SheduleMainWidget'

const MainPage = () => {
	const dispatch = useAppDispatch()

	const groupId: any = localStorage.getItem('groupId')
	const groupName: any = localStorage.getItem('groupName')
	if (typeof window !== 'undefined') {
		if (groupId !== null) {
			const groupId: any = window.localStorage.getItem('groupId')
			const groupName: any = localStorage.getItem('groupName')
			console.log(groupId)
			dispatch(
				getGroup({
					groupId: groupId,
					groupName: groupName,
				})
			)
			console.log('Get in local')
		} else {
			console.log('SET in local')
			localStorage.setItem('groupId', '-1')
			localStorage.setItem('groupName', 'None')

			const groupId: any = window.localStorage.getItem('groupId')

			dispatch(
				getGroup({
					groupId: groupId,
					groupName: groupName,
				})
			)
		}
	} else {
	}
	return (
		<div>
			<div className=''>
				<Header />
			</div>
			<div className=''></div>
			<div className='z-10 h-full'>
				<SheduleMainWidget />
			</div>
		</div>
	)
}
export default MainPage
