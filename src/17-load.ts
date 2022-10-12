import _ from 'lodash'

const data = [
  {
    username: 'andres',
    role: 'admin'
  },
  {
    username: 'pepe',
    role: 'seller'
  },
  {
    username: 'ana',
    role: 'customer'
  }
]

console.log(_.groupBy(data, (item) => item.role))
console.log(typeof (1 + '1'))
