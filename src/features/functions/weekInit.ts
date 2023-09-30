import moment from "moment";

const weekNum = Number(moment().format('w'))
const parity = (weekNum % 2 === 0 ? 'Числитель' : 'Знаменатель')

const weekday = moment().locale("ru").format('dddd')
const day = moment().format('DD')
const month = moment().format("MMMM")

const weekData = {
    parity: parity,
    dayOfWeek: weekday,
    day: day,
    month: month
}

export default weekData