let numeroSecreto = 0; 
let intentos = 0;
let listaNumerosSorteados= []
let numeroMaximo = 10;
console.log (numeroSecreto);

function asignartextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =  texto;
    return;

}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto ) {
        asignartextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else { 
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignartextoElemento('p','El numero secreto es menor');
        } else {
            asignartextoElemento('p','El numero secreto es mayor');
        }
      intentos++;      
      limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   let valorCaja =  document.querySelector('#valorUsuario').value = '';
 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignartextoElemento('p', 'Ya se sortearon todos los numeros')
    } else {

    }
    if (listaNumerosSorteados.includes (numeroGenerado)) {
return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
   
}

function condicionesIniciales() {
    asignartextoElemento('h1', 'juego del numero secreto!');
    asignartextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;

}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de numeros
    // Generar el numero aleatorio
    // Inicializar el numero intentos 
    condicionesIniciales();
    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
} 
  
condicionesIniciales();