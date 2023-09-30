import moment from "moment";

const weekNum = Number(moment().format('w'))
const parity = (weekNum % 2 === 0 ? 'Числитель' : 'Знаменатель')

const weekday = moment().locale("ru").format('dddd')
const date = moment().format("DD MMMM")

const weekData = {
    parity: parity,
    weekday: weekday,
    date: date
}

export default weekData