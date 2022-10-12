(() => {
  type UserID = string | number | boolean
  let userId: UserID

  function greeting(text: UserID, size: Sizes) {
   if (typeof text ==='string') {
    text.toLowerCase()
    console.log(text, size)
   } else if (typeof text === 'number') {
    console.log(text.toFixed(), size)
   } else {
    console.log(text, size)
   }
  }

  // Literal types
  type Sizes= 'S' | 'M' | 'L' |'XL'
  let shirtSize: Sizes
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'

  greeting(111, 'S')
  greeting(true, 'M')
  // greeting('algo', 'pepe') seria un error ya que solo se adminten valores de "Sizes"
})()
