(() => {
  let myNumber: number | null = null
  myNumber = 12

  let myString: string | undefined = undefined
  myString = 'hola'

  function hi (name: string | null ) {
    let hola = 'Hola '
    if (name) {
      hola += name
    } else {
      hola += 'nobody'
    }

    console.log(hola)
  }

  hi('nico')
  hi(null)

  function hi2 (name: string | null ) {
    let hola = 'Hola '
    hola += name?.toLowerCase() || 'nobody'

    console.log(hola)
  }

  hi2('nico')
  hi2(null)
})()
