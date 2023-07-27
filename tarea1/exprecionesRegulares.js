// Clase de operadores y expresiones

// contraseña simple numeros y letras
// contraseña media numeros, letras y al menos una mayuscula
// contraseña alta numeros, letras, al menos una mayuscula y caracter especial




const passwordSimple = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/

const passwordMedia =/^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\d).{6,}$/
const passwordAlta =/a/





 console.log(passwordSimple.test("hole12323"))
 console.log(passwordMedia.test("hOle12323"))