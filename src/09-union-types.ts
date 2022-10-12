(() => {
  let userId: string | number
  userId = 1212
  userId = 'Hola'

  function greeting(text: string | number) {
   if (typeof text ==='string') {
    text.toLowerCase()
    console.log(text)
   } else {
    console.log(text.toFixed())
   }
  }

  greeting('hola')
  greeting(123.2314)
})()
