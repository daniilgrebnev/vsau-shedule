import moment from 'moment'
moment().locale('ru')

const weekNum = Number(moment().format('w'))
let parityRu = weekNum % 2 !== 0 ? 'Числитель' : 'Знаменатель'
let parityEng = weekNum % 2 !== 0 ? 'numerator' : 'denominator'

let dayOfWeek: string

const dayNum = moment().day()
console.log(dayNum)
if (dayNum == 0) {
	dayOfWeek = 'понедельник'
	if (parityEng == 'denominator') {
		parityEng = 'numerator'
		parityRu = 'Числитель'
	} else {
		parityEng = 'denominator'
		parityRu = 'Знаменатель'
	}
} else {
	dayOfWeek = moment().locale('ru').format('dddd')
}

const day = moment().format('LL')

const weekData = {
	parityEng,
	parityRu,
	dayOfWeek,
	day,
}

export default weekData
