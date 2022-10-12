import { addProduct, calcularStock, products } from './product.service'

addProduct({
  title: 'prop1',
  createdAt: new Date(),
  stock: 34
})

addProduct({
  title: 'prop2',
  createdAt: new Date(),
  stock: 25,
  size: 'S'
})

console.log(products)

console.log(calcularStock())
