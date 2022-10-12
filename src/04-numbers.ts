(() => {
  let productPrice = 0
  productPrice = 34
  console.log('productPrice', productPrice)

  let customerAge: number = 213
  customerAge = customerAge + 1

  console.log('customerAge', customerAge)

  let productInStock: number
  console.log('productInStock', productInStock)

  if (productInStock > 10) {
    console.log('is greater')
  }

  let discount = parseInt('200')

  console.log('discount', discount)

  if (discount >= 200) {
    console.log('apply')
  } else {
    console.log('not apply')
  }

  let hex = 0xfff
  console.log('hex', hex)

  let bin = 0b00110101
  console.log(bin)

})()
