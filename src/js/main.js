console.log("Arrays []")

console.groupCollapsed("Creación")

let arrays = new Array(4) // -> si le pongo parametro es para length
let arrays2 = Array("a", "b", "c")
let arrays3 = []

console.groupEnd()

const array = [1, 2, 3, 4, 5, "hola", "mundo", true, false, "alpha"]

console.groupCollapsed("Consultar")
console.log(array)
console.log(`El array tiene ${array.length} elementos`)
console.log(`El array en su indice 6: ${array[6]}`)
console.log(`El array en su último indice: ${array.at(-1)}`) // -> -1 es la última posición, at sólo sirve para mostrar
console.log(`El array incluye Lucas: ${array.includes("Lucas")}`) // -> retorna booleano
console.log(`El array incluye Lucas: ${array.indexOf("Lucas")}`) // -> retorna la primera posición, si no existe, devuelve -1
// lastIndexOf = última posición

console.groupEnd()

console.groupCollapsed("Actualizar elementos del array")

array[5] = "hello"
array[6] = "world"
console.log(array)

console.groupEnd()

console.groupCollapsed("Agregar elementos del array")

array[10] = "bravo" 
array.push("charlie") // -> al final del array
array.push("delta")
array.unshift("1") // -> al inicio del array
array.unshift("2")
console.log(array)

console.groupEnd()
