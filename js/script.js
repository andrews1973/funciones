/*
Ejercicio 1: Saludo personalizado

Crea una función llamada saludar que acepte un nombre como argumento y devuelva un mensaje de saludo como: "¡Hola, [nombre]!".

*/

function saludar (nombre){
    return `Hola ${nombre}`;
}

console.log(saludar('Andrés'));

/* 
Ejercicio 2: Suma de dos números

Crea una función llamada suma que acepte dos números y devuelva la suma de estos.

*/

const suma = function (num1, num2) { return num1 + num2}

console.log(suma(2,3));

/*
Ejercicio 3: 

Números pares Escribe una función llamada esPar que reciba un número y devuelva true si el número es par o false si es impar.

*/ 

const esPar = (num) => num % 2 ==0 ? num + " Es par" : num + " Es impar"

console.log(esPar(5));
console.log(esPar(6));


/*
Ejercicio 4: 

Mayor de tres números Escribe una función llamada mayorDeTres que reciba tres números como argumentos y devuelva el número mayor.
*/

function mayorDeTres (num1, num2, num3){
    let mayor;
    
    if ((num1 > num2) && (num1 > num3)) {
    mayor = num1;
    } else if (num2 > num1 && num2 > num3) {
        mayor = num2; 
    } else {
        mayor = num3; 
    }
    return mayor
}

console.log(mayorDeTres(1, 5, 2));
console.log(mayorDeTres(1, 5, 7));
console.log(mayorDeTres(10, 5, 7));

/*
Ejercicio 5: Conversión de grados Celsius a Fahrenheit

Crea una función llamada celsiusAFahrenheit que convierta una temperatura de grados Celsius a Fahrenheit usando la fórmula: F = (C * 9/5) + 32.


*/

const celsiusAFahrenheit = (c) => (c * 9/5) + 32

console.log(celsiusAFahrenheit(30));

