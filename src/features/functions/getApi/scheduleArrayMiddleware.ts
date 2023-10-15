import { weekDays } from '@/entities/weekDay/weekDay'
import { getGroupSchedule } from './api'

export const dayScheduleConstructor = async (id: string) => {
	const fetched: ILessons[] = await getGroupSchedule(id)

	console.log(fetched.find(i => i.weekday === 1))

	// weekDays[0].lessons = fetched.find(i => i.weekday === 1) || {}
	// weekDays[1].lessons = fetched.find(i => i.weekday === 2) || {}
	// weekDays[2].lessons = fetched.find(i => i.weekday === 3) || {}
	// weekDays[3].lessons = fetched.find(i => i.weekday === 4) || {}
	// weekDays[4].lessons = fetched.find(i => i.weekday === 5) || {}
	// weekDays[5].lessons = fetched.find(i => i.weekday === 6) || {}
	// (i.lessons = fetched.find(i => i.weekday === 6))
	for (const item of weekDays) {
		item.lessons = fetched.find(day => day.weekday === item.weekday) || null
	}
	// week = weekDays.map(
	// 	(item, index) =>
	// 		function () {
	// 			// for (let i = 1; i > weekDays.length; i++) {
	// 			item.lessons =
	// 				fetched.find(day => day.weekday === item.weekday) || 'none'
	// 			return item
	// 			// }
	// 		}
	// )

	console.log(weekDays)
}
