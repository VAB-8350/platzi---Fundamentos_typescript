import { Product } from './product.model'

export const products: Product[] = []

export const addProduct = (data: Product) => {
  products.push(data)
}

export const calcularStock = (): number => {
  return products.reduce((acu, product) => {return acu + product.stock}, 0)
}
