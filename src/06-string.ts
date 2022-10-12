(() => {
  let productTitle = 'My amazing product'
  productTitle = 'My amazing "product" changed'

  console.log('productTitle', productTitle)

  const doble = "I'malgo bla bla bla"

  const backtic = `
  titulo: ${productTitle}
  description: ${doble}`
  console.log(backtic)
})()
