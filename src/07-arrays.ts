(() => {
  let prices = [1, 2, 4, 1, 'hola', true]

  // only recive numbers
  // prices.push('asdf')
  // prices.push(true)
  // prices.push({})

  prices.push(4)

  let mixed: (number | string | boolean)[] = ['hola', true]

  mixed.push(12)


})()
