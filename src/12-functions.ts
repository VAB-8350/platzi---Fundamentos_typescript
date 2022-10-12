(() => {
  type Sizes= 'S' | 'M' | 'L' |'XL'

  function createProductToJson (title: string, createdAt: Date, stock: number, size?: Sizes) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson('p1', new Date(), 12, 'XL')
  console.log(product1)

  const product2 = createProductToJson('p1', new Date(), 12)
  console.log(product2)
})()
