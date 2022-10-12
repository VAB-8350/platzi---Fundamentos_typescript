(() => {
  type User = {email: string, password: string}

  const login = (data: User) => {
    console.log(data.email, data.password)
  }

  login({
    email: 'andresbarilin@gmail.com',
    password: '123123123'
  })

  type Sizes= 'S' | 'M' | 'L' |'XL'
  const products: any[] = []

  const addProduct = (data: {title: string, createdAt: Date, stock: number, size?: Sizes}) => {
    products.push(data)
  }

  addProduct({
    title: 'prop1',
    createdAt: new Date(),
    stock: 34
  })

  addProduct({
    title: 'prop1',
    createdAt: new Date(),
    stock: 34,
    size: 'S'
  })

  console.log(products)
})()
