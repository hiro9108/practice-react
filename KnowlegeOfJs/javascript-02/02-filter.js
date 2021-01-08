// filter method

const array = ["about", "works", "contact"];

const newArray = array.filter(el => {
  return el !== "about";
})

console.log(array)
console.log(newArray)