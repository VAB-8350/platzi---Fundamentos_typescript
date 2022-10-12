import { subDays, format } from 'date-fns'

const date = new Date (1998, 1,28)
const res = subDays(date, 30)
const string = format(res, 'yyy/MM/ddd')

console.log(string)
