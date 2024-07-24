
const SalidaTexto = document.querySelector('area-Salida');
const EntradaTexto = document.getElementById('TextoUsuario');
const BotonEncriptar = document.querySelector('boton-encriptar');
const BotonDesencript = document.querySelector('boton-desencriptar');
const BotonCopiar = document.querySelector('boton-copiar');
const MensajeSalida = document.getElementById('MensajeSalida');
const IntruccSalida = document.querySelector('instrucciones-Salida');
//funcion encriptar
function Encriptar(){
    const TextoIngresado = EntradaTexto.value;
 const TextoEncriptado = TextoIngresado.replace(/e/g,'enter')
    .replace(/i/g,"imes")
    .replace(/a/g,"ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");
    return MostrarMensaje(TextoEncriptado);
 }
//funcion desencriptar
function Desencriptar(){
   const TextoIngresado =  EntradaTexto.value;
    const TextoDesencriptado = TextoIngresado.replace(/enter/g,'e')
    .replace(/imes/g,'i')
    .replace(/ai/g,'a')
    .replace(/ober/g,'o')
    .replace(/ufat/g,'u');
    return  MostrarMensaje(TextoDesencriptado);
} //funcion para mostrar el mensaje de salida
function MostrarMensaje(texto){
    MensajeSalida.innerHTML = texto;
}
function copiar(){ // funcion de copiar el mensaje de salida
let texto = document.getElementById('MensajeSalida');
navigator.clipboard.writeText(texto.textContent);
alert ("copiado");
}
// darle accion a los botones
    document.querySelector('boton-encriptar').addEventListener('click', Encriptar);
    document.querySelector('boton-desencriptar').addEventListener('click',Desencriptar);
    document.querySelector('boton-copiar').addEventListener('click',copiar);