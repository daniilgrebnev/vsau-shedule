import moment from "moment";

const weekNum = Number(moment().format('w'))
const parity = (weekNum % 2 !== 0 ? 'Числитель' : 'Знаменатель')

const weekday = moment().locale("ru").format('dddd')
const day = moment().format('ll')


const weekData = {
    parity: parity,
    dayOfWeek: weekday,
    day: day,

}

export default weekData