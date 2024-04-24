// 1. Ejercicio del primer día 

let num1 = Number(prompt("Inserte un número"))
let num2 = Number(prompt("Inserte otro número"))

if (num1 > num2) {
    console.log(`El primer número (${num1}) es mayor que el segundo (${num1})`)
    let resta = num1 - num2
    console.log(`Su resta es ${resta}`)
    if (String(resta).includes("-")) {
        console.log(`Resta es negativo`) 
    } else {
        console.log(`Resta es positivo`)        
    }
} else {
    console.log(`El primer número es menor que el segundo`)
}

// 2. Ejercicio del primer día 

let operacion = parseInt(prompt(`
Selecciona el número de la operación a realizar:
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
`))

let respuesta

switch (operacion) {
    case 1:
        respuesta = num1 + num2
        Math.round(respuesta)
        console.log(`El resultado de la suma ${parseFloat(respuesta)}`)
        break;
    case 2:
        respuesta = num1 - num2
        Math.round(respuesta)
        console.log(`El resultado de la resta ${parseFloat(respuesta)}`)
        break;
    case 3:
        respuesta = num1 * num2
        Math.round(respuesta)
        console.log(`El resultado de la multiplicación es ${parseFloat(respuesta)}`)
        break;
    case 4:
        respuesta = num1 / num2
        Math.round(respuesta)
        console.log(`El resultado de la división ${parseFloat(respuesta)}`)
        break;
    default:
        console.error("Debes ingresar un número entre 1 y 4")
        break;
}