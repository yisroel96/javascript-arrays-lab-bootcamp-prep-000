var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(){
  kittens.push("Ralph");

}

function destructivelyPrependKitten() {
  kittens.unshift("Bob");

}

function destructivelyRemoveLastKitten() {
  kittens.pop();

}
<<<<<<< HEAD

function destructivelyRemoveFirstKitten() {
  kittens.shift();

}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]

}

function removeLastKitten() {
return kittens.slice(0, kittens.length - 1)

}

function removeFirstKitten() {
  return kittens.slice(1)
}
=======
>>>>>>> 38d3028915b6eb40c9c656b81c945133399417c5
