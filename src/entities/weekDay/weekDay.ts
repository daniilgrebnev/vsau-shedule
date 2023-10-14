interface IWeekDays {
	weekday: number
	name: string
	shortName: string
	activeState: number
	lessons: ILessons | null
}

export let weekDays: IWeekDays[] = [
	{
		weekday: 1,
		name: 'Понедельник',
		shortName: 'Пн',
		activeState: 0,
		lessons: null,
	},
	{
		weekday: 2,
		name: 'Вторник',
		shortName: 'Вт',
		activeState: -100,
		lessons: null,
	},
	{
		weekday: 3,
		name: 'Среда',
		shortName: 'Ср',
		activeState: -200,
		lessons: null,
	},
	{
		weekday: 4,
		name: 'Четверг',
		shortName: 'Чт',
		activeState: -300,
		lessons: null,
	},
	{
		weekday: 5,
		name: 'Пятница',
		shortName: 'Пт',
		activeState: -400,
		lessons: null,
	},
	{
		weekday: 6,
		name: 'Суббота',
		shortName: 'Сб',
		activeState: -500,
		lessons: null,
	},
]
