// Crear un archivo calculadora.js y soporte 1 parámetro de texto
// El programa debe distinguir que operación aritmética quiere hacer el usuario y responder
// Como parte de la consigna es delimitar el alcance de la calculadora
// Importante: La calculadora no debe dar errores en ninguna circunstancia, si hay alguna operación que no soporte debe decirlo

// node calculadora.js "me gustaría sumar 5 y 6"
// node calculadora.js "me sumas 5 con 6"
// node calculadora.js "tengo que hacer una suma de 5 y 6, cuanto me da?"
// node calculadora.js "me dividis 9 con 3"


// Importamos el módulo 'readline' para leer el parámetro de texto
const readline = require('readline');

// Creamos la interfaz para leer la entrada
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para realizar la operación matemática
function calcularOperacion(texto) {
  const palabras = texto.split(' ');

  // Buscamos los números en el texto
  const numeros = palabras.filter(palabra => !isNaN(Number(palabra)));

  // Verificamos el tipo de operación en el texto
  if (texto.includes('sumar') || texto.includes('mas')) {
    const resultado = numeros.reduce((total, num) => total + Number(num), 0);
    console.log(`Resultado: ${resultado}`);
  } else if (texto.includes('restar') || texto.includes('menos')) {
    const resultado = numeros.reduce((total, num) => total - Number(num));
    console.log(`Resultado: ${resultado}`);
  } else if (texto.includes('multiplicar') || texto.includes('por')) {
    const resultado = numeros.reduce((total, num) => total * Number(num), 1);
    console.log(`Resultado: ${resultado}`);
  } else if (texto.includes('dividir') || texto.includes('entre')) {
    const resultado = numeros.reduce((total, num) => total / Number(num));
    console.log(`Resultado: ${resultado}`);
  } else {
    console.log('Operación no soportada. Intente nuevamente.');
  }

  rl.close();
}

// Leemos el parámetro de texto pasado al ejecutar el script
const parametroTexto = process.argv[2];

// Verificamos si se proporcionó un parámetro de texto
if (parametroTexto) {
  calcularOperacion(parametroTexto);
} else {
  console.log('Debe proporcionar un parámetro de texto con la operación a realizar.');
  rl.close();
}