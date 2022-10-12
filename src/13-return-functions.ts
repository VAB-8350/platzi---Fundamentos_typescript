(() => {
  const calcTotal = (prices: number[]): number => {
    return prices.reduce((acu, e) => acu + e, 0)
  }

  const printTotal = (prices: number[], shipping: number): void => {
    console.log(calcTotal(prices) + shipping)
  }

  printTotal([3, 5, 2, 1], 3)
})()
