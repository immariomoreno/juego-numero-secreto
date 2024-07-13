/*Para conectar html con Javascript
let titulo = document.querySelector('h1'); Un objeto de tipo titulo; document es un objeto que representa el HTML

querySelector es un método del objeto document que devuelve el primer elemento del
documento que coincide con el selector CSS especificado.
*/

let numeroSecreto = 0;

let intentos = 0;

let listaNumerosSorteados = [];

let numeroMaximo = 10;

//El código repetitivo se puede volver una función como una mejor práctica.
function asignarTextoAElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntentos() {
    let intentoUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    //el === sirve para comparar el valor Y el tipo de dato al mismo tiempo
    if (intentoUsuario === numeroSecreto) {
        asignarTextoAElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto < intentoUsuario) {
            asignarTextoAElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoAElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya se sortearon todos los numeros del 1 al 10
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoAElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //Si el numero generado está incluido en la lista..
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();// Recursividad
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
}

function condicionesIniciales() {
    asignarTextoAElemento('h1', 'Juego del numero secreto');
    asignarTextoAElemento('p', `Ingresa un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

/* Reto para comprender bien los aprendizajes.
function cambiarColorBoton() {
    let boton = document.getElementById('reiniciar');

    boton.style.backgroundColor = 'black';
}
    colar en el HTML para que funcione la función: onmouseover="cambiarColorBoton();"
*/

