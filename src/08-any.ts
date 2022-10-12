(() => {
  let myDynamicVar: any;
  myDynamicVar = 122
  myDynamicVar = null
  myDynamicVar = {}
  myDynamicVar = ''

  myDynamicVar = 'hola'
  const rta = (myDynamicVar as string)
  rta.toLowerCase()
  console.log(rta)

  myDynamicVar = 123
  const rta2 = (<number>myDynamicVar)
  rta2.toFixed()
  console.log(rta2)
})()
