import moment from 'moment'

const weekNum = Number(moment().format('w'))
const parityRu = weekNum % 2 !== 0 ? 'Числитель' : 'Знаменатель'
const parityEng = weekNum % 2 !== 0 ? 'numerator' : 'denominator'

let dayOfWeek = moment().locale('ru').format('dddd')

if (dayOfWeek === 'воскресенье') {
	dayOfWeek = 'понедельник'
}

const day = moment().format('ll')

const weekData = {
	parityEng,
	parityRu,
	dayOfWeek,
	day,
}

export default weekData
