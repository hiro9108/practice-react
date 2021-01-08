// map method

const array = ["about", "works", "contact"];

const newArray = array.map(el => {
  return `<li>${el}</li>`
})

console.log(array)
console.log(newArray)